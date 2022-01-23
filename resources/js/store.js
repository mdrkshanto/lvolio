export default {
    state: {
        data: []
    },
    getters: {
        editableHomeData(state) {
            return state.data
        }
    },
    actions: {
        editableHomeData(context, payload) {
            console.log(payload);
            axios.post("api/editHomeData" + payload).then((r) => {
                context.commit('editableHomeData', r.data.editData);
                console.log(r.data.editData);
            });
        }
    },
    mutations: {
        editableHomeData(state, payload) {
            return state.data = payload
        }
    },
}
