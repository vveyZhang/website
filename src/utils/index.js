import moment from 'moment'

export const $loader = $('.loader-inner');

export function renderHtml(html) {
    $('#root').empty().append(html);
    $loader.hide();
}

export const modalData = [
    {
        "type": "xcx",
        "image": "/images/xcx-code.jpg",
        "name": "乐活云商小程序",
        "other": "",
        "content": [
            "微信扫码进入小程序"
        ]
    },
    {
        "type": "lhys",
        "name": "乐活云商公众号",
        "image": "/images/lhys-code.jpg",
        "other": "",
        "content": [
            "微信扫码关注公众号",
            "了解更多乐活云商动态"
        ]
    },
    {
        "type": "jlh",
        "name": "加乐活公众号",
        "image": "/images/jlh-code.jpg",
        "other": "",
        "content": [
            "微信扫码关注公众号",
            "了解更多加乐活动态"
        ]
    },
    {
        "type": "zm",
        "name": "经销商招募",
        "image": "/images/zm-code.jpg",
        "other": "招募客服",
        "content": [
            "全国招募经销商",
            "地址：江苏省扬州市高新区建华路20号",
            "招募电话：0517-83797123 83966600"
        ]
    }
]



class refreshClass {
    setRefresh = (fn) => {
        this.refresh = fn
    }
    getRefresh = () => {
        return this.refresh
    }
    removeRefresh = () => {
        this.refresh = null
    }
}
export const refreshEvent = new refreshClass();



export function filterTime(time) {
    if (time == "0001-01-01T00:00:00Z" || !time) return ""
    return moment(time).format('Y-MM-DD hh:mm:ss a')
}
export function filterTimeYMD(time) {
    if (time == "0001-01-01T00:00:00Z" || !time) return ""
    return moment(time).format('Y-MM-DD')
}
export function filterTimeHMS(time) {
    if (time == "0001-01-01T00:00:00Z" || !time) return ""
    return moment(time).format('hh:mm:ss a')
}