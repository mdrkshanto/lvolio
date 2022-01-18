import adminHome from '../components/backEnd/home/index'
export const routes = [
    {
        path: "/home",
        name: "adminHome",
        meta: {
            title: "Home Page",
            page: "Home Page",
            cardTitle: "Home Contents",
            button: {
                link: "adminHome",
                title: '<i class="fas fa-plus"></i>'
            }
        },
        component: adminHome
    },
    {
        path: "/add-home",
        name: "addHome",
        meta: {
            title: "Home Page",
            page: "Home Page",
            cardTitle: "Home Contents"
        },
        component: adminHome
    },
]
