<template>
  <div class="app-container">
    <!-- 1.路由显示其它模块 -->
    <router-view></router-view>
    <!-- 2.mui tabbar -->
    <nav class="mui-bar mui-bar-tab">
      <router-link class="mui-tab-item" to="/home">
          <span class="mui-icon mui-icon-home"></span>
          <span class="mui-tab-label">首页</span>
      </router-link>
      <router-link class="mui-tab-item" to="/sort">
          <span class="mui-icon mui-icon-list"></span>
          <span class="mui-tab-label">分类</span>
      </router-link>
      <router-link class="mui-tab-item" to="/cart">
          <span class="mui-icon mui-icon-extra mui-icon-extra-cart"><span class="mui-badge">0</span></span>
          <span class="mui-tab-label">购物车</span>
      </router-link>
      <router-link class="mui-tab-item" to="/profile">
          <span class="mui-icon mui-icon-person"></span>
          <span class="mui-tab-label">我的 </span>
      </router-link>
    </nav>
  </div>
</template>

<style scoped>
  .app-container{
    padding-top: 45px;
    padding-bottom: 50px;
    overflow-x: hidden;
    background: #fff;
  }
  .mui-bar-tab .mui-tab-item{color: #333 !important;}
  .mui-bar-tab .mui-active{color: #007aff !important;}
  .mui-bar-tab .mui-tab-item .mui-icon{font-size: 22px;}
  .mui-bar-tab .mui-tab-item .mui-tab-label{font-size: 14px !important;}
</style>
