import { View, event } from '@viewjs/view';
import { withComponents, component } from '../';
import { Test } from './component';
import { PreactRenderer } from './preact-renderer';




function delay() {
    return new Promise((res, _rej) => {
        setTimeout(() => {
            res()
        }, 5000);
    })
}

export class Page extends withComponents(View, () => new PreactRenderer) {

    count = 0;
    // constructor(options: BaseViewOptions<HTMLElement>) {
    //     super(options);
    //     //this.renderComponent(Test, '.preact', { who: 'world' }, 'test');
    // }

    @component('.preact', {
        async: true,
        component: () => delay().then(() => Test)
    })
    test!: Test;

    @event.click('button')
    onBtnClick() {
        console.log(this)


        this.findComponent('test')!
            .render({ who: 'World ' + (++this.count) });

        if (this.test) this.test.explode();

        if (this.count % 5 == 0) {
            this.findComponent('test')!.unmount();
        }
        //.getInstance<Test>()!.explode();
    }




}

(new Page({
    el: document.querySelector('.container') as HTMLElement
})).render();