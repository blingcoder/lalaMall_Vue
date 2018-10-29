<template>
    <div class="app-home">
        <!-- 1. 顶部搜索框 -->
        <la-header></la-header>
        <!-- 2. 商品轮播 -->
        <div class="slider">
            <mt-swipe :auto="4000">
                <mt-swipe-item v-for="item in imagelist">
                    <img :src="item.img_url">
                </mt-swipe-item>
            </mt-swipe>
        </div>
        <!-- 3. mui六宫格 -->
        <div class="grid">
            <ul class="mui-table-view mui-grid-view mui-grid-9">
                <li class="mui-table-view-cell mui-media mui-col-xs-3 mui-col-sm-3" v-for="item in gridlist">
                    <a href="#">
                        <img :src="item.img_url">
                        <div class="mui-media-body">{{item.title}}</div>
                    </a>
                </li>
            </ul>
        </div>
        <!-- 4. 商品推荐 -->
        <div class="recommended clearfix">
            <ul class="clearfix">
                <li v-for="item in recommended">
                    <a href="#">
                        <img :src="item.img_url">
                    </a>
                </li>
            </ul>
        </div>
        <!-- 5.商城头条 -->
        <div class="news">
            <p>商城头条<a href="#">[特惠]{{news}}</a></p>
        </div>
        <!-- 6.限时秒杀 -->
        <div class="onsale clearfix">
            <!--限时秒杀头部-->
            <div class="onsale_title">
                <span>限时秒杀</span>
                <div class="clock">
                    <span class="hour">01</span>
                    <span class="min">20</span>
                    <span class="sec">59</span>
                </div>
            </div>
            <!--限时秒杀下部图片列表-->
            <div class="onsale_body">
                <ul class="onsale_list clearfix">
                    <li class="onsale_item">
                        <img src="img/sale3.jpg"/>
                        <span>ZEK 原味海苔</span>
                        <span>￥9.90</span>
                    </li>
                    <li class="onsale_item">
                        <img src="img/sale2.jpg"/>
                        <span>ZEK 原味海苔</span>
                        <span>￥9.90</span>
                    </li>
                    <li class="onsale_item">
                        <img src="img/sale1.jpg"/>
                        <span>ZEK 原味海苔</span>
                        <span>￥9.90</span>
                    </li>
                    <li class="onsale_item">
                        <img src="img/sale2.jpg"/>
                        <span>ZEK 原味海苔</span>
                        <span>￥9.90</span>
                    </li>
                </ul>
            </div>
        </div>
        <!-- 7. 楼层 -->
        <div class="floor">
            <div class="floor_title">
                <span></span>
                <p>甜品</p>
                <span></span>
            </div>
            <div class="floor_body clearfix">
                <div class="pre4 clearfix">
                    <div class="left">
                        <div class="pro1">
                        <p>零食大礼包开枪啦</p>
                        <span>当小鱼儿恋上软豆腐</span>
                        <img src="img/5.jpg">
                    </div>
                    </div>
                    <div class="right">
                        <div class="pro2">
                            <div>
                                <p>雪之恋和风大福</p>
                                <span>¥13.8</span>
                            </div>
                            <img src="img/act1.png">
                        </div>
                        <div class="pro3">
                            <p>小优布丁</p>
                            <span>¥4.8</span>
                            <img src="img/1.jpg">
                        </div>
                        <div class="pro4">
                            <p>小优布丁</p>
                            <span>¥4.8</span>
                            <img src="img/2.jpg">
                        </div>
                    </div>
                </div>
                <div class="pro5">
                    <p>小优布丁</p>
                    <span>¥4.8</span>
                    <img src="img/5.jpg">
                </div>
                <div class="pro6">
                    <p>小优布丁</p>
                    <span>¥4.8</span>
                    <img src="img/3.jpg">
                </div>
                <div class="pro7">
                    <p>小优布丁</p>
                    <span>¥4.8</span>
                    <img src="img/4.jpg">
                </div>
            </div>
        </div>
        <!-- 8. footer -->
        <la-footer></la-footer>
    </div>
