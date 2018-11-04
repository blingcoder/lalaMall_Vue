<template>
    <div class="app-cart-title">
        <div class="title-container">
            <p class="alert">已享优惠:省 ¥ 
                <span>19.50</span>
                <router-link class="discount" to="">第二支半价，第三支免费
                    <span>>></span>
                </router-link>
            </p>
            <router-link class="edit" to="">编辑</router-link>
        </div>
    </div>
</template>
<script>
    export default{
        data(){
            return{}
        }
    }
</script>
<style scoped>
    .title-container{
        background-color: #eee;
        font-size: 12px;
        padding: 3px 0;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .alert{
        color: #FF4400;
        font-size: 12px;
    }
    .discount{padding-left: 5px;}
    .edit{
        padding: 1px 12px;
        border-left: 1px solid #F5F5F5;
        color: #6C6C6C;
    }
</style>