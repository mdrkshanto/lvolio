import home from '../components/frontEnd/home/index'
import adminHome from '../components/backEnd/home/index'
import addHome from '../components/backEnd/home/includes/add'
import editHome from '../components/backEnd/home/includes/edit'
import adminAbout from '../components/backEnd/about/index'
import addAbout from '../components/backEnd/about/includes/add'
import editAbout from '../components/backEnd/about/includes/edit'
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
    {
        path: "/about",
        name: "adminAbout",
        meta: {
            title: "About Page",
            page: "About Page",
            cardTitle: "About Contents",
            button: {
                link: "addAbout",
                title: `<i class="fas fa-plus"></i>`
            }
        },
        component: adminAbout
    },
    {
        path: "/add-about",
        name: "addAbout",
        meta: {
            title: "Add About",
            page: "Add About",
            cardTitle: "Add New",
            button: {
                link: "adminAbout",
                title: `<i class="fas fa-arrow-left"></i>`
            }
        },
        component: addAbout
    },
    {
        path: "/edit-about:id",
        name: "editAbout",
        meta: {
            title: "Edit About",
            page: "Edit About",
            cardTitle: "Edit",
            button: {
                link: "adminAbout",
                title: `<i class="fas fa-arrow-left"></i>`
            }
        },
        component: editAbout
    },
]
