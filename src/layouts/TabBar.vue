<template>
    <div>
        <router-view/>
        <van-tabbar v-model="active">
            <van-tabbar-item v-for="item in tabbars" :key="item.name" :icon="item.icon" :to="item.path">
                {{item.name}}
            </van-tabbar-item>
        </van-tabbar>
    </div>
</template>

<script>
    import Vue from 'vue';
    import {Tabbar, TabbarItem} from 'vant';

    Vue.use(Tabbar)
    Vue.use(TabbarItem)

    export default {
        name: "TabBar",
        data() {
            return {
                active: 0,
                tabbars: [
                    {
                        path:'/',
                        name: '首页',
                        icon: 'home-o',
                    },
                    {
                      path:'/message',
                      name: '信息',
                      icon:'chat-o',
                    },
                    {
                        path:'/user',
                        name: '我的',
                        icon: 'user-circle-o'
                    },
                ]
            }
        },
        created(){
            if(this.$route.name === 'home'){
                this.active = 0;
            }else if(this.$route.name=== 'message'){
                this.active = 1;
            }else if(this.$route.name=== 'user'){
                this.active = 2;
            }

        }
    }
</script>

<style scoped>

</style>
