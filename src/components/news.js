import html from '../template/news.ejs';
import request from '../utils/request'
import { renderHtml, refreshEvent, filterTimeYMD } from '../utils/index'
export async function render() {
    const data = await request('/article/select', {
        category: '新闻资讯'
    })
    const str = typeof data == "string" ? data : html({ data: data.articles,filterTimeYMD })
    return renderHtml(str)
}
refreshEvent.setRefresh = render;