import './css/index.less';
import "./css/home.less";
import './css/home.animate.less'
import './css/page.less';
import './css/media.screen.less'
import { routerData } from './router'
import Promise from 'promise-polyfill';
import styles from '../node_modules/loaders.css/loaders.min.css';
import { $loader } from './utils/index'
import { moveNav } from './event.js';

if (!window.Promise) {
    window.Promise = Promise;
}
import page from 'page'

function pageWrapper(routerData) {
    for (let key in routerData) {
        page(key, (ctx) => import(`./components/${routerData[key].component}`).then(module => {

            const { render, unMount } = module;
            render(ctx)
            leaveRouter(key, unMount);
            moveNav(ctx)
        }))
    }

}

function leaveRouter(path, callback) {
    page.exit(path, function (ctx, next) {
        $loader.show()
        if (callback) callback();
        $('html,body').animate({ 'scrollTop': 0 }, 0);
        next();

    })
}
pageWrapper(routerData)
page('*', () => import(`./components/notfound.js`).then(module => {
    const { render } = module;
    render()
}))
page();



