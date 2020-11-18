import Vue from 'vue'
import router from "@/router/router";
import Index from "@/Index";
import store from '@/store/index';

Vue.config.productionTip = false


new Vue({
  router,
  store,
  render: h => h(Index),
}).$mount('#app')

