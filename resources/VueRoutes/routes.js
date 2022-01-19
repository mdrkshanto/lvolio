import adminHome from '../components/backEnd/home/index'
import addHome from '../components/backEnd/home/includes/add'
export const routes = [
    {
        path: "/home",
        name: "adminHome",
        meta: {
            title: "Home Page",
            page: "Home Page",
            cardTitle: "Home Contents",
            button: {
                link: "addHome",
                title: `<i class="fas fa-plus"></i>`
            }
        },
        component: adminHome
    },
    {
        path: "/add-home",
        name: "addHome",
        meta: {
            title: "Add Home",
            page: "Add Home",
            cardTitle: "Add New",
            button: {
                link: "adminHome",
                title: `<i class="fas fa-arrow-left"></i>`
            }
        },
        component: addHome
    },
]
