export default {
    state: {
        editableHomeData: []
    },
    getters: {
        editableHomeData(state) {
            return state.editableHomeData
        }
    },
    actions: {
        editableHomeData(context, payload) {
            console.log(payload);
            axios.get("api/editHomeData" + payload).then((r) => {
                context.commit('editableHomeData', r.data.editData);
                console.log(r.data.editData);
            });
        }
    },
    mutations: {
        editableHomeData(state, payload) {
            return state.editableHomeData = payload
        }
    },
}
