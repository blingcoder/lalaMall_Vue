<template>
    <div class="app-addrmanage">
        <div class="manage-title bottom-border">
            <span class="manage-chin">优惠券</span>
            <span class="manage-i"> / </span>
            <span class="manage-eng">Coupon</span>
        </div>
        <div class="manage-body">
            <div class="nav-title">
                <p data-target="shopping-c">
                    可用优惠券
                    <span class="line"></span>
                    <span class="triangle"></span>
                </p>
                <p data-target="delivery-c">
                    已用/过期优惠券
                    <span class="line"></span>
                    <span class="triangle"></span>
                </p>
            </div>
            <div class="nav-body">
                <div id="shopping-c"></div>
                <div id="delivery-c"></div>
            </div>
            <div class="square"></div>
        </div>
    </div>
</template>
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
        position: relative;
    }
    .nav-title p span{
        position: absolute;
        bottom: 0;
    }
    span.line{
        left: 0;
        width: 100%;
        border: 1px solid #66f;
    }
    span.triangle{
        left: 50%;
        margin-left: -5px;
        width: 10px;
        height: 10px;
        /* border: 10px solid transparent;
        border-bottom: 6px solid #66f; */
        border-top: 10px solid red;
        border-bottom: 10px solid blue;
        border-left: 10px solid #66f;
        border-right: 10px solid pink;
    }
    .square{
        /* border-top: 10px solid red;
        border-bottom: 10px solid blue;
        border-left: 10px solid #66f;
        border-right: 10px solid pink; */
    }
</style>