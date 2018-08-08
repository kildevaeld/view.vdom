import { Component } from 'preact';
import { IComponentRenderer, ComponentType, PropType, IComponentContainer, ConditionType, ComponentContainerOptions } from './types';
import { IView } from '@viewjs/view';
import { isFunction, isString, uniqueId, Subscribable, Subscription, isSubscribable } from '@viewjs/utils';


export class ComponentContainer<TView extends IView, P extends PropType> implements IComponentContainer {

    get selector() {
        return this._options.selector;
    }

    get name() {
        return this._options.name;
    }

    get attributes(): P | ((view: TView) => P) {
        return this._attributes || this._options.attributes || {} as P;
    }

    get async() {
        return typeof this._async === 'boolean' ? this._async : !!this._options.async
    }

    set condition(condition: ConditionType | undefined) {
        if (this._subscription) {
            this._subscription.unsubscribe();
        }
        this._condition = condition;
        if (this._condition)
            this._initializeCondition()
    }

    get condition() {
        return typeof this._condition === 'undefined' ? this._options.condition : this._condition;
    }

    private _condition?: ConditionType;
    private _shouldRender = true;
    private _loading = false;
    private _subscription: Subscription | undefined;

    private _options: ComponentContainerOptions<P>
    private _el?: Element;
    private _component?: Component<P>;
    private _attributes: P | ((view: TView) => P) | undefined;
    private _async?: boolean

    id = uniqueId();

    getInstance<T extends Component<any>>(): T | undefined {
        return this._component as T;
    }

    constructor(
        private renderer: IComponentRenderer,
        private view: TView,
        options: ComponentContainerOptions<P>
    ) {

        this._options = Object.assign({}, options);

        if (this._options.condition)
            this.condition = this._options.condition;

    }

    render(attributes?: P | ((view: TView) => P)) {

        if (!this._shouldRender) return this;

        let el: string | Element | null | undefined = this.selector;
        if (isString(el))
            el = this.view.el!.querySelector(el);

        if (!el) {
            throw new ReferenceError(`element with selector '${this.selector}' not found in the dom`);
        }

        if (this.async) {
            if (this._loading) return this;
            this._loading = true;
            const result = (this._options.component as (() => Promise<ComponentType<any>> | ComponentType<any>))();
            Promise.resolve(result)
                .then(ret => {
                    this._async = false;
                    this._options.component = ret;
                    this.render(attributes);
                    this._loading = false;
                });

        } else {
            attributes = this._resolveAttributes(attributes || this.attributes) || {};
            const oldRef = (attributes as any).ref
            const props = Object.assign({
                ref: (ref: any) => {
                    this._component = ref
                    if (isFunction(oldRef)) oldRef(ref);
                }
            }, attributes);

            this._attributes = attributes;

            this._el = this.renderer!.render(this._options.component as ComponentType<any>, props, this._options.children || [], el, this._el);
        }

        return this;
    }

    unmount() {
        if (!this._component) return this;
        this.renderer.unmount({ el: this._el!, component: this._component });
        this._component = void 0;
        this._el = void 0;
        if (!this._options.preserveAttributeOnUnmount) {
            this._attributes = void 0;
        }
        return this;
    }

    destroy() {
        if (this._subscription)
            this._subscription.unsubscribe();
        this.unmount();

        return this;
    }

    private _initializeCondition() {

        let result: Subscribable<boolean> | undefined | boolean;

        if (isFunction(this.condition)) {
            result = this.condition(this.view);
        } else if (isSubscribable(this.condition)) {
            result = this.condition;
        } else if (typeof this.condition === 'boolean') {
            result = this.condition;
        } else {
            throw TypeError("invalid condition variable");
        }
        if (isSubscribable(result)) {
            this._shouldRender = false;
            this._subscription = result.subscribe(render => {
                this._shouldRender = render === null ? true : render;
                if (render) {
                    this.render();
                } else {
                    this.unmount();
                }
            })
        } else {
            this._shouldRender = !!result;
        }
    }

    private _resolveAttributes(input: P | ((view: TView) => P) | undefined): P {
        return (isFunction(input) ? input(this.view) : input) || {} as P;
    }

}