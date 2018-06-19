import html from '../template/about.ejs';
import { renderHtml } from '../utils/index'
export async function render() {
    return renderHtml(html)
}