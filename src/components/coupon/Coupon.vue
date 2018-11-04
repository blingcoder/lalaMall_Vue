<template>
    <div class="app-addrmanage">
        <div class="manage-title bottom-border">
            <span class="manage-chin">优惠券</span>
            <span class="manage-i"> / </span>
            <span class="manage-eng">Coupon</span>
        </div>
        <div class="manage-body">
            <div class="nav-title">
                <p :class="isA?'':'active'" @click="toggleTab('couponInDate')">
                    可用优惠券
                    <span class="line" :class="isA?'':'active'"></span>
                    <span class="triangle" :class="isA?'':'active'"></span>
                </p>
                <p :class="isA?'active':''" @click="toggleTab('couponOutOfDate')">
                    已用/过期优惠券
                    <span class="line" :class="isA?'active':''"></span>
                    <span class="triangle" :class="isA?'active':''"></span>
                </p>
            </div>
        </div>
        <coupon :is="currentTab" keep-alive></coupon>
    </div>
</template>
<script>
    import couponInDate from './CouponInDate.vue';
    import couponOutOfDate from './CouponOutOfDate.vue';
    export default{
        data(){
            return{
                currentTab:'couponInDate',
                isA:false
            }
        },
        components:{
            couponInDate,
            couponOutOfDate
        },
        methods:{
            toggleTab:function(tab){
                this.currentTab = tab;
                if(this.isA==false){
                    this.isA = true;
                }else{
                    this.isA = false;
                }
            }
        }
    }
</script>
<style scoped>
    /* 优惠券主体 */
    .nav-title{
        display: flex;
        font-size: 12px;
    }
    .nav-title p{
        width: 100%;
        text-align: center;
        padding: 15px 0;
        font-size: 12px;
        background-color: #eee;
        position: relative;
    }
    .nav-title p.active{background-color: #fff; color: #0E90D2;}
    .nav-title p span{
        position: absolute;
        bottom: 0;
    }
    span.line{
        left: 0;
        width: 100%;
        border: 1px solid transparent;
    }
    span.line.active{border: 1px solid #0E90D2;}
    span.triangle{
        left: 50%;
        margin-left: -4px;
        border: 8px solid transparent;
    }
    span.triangle.active{border-bottom: 8px solid #0E90D2;}
</style>