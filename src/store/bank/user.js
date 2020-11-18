const user = {
    namespaced:true,
    state:{
        list:[],
    },
    mutations:{
        save(state,payload){
            state.list = payload;
        }
    },
    actions:{
        fetchList({commit}){
            commit('save',[{id:1,name:'user'}])
        }
    }
}

export default user;
