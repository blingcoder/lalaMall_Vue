<template>
    <div class="app-addrmanage">
        <div class="manage-title bottom-border">
            <span class="manage-chin">我的消息</span>
            <span class="manage-i"> / </span>
            <span class="manage-eng">News</span>
        </div>
        <div class="manage-body">
            <p>12.21 今天</p>
            <div class="news">
                <p class="news-title">每日新鲜事</p>
                <img src="../../public/img/TB102.jpg">
                <h5 class="bottom-border">最特色的湖北年货都在这儿~快来囤年货啦！</h5>
                <div class="end">
                    <router-link to="">
                        <h5 class="arrow">阅读全文</h5>
                    </router-link>
                </div>
            </div>
        </div>
    </div>
</template>
<script>

</script>
<style scoped>
    /* 每日新鲜事 */
    .manage-body{
        padding: 10px;
    }
    .manage-body>p{
        font-size: 12px;
        padding-bottom: 5px;
    }
    .manage-body .news{border: 1px solid #E4EAEE;}
    .news .news-title{padding: 6px 6px 2px;}
    .news img{
        width: 100%;
        vertical-align: bottom;
    }
    .news h5{
        color: #333;
        font-weight: bold;
    }
    .news>h5{padding: 10px 5px;}
    .end h5{padding: 5px;}
    .arrow::after{
        border-top: 1px solid #333;
        border-right: 1px solid #333;
    }
</style>