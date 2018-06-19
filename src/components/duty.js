import html from '../template/duty.ejs';

import { renderHtml } from '../utils/index'

export async function render() {
    return renderHtml(html)
}