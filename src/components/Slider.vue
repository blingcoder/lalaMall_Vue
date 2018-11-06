<template>
    <div class="app-slider">
        <mt-swipe :auto="4000">
            <mt-swipe-item class="img_box">
                <img :src="img">
            </mt-swipe-item>
        </mt-swipe>
    </div>
</template>
<script>
    export default{
        data(){
            return{}
        },
        props:["img"]
    }
</script>
<style scoped>
    .app-slider{height: 120px;}
    .app-slider img{width: 100%;border-radius: 12px;}
</style>