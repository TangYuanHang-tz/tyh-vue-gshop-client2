import Vue from 'vue'
import App from './App'
// 引入路由器
import router from './router'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { 
    App 
  },
  template: '<App/>',
  //配置路由器 
  router

  /* 可以使用render来配置组件，相当于components与template的共同作用
    components，中告知组件标签名，template中使用告知的组件名生成对应的
    组件标签模板 
  */
  // render: h => h(App)
})
