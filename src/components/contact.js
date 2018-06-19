import html from '../template/contact.ejs';
import { renderHtml } from '../utils/index'

export async function render() {
    return renderHtml(html)
}
// const init = () => {
//     $('.contact-content input,.contact-content textarea').on('change', function () {
//         getValue({
//             [$(this).attr('name')]: $(this).val()
//         })
//     })
//     $error = $('.error-tips');
// }

// function showError(key, value) {

// }
// function getValue(data) {
//     params = { ...params, ...data }
// }

// function toValidated() {
//     for (let key of params) {

//     }
// }

// function validate(key) {
//     switch (key) {
//         case 'name':
//             if (params[key] && params[key].length > 0) return error[name] = '';
//             return error[name] = `*${name}不能为空`;
//         case 'content':
//             if (params[key] && params[key].length > 0) return error[name] = '';
//             return error[name] = `*${name}不能为空`;

//         case 'phone' :
//     }
// }