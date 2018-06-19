import config from './tirrgerConfig';
import html from '../../template/exception.ejs'
function exception(status, path) {
    let data = config[status];
    return html(data)
}

export default exception