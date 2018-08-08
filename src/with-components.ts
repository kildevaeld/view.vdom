import { Constructor, isString, result, uniqueId } from '@viewjs/utils';
import { View, IView } from '@viewjs/view';
import { ComponentContainer } from './component-container';
import { IComponentView, ComponentType, IComponentRenderer, PropType } from './types';
import { componentFromMeta } from './decorators';


export function withComponents<
    T extends Constructor<View>,
    R extends IComponentRenderer,>(Base: T, renderer: IComponentRenderer | (() => IComponentRenderer)): T & Constructor<IComponentView> {

    return class extends Base {

        protected _renderer = renderer;
        private _components: ComponentContainer<any, any>[] | undefined;
        private _componentsRendered = false;

        constructor(...args: any[]) {
            super(...args);

            componentFromMeta(result<IComponentRenderer>(this, '_renderer')!, this)
                .forEach(found => {
                    if (this.findComponent(found!.name))
                        throw new TypeError(`a component with name '${found!.name}' already registered`);
                    this.components.push(found);
                });
        }

        public get components() {
            if (!Array.isArray(this._components))
                this._components = [];
            return this._components!;
        }

        render() {
            this._componentsRendered = false;
            super.render();
            this._renderComponents();
            this._componentsRendered = true;
            return this;
        }

        findComponent(name: string) {
            return this.components.find(m => m.name === name);
        }

        renderComponent<P extends PropType>(Component: ComponentType<P>,
            selector: string | Element,
            props?: P | ((view: IView) => P),
            name?: string,
            children: JSX.Element[] = []): any {

            let renderer = result<R>(this, "_renderer")
            const found = new ComponentContainer(renderer!, this, {
                selector: selector,
                attributes: props,
                component: Component,
                children: children,
                name: name || (isString(selector) ? selector : uniqueId())
            });

            if (this.components.find(m => m.name === found!.name))
                throw new TypeError(`a component with name '${found!.name}' already registered`);

            this.components.push(found!);
            if (this._componentsRendered)
                found!.render();

        }

        private _renderComponents() {
            for (let item of this.components) {
                item.render()
            }
        }

        destroy() {
            super.destroy();
            for (let item of this.components) {
                item.destroy();
            }
            this._components = [];
            return this;
        }

    };
}