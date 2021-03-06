import html from '../template/field.ejs';

import request from '../utils/request'

import { renderHtml, refreshEvent, filterTimeYMD } from '../utils/index'

export async function render() {
    const data = await request('/article/select', {
        category: '疾病领域'
    })
    const str = typeof data == "string" ? data : html({ data: data.articles, filterTimeYMD })
    return renderHtml(str)
}
refreshEvent.setRefresh = render;