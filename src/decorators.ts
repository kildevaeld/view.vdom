import { isFunction } from '@viewjs/utils';
import { IView } from '@viewjs/view';
import { ComponentType, PropType, IComponentRenderer, IComponentView } from './types';
import { ComponentContainer } from './component-container';

export interface ComponentOptions {
    component?: ComponentType<any> | (() => Promise<ComponentType<any>>);
    attributes?: PropType | ((view: IView) => PropType)
    async?: boolean;
}

export const ComponentsKey = Symbol('view@components');

export function component(selector: string, options: ComponentOptions = {}) {
    return function <T extends IComponentView>(target: T, prop: string) {

        let Component: ComponentType<any> | undefined | (() => Promise<ComponentType<any>>);
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
            name: prop,
            async: !!options.async,
        });

        return {
            get: function (this: T) {
                const found = this.findComponent(prop);
                return found ? found.getInstance() : void 0;
            }
        } as any;

    }
}


export function componentFromMeta(renderer: IComponentRenderer, view: IView): ComponentContainer<IView, any>[] {

    let out = Reflect.getMetadata(ComponentsKey, view);
    if (!out) return [];

    return out.map((m: any) => {
        return new ComponentContainer(renderer, view, {
            selector: m.selector,
            componentType: m.component,
            attributes: m.attributes,
            name: m.name,
            async: m.async
        });
    });

}