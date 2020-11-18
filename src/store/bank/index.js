import {list} from "@/services/user";

const bankCode = {
    namespaced: true,
    state: {
        data: [],
        status: 0,
    },
    mutations: {
        save(state, payload) {
            state.data = payload;
        },
    },
    actions: {
        async fetch({commit}) {
            const result = await list()
            commit('save', result.data)
        },
    }
}

export default bankCode;
