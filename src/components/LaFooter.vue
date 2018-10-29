<template>
    <div class="app_footer">
        <p>
            <router-link to="">恒旺科技</router-link>
            <span>|</span>
            <router-link to="">商城首页</router-link>
            <span>|</span>
            <router-link to="">支付宝</router-link>
            <span>|</span>
            <router-link to="">物流</router-link>
        </p>
    </div>
</template>
<script>
    export default{
        name:"la-footer",
        data(){return{}},
        methods:{}
    }
</script>
<style scoped>
    .app_footer p{
        text-align: center;
        font-size: 12px;
        padding: 5px;
    }
    .app_footer p span{
        padding: 0 5px;
    }
</style>