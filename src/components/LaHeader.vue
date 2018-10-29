<template>
    <!-- 顶部搜索框 -->
    <div class="app-header">
        <img src="../../public/img/logo.png">
        <input type="text" placeholder="搜索" v-model="value">
        <button>搜索</button>
    </div>
</template>
<script>
    export default{
        name:"la-header",
        data(){
            return{
                value:""
            }
        },
        methods:{
            search(){
                var url = "http://127.0.0.1:6060/products?kw="+this.value;
                this.$http.get(url).then(result=>{
                    //把接收到的查询结果放入到index.html的div#app中
                })
            }
        }
    }
</script>
<style scoped>
    .app-header{
        display: flex;
        position: fixed;
        top: 0;
        left: 0;
        z-index: 10;
        width: 100%;
        background-color: #fff;
        padding: 8px 0;
    }
    .app-header img{
        width: 68px;
        height: 34px;
        margin-right: 6px;
        margin-bottom: 3px;
    }
    .app-header input{
        padding: 0 6px;
        font-size: 12px;
        width: 58%;
        border: 2px solid #F03726;
        margin-bottom: 0;
        height: 37px;
        background: #fff;
    }
    .app-header input:focus{
        outline: none;
    }
    .app-header button{
        background: #F03726;
        border: none;
        color:#fff;
        font-size: 13px;
        padding: 0 20px 0 8px;
        outline: none;
    }
</style>