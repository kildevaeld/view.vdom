import { isFunction, Constructor } from '@viewjs/utils';
import { IView } from '@viewjs/view';
import { ComponentType, PropType, IComponentRenderer, IComponentView, ConditionType, ComponentContainerOptions } from './types';
import { ComponentContainer } from './component-container';

export interface ComponentOptions<P extends PropType> {
    component?: ComponentType<P> | (() => Promise<ComponentType<P>> | P);
    attributes?: P | ((view: IView) => P);
    children?: JSX.Element[];
    name?: string;
    async?: boolean;
    condition?: ConditionType;
    preserveAttributeOnUnmount?: boolean;
}

const ComponentsKey = Symbol('view@components');

export function component<P extends PropType>(selector: string, options: ComponentOptions<P> = {}) {
    return function <T extends IComponentView>(target: T, prop: string) {
        let Component: ComponentType<P> | undefined | (() => Promise<ComponentType<P>> | P);
        if (isFunction(options.component)) {
            Component = options.component;
        } else {
            Component = Reflect.getOwnMetadata("design:type", target, prop);
        }

        if (!Component) throw new Error(`design:type does not exists for prop '${prop}' on '${target}'`);

        let meta = Reflect.getOwnMetadata(ComponentsKey, target);
        if (!meta) {
            meta = [];
            Reflect.defineMetadata(ComponentsKey, meta, target);
        }

        meta.push({
            selector: selector,
            component: Component,
            attributes: options.attributes || {},
            name: options.name || prop,
            async: !!options.async,
            condition: options.condition,
            preserveAttributeOnUnmount: options!.preserveAttributeOnUnmount
        });

        return {
            get: function (this: T) {
                const found = this.findComponent(prop);
                return found ? found.getInstance() : void 0;
            }
        } as any;

    }
}

export type ComponentsOptions<P extends PropType> = {
    [key: string]: {
        component: ComponentType<P> | (() => Promise<ComponentType<P>> | P);
        attributes?: P | ((view: IView) => P);
        children?: JSX.Element[];
        selector: string;
        name?: string;
        async?: boolean;
        condition?: ConditionType;
        preserveAttributeOnUnmount?: boolean;
    };
};

export function components<P extends PropType>(options: ComponentsOptions<P>) {
    return function <T extends IComponentView>(target: Constructor<T>) {

        let meta = Reflect.getOwnMetadata(ComponentsKey, target.prototype);
        if (!meta) {
            meta = [];
            Reflect.defineMetadata(ComponentsKey, meta, target.prototype);
        }

        for (let k in options) {
            var v = options[k];
            meta.push(Object.assign({ name: k }, v));
        }

    }
}


export function componentFromMeta(renderer: IComponentRenderer, view: IView): ComponentContainer<IView, any>[] {

    let out = Reflect.getMetadata(ComponentsKey, view);
    if (!out) return [];

    return out.map((m: ComponentContainerOptions<any>) => new ComponentContainer<IView, any>(renderer, view, m));

}