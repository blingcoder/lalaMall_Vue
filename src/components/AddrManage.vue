<template>
    <div class="app-addrmanage">
        <div class="manage-title bottom-border">
            <span class="manage-chin">地址管理</span>
            <span class="manage-i"> / </span>
            <span class="manage-eng">Address list</span>
        </div>
        <div class="manage-body">
            <div class="manage-item bottom-border" v-for="(item, index) in addrList" :key="item.id">
                <div class="item-user">
                    <span class="name">{{item.uname}}</span>
                    <span class="phone">{{item.phone | hidePhone}}</span>
                </div>
                <div class="item-addr">
                    <span class="key">地址：</span>
                    <span class="addr">{{item.addr}}</span>
                </div>
                <div class="item-default-addr">
                    <p class="default-addr" :class="addrIndex==index?'default-icon-active':'default-icon'" @click="setDefaultAddr(index,item.id)">默认地址</p>
                    <p class="editor">
                        <span class="edit">编辑</span>
                        <span>|</span>
                        <span class="del">删除</span>
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    export default{
        data(){
            return{
                addrList: [],
                addrIndex: -1
            }
        },
        methods:{
            setDefaultAddr(index,id){
                this.addrIndex = index;
                // console.log(id);
                // 将被选中的地址设置为默认地址
                var url = "profile/defaultaddr";
                var obj = {isDefault:index,id:id};
                this.$http.post(url,obj).then(result=>{
                    console.log(result);
                })
            }
        },
        created(){
            var url = "profile/addrmanage";
            this.$http.get(url).then(result=>{
                var msg = result.body.msg;
                //获取到默认选中的地址并赋值给addrIndex
                for(var m in msg){
                    if(msg[m].isDefault==1){
                        this.addrIndex = m;
                    }
                }
                this.addrList =result.body.msg;
            })
        },
        filters:{
            hidePhone:function(val){
                var start = val.slice(0,3);
                var middle = "****";
                var end = val.slice(-4);
                return start+middle+end;
            },
            // defaultIcon:function(val){
            //     return val==1?"default-icon-active":"default-icon";
            // }
        }
    }
</script>
<style scoped>
    /* 头部样式已移到base.css中 */
    /* 主体 */
    .manage-item{
        padding: 18px 10px 10px;
    }
    .manage-item>div{
        padding: 3px 0;
    }
    .item-user{font-size: 14px;}
    .item-user .name{
        color: #6E6E6E;
        background: url("../../public/img/addicon1.png") no-repeat;
        padding-left: 15px;
        margin-right: 25px;
    }
    .item-user .phone{
        color: #B80000;
    }
    .item-addr{
        color: #6E6E6E;
        font-size: 12px;
    }
    .item-addr .key{
        padding-left: 15px;
        background: url("../../public/img/addicon.png") no-repeat;
    }
    .item-default-addr{
        display: flex;
        justify-content: space-between;
    }
    .default-addr,.editor{font-size: 12px;}
    .default-icon{
        padding-left: 18px;
        background: url("../../public/img/addicon3.png") no-repeat left 2px;
    }
    .default-icon-active{
        padding-left: 18px;
        background: url("../../public/img/addicon4.png") no-repeat left 2px;
    }
    .editor{
        display: flex;
        width: 35%;
        justify-content: space-between;
    }
    .edit,.del{padding-left: 23px;}
    .edit{background: url("../../public/img/addicon5.png") no-repeat left center;}
    .del{background: url("../../public/img/addicon6.png") no-repeat left 2px;}
</style>