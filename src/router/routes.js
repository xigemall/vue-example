import TabBar from "@/layouts/TabBar";
import Home from "@/pages/Home";
import User from "@/pages/user/index";
import Login from "@/pages/login/Login";


export default [
    {
        path:'/login',
        name:'login',
        component: Login,
    },
    {
        path: '/',
        component: TabBar,
        children:[
            {
                path:'/',
                name:'home',
                component:Home,
            },
            {
                path:'/message',
                name:'message',
                component:User,
            },
            {
                path:'/user',
                name:'user',
                component:User,
            }
        ]
    },
]
