<template>
    <div>
        <h1>home</h1>
        <van-list
                v-model="loading"
                :finished="finished"
                finished-text="没有更多了"
                @load="onLoad"
        >
            <van-cell v-for="item in $store.state.bank.data" :key="item.id" :title="item.name" />
        </van-list>
    </div>

</template>

<script>
    import Vue from 'vue';
    import {List,Cell} from'vant';

    Vue.use(List)
    Vue.use(Cell)

    export default {
        name: "Home",
        data(){
          return {
              list: [],
              loading: false,
              finished: true,
          }
        },
        methods:{
            onLoad(){
                this.loading = false;
            }
        },
        mounted: function(){
            this.$store.dispatch('bank/fetch');
            this.$store.dispatch('user/fetchList');
            // console.log(this.$store.state.bank.data)

        },
        updated:function(){
            // console.log(this.$store.state.bank.data)
            // console.log(this.$store.state.user.list)
        },
    }
</script>

<style scoped>

</style>
