import { Component } from 'preact';
import { IComponentRenderer, ComponentType, PropType, IComponentContainer } from './types';
import { IView } from '@viewjs/view';
import { isFunction, isString, uniqueId } from '@viewjs/utils';


export interface ComponentContainerOptions<P extends PropType> {
    componentType: ComponentType<P>
    selector: string | Element;
    attributes?: P | ((view: IView) => P);
    children?: JSX.Element[];
    name: string;
    async?: boolean;
}

export class ComponentContainer<TView extends IView, P extends PropType> implements IComponentContainer {

    el?: Element;
    component?: Component<P>;

    componentType?: ComponentType<any> | (() => Promise<ComponentType<any>> | ComponentType<any>)
    selector?: string | Element | null;
    attributes?: P | ((view: TView) => P);
    children?: JSX.Element[]
    name?: string;
    async?: boolean;


    private _loading = false;

    id = uniqueId();

    getInstance<T extends Component<any>>(): T | undefined {
        return this.component as T;
    }

    constructor(
        private renderer: IComponentRenderer,
        private view: TView,
        options: ComponentContainerOptions<P>) {
        Object.assign(this, options);
    }


    render(attributes?: P | ((view: TView) => P)) {
        attributes = attributes || this.attributes
        if (isFunction(attributes))
            attributes = attributes(this.view);

        let el: string | Element | null | undefined = this.selector;
        if (isString(el))
            el = this.view.el!.querySelector(el);

        if (!el) {
            throw new ReferenceError(`element with selector '${this.selector}' not found in the dom`);
        }


        const oldRef = (attributes as any).ref

        let props = Object.assign({
            ref: (ref: any) => {
                this.component = ref
                if (isFunction(oldRef)) oldRef(ref);
            }
        }, attributes);

        if (this.async) {
            if (this._loading) return this;
            this._loading = true;
            const result = (this.componentType as (() => Promise<ComponentType<any>> | ComponentType<any>))();
            Promise.resolve(result)
                .then(ret => {

                    this.async = false;
                    this.componentType = ret;
                    this.render(attributes);
                    this._loading = false;
                });

        } else {
            this.el = this.renderer!.render(this.componentType as ComponentType<any>, props, this.children || [], el, this.el);
        }

        return this;
    }

    unmount() {
        if (!this.component) return this;
        this.renderer.unmount({ el: this.el!, component: this.component });
        this.component = void 0;
        this.el = void 0;
        return this;
    }

    destroy() {
        this.unmount();
        return this;
    }

}