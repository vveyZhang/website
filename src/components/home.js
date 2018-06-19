import html from '../template/home.ejs';

import request from '../utils/request'

import { renderHtml, filterTimeYMD } from '../utils/index';

let animateTop = [];
let $animate = $('.animate-container');
let $header = $('.header');
let len = $animate.length;

const initTop = () => {
    animateTop = [];
    const headerTop = $header.height();
    for (let i = 0; i < len; i++) {
        if (i != 0 && $animate.eq(i).offset().top <= $animate.eq(i - 1).offset().top - (2 * headerTop + 50) + 50) return initTop();
        const top = $animate.eq(i).offset().top + (2 * headerTop + 50)
        animateTop.push(Math.ceil(top));
    }
}
const _scroll = () => {
    initTop();
    const nextIndex = judgeTop();
    toAnimate(nextIndex);
}
const judgeTop = () => {
    const scrollTop = $(window).scrollTop();
    const screenH = $(window).height();
    let nextIndex = [];
    for (let i = 0; i < len; i++) {
        if (animateTop[i] < (scrollTop + screenH)) {
            if (i == len - 1) {
                nextIndex.push(i)
            } else {
                if (animateTop[i + 1] > scrollTop) nextIndex.push(i)
            }
        }
    }
    return nextIndex;
}

const toAnimate = (nextIndex) => {
    for (let i = 0; i < len; i++) {
        if (nextIndex.indexOf(i) >= 0) {
            $animate.eq(i).addClass('animate')
        } else {
            $animate.eq(i).removeClass('animate')
        }
    }
}
export const init = () => {
    $(window).ready(() => {
        $animate = $('.animate-container');
        $header = $('.header');
        len = $animate.length;
        _scroll();
    })
    $(window).on('scroll', () => _scroll())
    $(window).on('resize', initTop)
}
export async function render() {
    const data = await request('/article/select', {
        category: '新闻资讯'
    })
    const news = typeof data == "string" ? [] : Object.create(data.articles).splice(0, 3)
    renderHtml(html(({ news, filterTimeYMD })));
    init();
    return
}
export const unMount = () => {
    $(window).off('scroll', _scroll)
    $(window).off('resize', initTop)
}
