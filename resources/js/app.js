require('./bootstrap');








Vue.component("Admin", require("../components/backEnd/master/index").default)

import { routes } from '../VueRoutes/routes';
const router = new VueRouter({
    mode: "history",
    routes
})

router.beforeEach((to, from, next) => {
    document.title = 'Shanto' + ' | ' + to.meta.title
    next()
})

const app = new Vue({ router }).$mount("#app")
