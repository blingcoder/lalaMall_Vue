<template>
    <div class="app-sort">
        <la-header></la-header>
        <div class="main">
            <div class="left-nav">
                <ul class="nav">
                    <li @click="clicked(item.id)" class="nav-item" :class="item.id==selectedId?'active':''" v-for="(item,index) in sortList" :key="item.id">
                        <span class="selected" :class="item.id==selectedId?'active':''"></span>
                        <span class="title">{{item.title}}</span>
                        <div class="right-box" :class="item.id==selectedId?'active':''">
                            <slider :img="item.banner_url"></slider>
                            <!-- mui六宫格 -->
                            <div class="grid" v-for="(sort,i) in item.pro_sorts" :key="i">
                                <ul class="mui-table-view mui-grid-view mui-grid-9">
                                    <h5>{{sort.title}}</h5>
                                    <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4" v-for="(pro,j) in sort.list" :key="j">
                                        <a href="#">
                                            <img :src="pro.img_url">
                                            <p class="mui-media-body">{{pro.text}}</p>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>
<script>
    import laHeader from '../../components/LaHeader.vue';
    import Slider from '../../components/Slider.vue';
    export default{
        data(){
            return{
                sortList: [],
                selectedId: 1
                // detailTitles: [],
                // detailList: []
            }
        },
        components:{
            laHeader,
            Slider
        },
        created(){
            var url = "http://127.0.0.1:5050/sort";
            this.$http.get(url).then(result=>{
                // console.log(typeof result.body.msg);
                // console.log(result.body.msg);
                var res = result.body.msg;
                for(var i=0;i<res.length;i++){
                    res[i].pro_sorts = JSON.parse(res[i].pro_sorts);
                    // res[i].banner_url = JSON.parse(res[i].banner_url);
                    console.log(result.body.msg[i].pro_sorts);
                    console.log(typeof result.body.msg[i].pro_sorts);
                }
                this.sortList = result.body.msg;
                console.log(this.sortList);
                // console.log(this.sortList[14].banner_url)
                console.log(typeof this.sortList[14].banner_url)
            })
        },
        methods:{
            clicked(id){
                this.selectedId=id;
            },
            getDetail(res,i){
                this.detailList = res.body.msg[i-1].pro_sorts;
                this.detailList = JSON.parse(this.detailList);
            }
        }
    }
</script>
<style scoped>
    /* 右侧商品列表 */
    .right-box{
        position: absolute;
        left: 100px;
        top: 0;
        background-color: #fff;
        margin-bottom: 50px;
        padding: 8px 10px;
    }
    .right-box.active{z-index: 1;}
    .grid img{
        width: 56px;
        height: 56px;
    }
    .grid .mui-table-view.mui-grid-view{
        border: none;
        background-color: #fff;
    }
    .grid .mui-table-view.mui-grid-view .mui-table-view-cell.mui-media{
        border: none;
        background-color: #fff;
        padding-top: 8px;
        padding-bottom: 8px;
    }
    .grid .mui-table-view.mui-grid-view .mui-table-view-cell.mui-media a{padding: 0;}
    .grid h5{
        margin: 12px 0 4px;
        font-size: 12px;
        color: #000;
    }
    .grid .mui-table-view-cell.mui-media .mui-media-body{
        font-size: 12px;
        color: #666;
        font-weight: 400;
        margin-top: 4px;
    }

    .main{
        margin-top: 10px;
        position: relative;
    }
    /* 左侧垂直列表 */
    .nav .nav-item{
        float: none;
        font-size: 12px;
        line-height: 4;
        background-color: #F3F3F3;
    }
    .nav .nav-item.active{
        background-color: #fff;
        font-weight: 600;
        color: #1E50B3;
    }
    .nav-item .selected{
        display: inline-block;
        width: 4px;
        height: 8px;
        border-radius: 40%;
        background-color: #F3F3F3;
        margin: 0 5px;
    }
    .nav-item .selected.active{background-color: #1E50B3;}
    .nav-item .title{margin: 0 15px 0 10px;}
</style>