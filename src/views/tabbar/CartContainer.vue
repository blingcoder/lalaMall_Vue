<template>
    <div class="app-cart">
        <la-header></la-header>
        <cart-title></cart-title>
        <cart-item :cbList="cbList" :items="items" @allSel="allSel" @del="del"></cart-item>
        <la-footer></la-footer>
        <div class="account">
            <div class="cb">
                <input id="all" type="checkbox" :checked="isSelected" @click="selectAll">
                <label for="all">全选</label>
                <span @click="deleteSelected">删除</span>
            </div>
            <div class="btn">
                <span class="btn-title">合计:</span>
                    <span class="btn-content">{{sum | money}}</span>
                <button>结 算</button>
            </div>
        </div>
    </div>
</template>
<script>
    import laHeader from '../../components/LaHeader.vue';;
    import cartTitle from '../../components/cart/CartTitle.vue';
    import cartItem from '../../components/cart/CartItem.vue';
    import laFooter from '../../components/LaFooter.vue';
    export default{
        data(){
            return{
                items: [],//保存请求来的所有商品
                isSelected: false,//保存结算栏复选框是否选中
                cbList: []//保存单个商品是否被选中
            }
        },
        components:{
            laHeader,
            cartTitle,
            cartItem,
            laFooter
        },
        created(){
            var url = "http://127.0.0.1:5050/cart";
            this.$http.get(url).then(result=>{
                var msg = result.body.msg;
                this.items = msg;
            })
        },
        methods:{
            // 结算栏删除按钮处理函数
            deleteSelected(){
                if(this.cbList.length>0){
                    for(var key in this.cbList){
                        for(var item of this.items){
                            if(item.id==this.cbList[key]){
                                this.items.splice(this.items.indexOf(item),1);
                            }
                        }
                    }
                }
                this.cbList.length=0;
            },
            // 删除单个商品
            del(id){
                for(var item of this.items){
                    if(item.id == id){
                        this.items.splice(this.items.indexOf(item),1);
                    }
                }
            },
            // 全选复选框处理函数
            selectAll(){
                if(this.isSelected==false){
                    this.isSelected = true;
                    var arr = [];
                    for(var m of this.items){
                        arr.push(m.id);
                        this.cbList = arr;
                    }
                }else{
                    this.isSelected = false;
                    this.cbList = [];
                }
            },
            // 绑定给子组件的自定义事件
            allSel(id){
                var index = this.cbList.indexOf(id);
                if(index>=0){
                    this.cbList.splice(index,1);
                }else{
                    this.cbList.push(id);
                }
                // console.log(this.cbList.length,this.items.length);
                if(this.cbList.length==this.items.length){
                    this.isSelected=true;
                }else{
                    this.isSelected=false;
                }
            }
        },
        computed:{
            sum(){
                var amount = 0;
                for(var item of this.items){
                    amount += item.new_price;
                }
                return amount;
            }
        }
    }
</script>
<style scoped>
    .app-cart{
        margin-top: 10px;
        padding-bottom: 100px;
    }
    .account{
        background-color: #fff;
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        position: absolute;
        bottom: 50px;
        border-top: 1px solid #E5E5E5;
    }
    .cb{padding-left: 5px;}
    .cb,.btn-title{font-size: 12px;}
    .cb input{vertical-align: middle;}
    .cb label,.cb span{padding: 0 10px;}
    .btn{
        display: flex;
        align-items: center;
    }
    .btn .btn-content{
        color: #FF4400;
        padding: 14px 15px 14px 5px;
        font-size: 18px;
    }
    .btn button{
        align-self: stretch;
        color: #fff;
        background-color: #FF4400;
        border: none;
        outline: none;
        padding: 0 22px;
        font-size: 16px;
    }
</style>