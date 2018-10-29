<template>
    <div class="app-profile">
        <!-- 头像和优惠券 -->
        <div class="user">
            <div class="avatar">
                <img src="../../../public/img/getAvatar.do.jpg">
                <div class="member">
                    <p class="name">小叮当</p>
                    <div></div>
                    <p class="addr arrow">收货地址</p>
                </div>
                <div class="msg">消息盒子</div>
            </div>
            <div class="lofty">
                <div class="discount">
                    <p>2</p>
                    <span>优惠券</span>
                </div>
                <div class="account">
                    <p>0.00</p>
                    <span>账户余额</span>
                </div>
                <div class="score">
                    <p>10</p>
                    <span>总积分</span>
                </div>
            </div>
        </div>
        <!-- 波浪线 -->
        <div class="wave-line">
            <div></div>
        </div>
        <!-- 我的订单 -->
        <div class="myorder">
            <div class="myorder-title">
                <div class="order">我的订单</div>
                <div class="orders">全部订单</div>
            </div>
            <div class="myorder-body">
                <ul class="myorder-body-list">
                    <li class="list-item" v-for="item in myorder">
                        <a href="#">
                            <img :src="item.img_url">
                            <p>{{item.title}}<span>{{item.num}}</span></p>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
        <!-- 我的常用 -->
        <div class="myuse">
            <div class="myuse-title">
                <p>我的常用</p>
            </div>
            <div class="myuse-body">
                <ul class="myuse-body-list">
                    <li class="myuse-item" v-for="item in myuse">
                        <a href="#">
                            <img :src="item.img_url">
                            <p>{{item.title}}</p>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>
<script>
    export default{
        data(){
            return{
                myorder: [],
                myuse: []
            }
        },
        created(){
            var url = "profile/myorder";
            this.$http.get(url).then(result=>{
                this.myorder = result.body.msg;
            });
            var url = "profile/myuse";
            this.$http.get(url).then(result=>{
                this.myuse = result.body.msg;
            });
        }
    }
</script>
<style scoped>
    /* 头像栏样式 */
    .avatar{
        display: flex;
        align-items: center;
        background-color: #F8773F;
        margin-top: -45px;
        padding: 20px 6px;
    }
    .avatar>img{
        width: 72px;
        height: 72px;
        border-radius: 50%;
    }
    .msg,.member>p{color: #fff;}
    .member{
        display: flex;
        flex-direction: column;
        padding-left: 12px;
        width: 58%;
    }
    .member .name{
        font-size: 16px;
    }
    .member .addr{
        padding-top: 5px;
        font-size: 14px;
        width: 32%;
    }
    .member>div{
        background: url("../../../public/img/icon_progress_24.png");
        width: 51px;
        height: 22px;
    }
    .msg{
        font-size: 12px;
        padding-left: 30px;
        background: url("../../../public/img/box.png") no-repeat;
    }
    .lofty{
        display: flex;
        justify-content: space-around;
        padding: 15px 0;
    }
    .lofty div{
        text-align: center;
        font-size: 12px;
    }
    .lofty p{color: #f40;}
    /* 波浪线 */
    .wave-line{
        height: 5px;
        background: url("../../../public/img/side.png");
    }
    /* 我的订单：头部 */
    .myorder-title{
        display: flex;
        justify-content: space-between;
        font-size: 14px;
        padding: 25px 10px 5px;
    }
    .order{color: #333;}
    .orders{color: #666;}
    /* 我的订单：主体 */
    .myorder-body-list{
        display: flex;
        justify-content: space-between;
        border-top: 1px solid #ccc;
        margin: 2px 10px;
        padding: 10px 10px;
    }
    .list-item,.myuse-item{float: none;}
    .list-item a{
        font-size: 14px;
        color: #4b4b4b;
        text-align: center;
        display: block;
    }
    .list-item img{
        width: 30px;
        height: 30px;
    }
    .list-item p{
        font-size: 12px;
    }
    .list-item p span{
        color: #f40;
        padding-left: 4px;
    }
    /* 我的常用 */
    .myuse-title{
        padding: 25px 10px 5px;
    }
    .myuse-body-list{
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        border-top: 1px solid #ccc;
        margin: 2px 10px;
        padding-bottom: 35px;
        background-color: #fff;
    }
    .myuse-item{width: 33.33333%;}
    .myuse-item a{
        display: block;
        text-align: center;
        padding-top: 20px;
    }
    .myuse-item p{
        margin: 8px 0;
        font-size: 12px;
    }
</style>