import Vue from 'vue'
import App from './App'
// 引入路由器
import router from './router'
// 因为Header组件，在4个路由中都要使用，所以为了避免在每一个路由组件中都注册Header组件，我们就在main.js中将其注册为全局组件
import Header from './components/Header/Header.vue'

//注册全局组件
Vue.component("Header",Header)

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