</template>
<script>
    import laHeader from "@/components/LaHeader.vue";
    import laFooter from "@/components/LaFooter.vue";
    export default {
        data(){
            return{
                imagelist:[],
                gridlist:[],
                recommended:[],
                news:""
            }
        },
        components:{
            laHeader,
            laFooter
        },
        created(){
            var url = "index/bannerlist";
            this.$http.get(url).then(result=>{
                if(result.body.code==1){
                    this.imagelist = result.body.msg;
                }
            });
            var url = "index/gridlist";
            this.$http.get(url).then(result=>{
                if(result.body.code==1){
                    this.gridlist = result.body.msg;
                }
            });
            var url = "index/recommend";
            this.$http.get(url).then(result=>{
                if(result.body.code==1){
                    this.recommended = result.body.msg;
                }
            });
            var url = "index/news";
            this.$http.get(url).then(result=>{
                if(result.body.code==1){
                    this.news = result.body.msg[0].title;
                }
            });
        },
        methods:{
        }
    }
</script>
<style scoped>
    /* 轮播图 */
    .app-home .slider{
        height: 160px;
        margin-top: 10px;
    }
    .slider img{width: 100%;}
    /* 六宫格 */
    .grid .mui-table-view.mui-grid-view, .grid .mui-table-view-cell.mui-media{
        background: #fff;
        border: none;
    }
    .grid img{
        width: 42px;
        height: 42px;
    }
    .grid .mui-table-view .mui-table-view-cell .mui-media-body{
        font-size: 12px;
        margin-top: 2px;
    }
    /* 商品推荐 */
    .recommended li{width: 50%;}
    .recommended li img{width: 100%;}
    /* 商城头条 */
    .news{padding: 20px 10px;}
    .news p{
        background: url("../../../public/img/broadcast.png") no-repeat left center;
        padding-left: 20px;
        font-size: 12px;
    }
    .news p a{
        padding-left: 25px;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
    }
    /* 限时秒杀头部 */
    .onsale{
        width: 100%;
        background: #FFD800 url("../../../public/img/sale-t_clock.jpg") no-repeat;
        background-size: 65px 48px;
        padding-bottom: 6px;
    }
    .onsale .onsale_title{
        display: flex;
        align-items: center;
    }
    .onsale .onsale_title>span{
        padding-left: 80px;
        width: 64%;
        line-height: 2.7;
        font-size: 18px;
        color: #AB7C17;
        font-style: italic;
    }
    .onsale_title .clock{
        line-height: 2.7;
        width: 36%;
        background: url("../../../public/img/icon-sale.png") no-repeat center center;
        background-size: 115px 28px;
        display: flex;
    }
    .clock span{
        font-size: 18px;
        color: #FCF0E5;
        width: 100%;
        text-align: center;
    }
    /* 限时秒杀列表 */
    .onsale_item{
        width: 23%;
        background-color: #fff;
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-left: 6px;
    }
    .onsale_item span{
        font-size: 12px;
        line-height: 1.4;
    }
    .onsale_item img{
        width: 100%;
        height: 100%;
        padding: 10px 3px 20px;
    }
    /* 楼层 */
    .floor_title{
        display: flex;
        background-color: #eee;
        align-items: center;
    }
    .floor_title p{
        width: 40%;
        text-align: center;
        align-self: bottom;
        line-height: 3;
    }
    .floor_title span{
        width: 30%;
        height: 1px;
        background-color: #F5F5F5;
    }
    .floor_body>div,.pre4>div,.right>div{
        float: left;
    }
    .pro3,.pro4{width: 50%;}
    .floor_body>div p{
        color: #F03726;
    }
    .floor_body img{margin: 2px;}
    .floor_body>div p,.floor_body>div span{
        text-align: center;
        font-size: 12px;
        line-height: 1.2;
    }
    .pre4{
        display: flex;
    }
    .left{width: 40%;}
    .right{width: 60%;}
    .pro1,.pro2,.pro3,.pro4,.pro5,.pro6,.pro7{
        border-right: 1px solid #eee;
        border-bottom: 1px solid #eee;
    }
    .pro1,.pro3,.pro4,.pro5,.pro6,.pro7{
        display: flex;
        flex-direction: column;
    }
    .pro1 img,.pro3 img,.pro4 img,.pro5 img,.pro6 img,.pro7 img{
        width: 100%;
    }
    .pro3 img,.pro4 img,.pro5 img,.pro6 img,.pro7 img{
        margin-top: 20px;
    }
    .pro3,.pro4,.pro5,.pro6,.pro7{padding-top: 5px;}
    .pro1{
        height: 100%;
        padding-top: 20px;
    }
    .pro1 img{margin-top: 30px;}
    .pro2{display: flex;}
    .pro2 p,.pro2 span{padding: 10px 0 0 6px;}
    .pro2 img{
        width: 50%;
        height: 50%;
    }
    .pro5,.pro6,.pro7{width: 33.33333%;}
</style>