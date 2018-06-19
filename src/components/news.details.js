import html from '../template/news.details.ejs';
import request from '../utils/request'
import { renderHtml, refreshEvent, filterTimeYMD } from '../utils/index'
export async function render(ctx) {
    const id = ctx.params.id;
    const data = await request('/article/select', {
        id
    })
    const srt = typeof data == "string" ? data : html({...data.articles[0],filterTimeYMD})
    return renderHtml(srt)
}
refreshEvent.setRefresh = render;