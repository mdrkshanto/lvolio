require('./bootstrap');








Vue.component("Admin",require("../components/backEnd/master/index").default)



const app = new Vue({}).$mount("#app")
