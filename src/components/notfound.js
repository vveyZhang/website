import html from '../template/notfound.ejs'
import config from './exception/tirrgerConfig';
import { renderHtml } from '../utils/index'
export async function render() {
    return renderHtml(html(config["404"]))
}