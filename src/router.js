
const router = [
    {
        path: '/',
        index: 0,
        component: "home",
    },
    {
        path: '/field',
        index: 2,
        component: "field",
    },
    {
        path: '/field/:id',
        index: 2,
        component: "field.details",
    }, 
    {
        path: '/duty',
        index: 3,
        component: "duty",
    },
    {
        path: '/news',
        index: 4,
        component: "news",
    },
    {
        path: '/news/:id',
        index: 4,
        component: "news.details",
    },
    {
        path: '/about',
        index: 5,
        component: "about",
    },
    {
        path: '/contact',
        index: 6,
        component: "contact",
    }
]

const routerFilter = () => {
    const data = {};
    for (let item of router) {
        data[item.path] = item
    }
    return data
}

export const routerData = routerFilter();

