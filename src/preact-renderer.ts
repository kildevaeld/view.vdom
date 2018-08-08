import { IComponentRenderer, ComponentType, UnmountOptions, IComponentView } from './types';
import { render, h } from 'preact';
import { withComponents } from './with-components';
import { View, BaseViewOptions } from '@viewjs/view';
import { Constructor } from '@viewjs/utils';

function removeNode(node: Node) {
    var parentNode = node.parentNode;
    if (parentNode) parentNode.removeChild(node);
}

function removeChildren(node: Node) {
    node = node.lastChild!;
    while (node) {
        var next = node.previousSibling;
        recollectNodeTree(node, true);
        node = next!;
    }
}

function recollectNodeTree(node: any, unmountOnly: boolean) {
    var component = node._component;
    if (component) {
        unmountComponent(component);
    } else {
        if (node['__preactattr_'] != null && node['__preactattr_'].ref) node['__preactattr_'].ref(null);

        if (unmountOnly === false || node['__preactattr_'] == null) {
            removeNode(node);
        }
        removeChildren(node);
    }
}

function unmountComponent(component: any) {

    var base = component.base;

    component._disable = true;

    if (component.componentWillUnmount) component.componentWillUnmount();

    component.base = null;

    var inner = component._component;
    if (inner) {
        unmountComponent(inner);
    } else if (base) {
        if (base['__preactattr_'] && base['__preactattr_'].ref) base['__preactattr_'].ref(null);

        component.nextBase = base;

        removeNode(base);
        removeChildren(base);
    }

    if (component.__ref) component.__ref(null);
}

var _instance: PreactRenderer | undefined;

export class PreactRenderer implements IComponentRenderer {

    render(Compoent: ComponentType<any>, attributes: any, children: JSX.Element[], container: Element, prev?: Element): Element {
        return render(h(Compoent, attributes, children), container, prev);
    }

    unmount(options: UnmountOptions): boolean {
        if (options.component)
            unmountComponent(options.component);
        else if (options.el && options.el.parentElement)
            options.el.parentElement.removeChild(options.el);

        return true;
    }

    static get shared() {
        if (!_instance) {
            _instance = new PreactRenderer();
        }
        return _instance;
    }
}

export class PreactView extends withComponents<Constructor<View<HTMLElement, BaseViewOptions<HTMLElement>>>, PreactRenderer>(View, () => PreactRenderer.shared) implements IComponentView { }
