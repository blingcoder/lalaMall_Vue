<template>
    <div class="app-cart-item">
        <div class="cart-item bottom-border" v-for="item in items" :key="item.id">
            <div class="cb">
                <input type="checkbox" :checked="cbList.indexOf(item.id)>=0" @click="select(item.id)">
                <span @click="remove(item.id)">删除</span>
            </div>
            <img :src="item.img_url">
            <div class="detail">
                <p class="title">{{item.title}}</p>
                <p class="spec">
                    <span class="color">颜色：</span>
                    <span class="color-selected">{{item.color}}</span>
                    <span class="pack">包装：</span>
                    <span class="pack-selected">{{item.pack}}</span>
                </p>
                <div class="num">
                    <p class="price">
                        <span class="new-price">{{item.new_price | money}}</span>
                        <span class="old-price">{{item.old_price | money}}</span>
                    </p>
                    <p>{{item.num}}</p>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    export default{
        data(){
            return{
            }
        },
        methods:{
            select(id){
                this.$emit("allSel",id);
            },
            remove(id){
                this.$emit("del",id);
            }
        },
        props:["items","cbList"]
    }
</script>
<style scoped>
    *{font-size: 12px;}
    .cart-item{
        padding: 20px 0 10px;
        display: flex;
    }
    .cart-item img{border: 1px solid #eee;}
    .cb,.detail{
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        padding: 0 5px;
    }
    .cb{align-items: center;}
    .num{
        display: flex;
        justify-content: space-between;
    }
    .spec,.old-price{color: #9C9C9C;}
    .new-price{font-weight: 700; font-size: 14px;}
    .old-price{
        padding-left: 5px;
        text-decoration: line-through;
    }
</style>