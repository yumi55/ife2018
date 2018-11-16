
import Vue from 'vue'
import App from './App'
import router from './router'   //引入路由配置文件
import underscore from 'underscore' // 函数式编程
 
global._ = underscore

Vue.config.productionTip = false
 
new Vue({
  el: '#app',
  router,   // 注入到根实例中
  render: h => h(App)
})