import { routerData } from './router'
import modal from './template/modal.ejs'
import { refreshEvent, modalData, $loader } from './utils/index'
import FastClick from 'fastclick';
import page from 'page'
const $nav = $('.nav-item')

$(window).ready(function () {

    const $navIcon = $('.menu-icon'),
        $nav = $('.nav');
    const $modal = $('#modal');
    $(document).on('click  touchstart', function (ev) {
        const e = event || ev;
        if ($navIcon.css('display') !== "block") return;
        $nav.hide();
    })
    $(window).resize(function () {
        const width = $(window).width();
        if (width > 768) $nav.show();
        else $nav.hide()
    })
    $navIcon.on('touchstart', function (ev) {
        const e = event || ev;
        e.cancelBubble = true;
        e.stopPropagation();
    })
    $navIcon.on('click', function (ev) {
        const e = event || ev;
        e.cancelBubble = true;
        e.stopPropagation();
        $nav.toggle();
    });
    $nav.on('click touchstart', function (ev) {
        const e = event || ev;
        e.cancelBubble = true;
        e.stopPropagation();
    })
    $('a').on('touchstart', function (ev) {
        const e = ev || event;
        e.cancelBubble = true;
        e.stopPropagation();
    })
    $('a').on('click', function (ev) {
        const e = ev || event;
        e.preventDefault();
        e.cancelBubble = true;
        e.stopPropagation();
        const el = $(this);
        const link = el.attr('href');
        link.indexOf('http') >= 0 ? window.open(link) : page(link)
        if ($navIcon.css('display') !== "block") return;
        setTimeout(function () {
            $nav.hide();
        }, 150)
        return false;
    });
    $modal.on('click', function () {
        $modal.removeClass('show')
    })
    $modal.on('click', '.modal-warp', function (ev) {
        const e = ev || event;
        e.cancelBubble = true;
        e.stopPropagation();
    })
    $modal.on('click', '.title', function (ev) {
        $modal.removeClass('show')
    })
    $('.footer-link-item li.modal').on('click', function (ev) {
        const e = ev || event;
        e.cancelBubble = true;
        e.stopPropagation();
        const type = $(this).attr('type');
        const data = modalData.filter((item) => item.type == type)[0];
        $modal.children('.modal-warp').empty().append(modal(data))
        $modal.addClass('show')
    })
    FastClick.attach(document.body);
})


export function moveNav(ctx) {
    const path = ctx.path || ctx.pathname;
    if (path.indexOf('news') >= 0) return $nav.eq(4).addClass('cur').siblings().removeClass('cur')
    if (path.indexOf('field') >= 0) return $nav.eq(2).addClass('cur').siblings().removeClass('cur')
    const index = routerData[path] ? routerData[path].index : 0;
    $nav.eq(index).addClass('cur').siblings().removeClass('cur')
}
window.refresh = function () {
    if (refreshEvent.refresh) {
        $loader.show();
        refreshEvent.refresh();
    }
    return;
}