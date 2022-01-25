import home from '../components/frontEnd/master/index'
import adminHome from '../components/backEnd/home/index'
import addHome from '../components/backEnd/home/includes/add'
import editHome from '../components/backEnd/home/includes/edit'
export const routes = [
    {
        path: "/",
        name: "home",
        meta: {
            title: "Home",
            page: "Home",
            cardTitle: "Home Contents",
            button: {
                link: "addHome",
                title: `<i class="fas fa-plus"></i>`
            }
        },
        component: home
    },
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
    {
        path: "/edit-home:id",
        name: "editHome",
        meta: {
            title: "Edit Home",
            page: "Edit Home",
            cardTitle: "Edit",
            button: {
                link: "adminHome",
                title: `<i class="fas fa-arrow-left"></i>`
            }
        },
        component: editHome
    },
]
