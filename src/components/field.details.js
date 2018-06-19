import html from '../template/field.details.ejs';
import request from '../utils/request'
import { renderHtml, filterTimeYMD, refreshEvent } from '../utils/index'

export async function render(ctx) {
    const id = ctx.params.id;
    const data = await request('/article/select', {
        id
    })
    const obj = { ...data.articles[0], filterTimeYMD }
    const srt = typeof data == "string" ? data : html(obj)

    return renderHtml(srt)
}
refreshEvent.setRefresh = render;