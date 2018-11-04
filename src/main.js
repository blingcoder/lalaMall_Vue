import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
//1.1 引入mint-ui样式文件
import 'mint-ui/lib/style.css';

//1.2 引入MUI样式表
import './lib/mui/css/mui.css';
import './lib/mui/css/icons-extra.css';
//1.3 引入base样式表
import '../public/css/base.css'
Vue.config.productionTip = false;
//2.1 引入mint-ui组件并且注册
import{Swipe,SwipeItem} from 'mint-ui';
Vue.component(Swipe.name,Swipe);
Vue.component(SwipeItem.name,SwipeItem);

//3. 引入VueResourse 到当前项目中
import VueResourse from 'vue-resource';
//4. 加载VueResourse到当前项目中
Vue.use(VueResourse);
//5. 定义全局人民币¥过滤器
Vue.filter("money",val=>{
  return "¥"+val.toFixed(2);
})

//6. 设置全局ajax访问基础路径
Vue.http.options.root = "http://127.0.0.1:5050/";
//7. 设置全局ajax post访问格式 配置指定post发送格式 发送数据格式形式 application/x-www-form-urlencoded
Vue.http.options.emulateJSON = true;


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
