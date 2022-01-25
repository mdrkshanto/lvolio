require('./bootstrap');

import Form from "vform";
window.Form = Form;

Vue.component("Admin", require("../components/backEnd/master/index").default)
Vue.component("App", require("../components/frontEnd/master/index").default)

import storeData from "./store"
const store = new Vuex.Store(storeData)

import { routes } from '../VueRoutes/routes';
const router = new VueRouter({
    mode: "history",
    routes
})

router.beforeEach((to, from, next) => {
    document.title = 'Shanto' + ' | ' + to.meta.title
    next()
})

new Vue({ router, store }).$mount("#app")
