export default {
    state: {
        data: []
    },
    getters: {
        allHomeData(state) {
            return state.data
        }
    },
    actions: {
        allHomeData(context) {
            axios.post("api/allHomeData").then((r) => {
                context.commit('allHomeData', r.data.allHomeData);
                console.log(r.data.allHomeData);
            });
        }
    },
    mutations: {
        allHomeData(state, payload) {
            return state.data = payload
        }
    },
}
