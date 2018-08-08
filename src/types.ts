import { ComponentConstructor, FunctionalComponent, Component } from 'preact';
import { IView, View } from '@viewjs/view';

export type PropType = { [key: string]: any };

export type ComponentType<P extends PropType> = ComponentConstructor<P, any> | FunctionalComponent<P>;

export interface UnmountOptions {
    el: Element;
    component?: any;
}

export interface IComponentRenderer {
    render(Component: ComponentType<any>, attributes: any, children: JSX.Element[], container: Element, prev?: Element): Element;
    unmount(options: UnmountOptions): boolean;
}

export interface IComponentContainer {
    render(attribute?: PropType | ((view: IView) => PropType)): this;
    unmount(): this;
    getInstance<T extends Component<any>>(): T | undefined;
}


export interface IComponentView {
    renderComponent<P extends PropType>(Component: ComponentType<P>,
        selector: string | Element,
        props?: P | ((view: View) => P),
        name?: string,
        children?: JSX.Element[]): any


    findComponent(name: string): IComponentContainer | undefined;
}