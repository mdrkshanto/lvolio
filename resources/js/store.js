export default {
    state: {
        data: []
    },
    getters: {
        allHomeData(state) {
            return state.data
        },
        latestHomeData(state) {
            return state.data
        },
    },
    actions: {
        allHomeData(context) {
            axios.post("api/allHomeData").then((r) => {
                context.commit('allHomeData', r.data.allHomeData);
            });
        },
        latestHomeData(context) {
            axios.post("api/latestHomeData").then((r) => {
                context.commit('latestHomeData', r.data.latestHomeData);
            })
        }
    },
    mutations: {
        allHomeData(state, payload) {
            return state.data = payload
        },
        latestHomeData(state, payload) {
            return state.data = payload
        },
    },
}
