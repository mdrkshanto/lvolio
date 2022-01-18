import adminHome from '../components/backEnd/home/index'
export const routes = [
    {
        path: "/home",
        name: "adminHome",
        meta: {
            title: "Home Page",
            page: "Home Page",
            card: "Home Contents"
        },
        component: adminHome
    },
]
