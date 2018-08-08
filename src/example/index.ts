import { event } from '@viewjs/view';
import { PreactView, component, components } from '../';
import { Test } from './component';
import { Observer } from '@viewjs/events';

function should() {
    const o = new Observer<boolean>();
    o.next(false);
    var count = 0;
    const i = setInterval(() => {
        count++;
        if (count % 5 == 0) {
            o.next(false);
        } else {
            o.next(true)
            if (count > 100) {
                o.complete();
                clearInterval(i);
            }

        }
    }, 1000);
    o.next(true)
    return o.subscriber();
}


export function delay() {
    return new Promise((res, _rej) => {
        setTimeout(() => {
            res()
        }, 1000);
    })
}

@components({
    test2: {
        component: Test,
        selector: '.preact2'
    }
})
class Page extends PreactView {

    count = 0;

    @component('.preact', {
        async: true,
        component: () => delay().then(() => Test),
        condition: should,
        preserveAttributeOnUnmount: true
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