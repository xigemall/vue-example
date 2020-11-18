import Vue from 'vue';
import VueRouter from 'vue-router';
import routes from '@/router/routes';

Vue.use(VueRouter);

const router = new VueRouter({
    mode: 'history',
    routes,
});

router.beforeEach((to,from,next)=>{
    if(to.name === 'user' && !localStorage.getItem('token')){
        next('/login');
    }else{
        next();
    }


})

export default router;

