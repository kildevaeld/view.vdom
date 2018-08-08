import { has } from '@viewjs/utils';

export function pick<T, K extends keyof T>(obj: T, keys: K[]): Pick<T, K> {
    let out: any = {};
    for (let i = 0, ii = keys.length; i < ii; i++) {
        if (has(obj, keys[i] as any)) out[keys[i]] = obj[keys[i]];
    }

    return out;
}


