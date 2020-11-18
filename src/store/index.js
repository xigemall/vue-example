import Vue from 'vue';
import Vuex from 'vuex';
import bankCode from '@/store/bank/index';
import user from '@/store/bank/user';

Vue.use(Vuex);

const store = new Vuex.Store({
    modules:{
        bank:bankCode,
        user,
    }
})

export default store;
