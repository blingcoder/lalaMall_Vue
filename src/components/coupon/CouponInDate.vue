<template>
    <div class="app-nav-body">
        <div class="shopping-c">
            <div class="text">
                <p class="text-title">购物券</p>
                <p class="text-content">使用期限2015-12-21--2015-12-31</p>
            </div>
            <div class="value">
                <p class="value-title">¥ 8</p>
                <p class="value-content">【消费满 95元 可用】</p>
            </div>
        </div>
        <div class="delivery-c">
            <div class="text">
                <p class="text-title">运费券</p>
                <p class="text-content">使用期限2015-12-21--2015-12-31</p>
            </div>
            <div class="value">
                <p class="value-title">可抵运费</p>
                <p class="value-content">【不含偏远地区】</p>
            </div>
        </div>
    </div>
</template>
<style>
    /* 优惠券样式 */
    .app-nav-body{
        padding: 0 10px 130px;
    }
    .shopping-c,.delivery-c{
        display: flex;
        justify-content: space-between;
        margin-top: 10px;
        padding: 5px 10px;
    }
    .shopping-c{ background-color: #74d2d4;}
    .delivery-c{background-color: #7ea7ce;}
    .text-title,.value-title,.value-content{color: #fff;}
    .text-title{font-size: 16px;}
    .value .value-title{font-size: 14px;}
    .shopping-c .value .value-title{font-weight: 600; font-size: 16px; padding-left: 5px;}
    .text-content,.value-title,.value-content{font-size: 12px;}
    .shopping-c .text-content{color: #31aaad;}
    .delivery-c .text-content{color: #417ab0;}
    .text p,.value p{padding: 3px 0;}
</style>