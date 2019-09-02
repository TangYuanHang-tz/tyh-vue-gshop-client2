<template>
  <section class="msite">
    <!--首页头部-->
    <!-- 根据请求回来的参数动态获取地址信息 -->
    <Header :title="address.name || '正在进行定位...'">
      <!-- 在插槽内部传递指定的标签 -->
      <span class="header_search" slot="left">
        <i class="iconfont icon-sousuo"></i>
      </span>

      <span class="header_login" slot="right">
        <span class="header_login_text">登录|注册</span>
      </span>
    </Header>

    <!--首页导航-->
    <nav class="msite_nav">
      <div class="swiper-container">
        <div class="swiper-wrapper">
          <!-- 更具返回的分类列表遍历多个分页 -->
          <div class="swiper-slide" v-for="(categorys,index) in categorysArr" :key="index">
            <!-- 根据具体的分页类容，显示商品分类 -->
            <a href="javascript:" class="link_to_food" v-for="(c,index) in categorys" :key="index">
              <div class="food_container">
                <img :src="'https://fuss10.elemecdn.com' + c.image_url">
              </div>
              <span>{{c.title}}</span>
            </a>
            
          </div>
        </div>
        <!-- Add Pagination -->
        <div class="swiper-pagination"></div>
      </div>
    </nav>
    <!--首页附近商家-->
    <ShopList></ShopList>
  </section> 
</template>

<script>
import ShopList from '../../components/ShopList/ShopList.vue'
//引入swiper
import Swiper from 'swiper'
import 'swiper/dist/css/swiper.min.css'
//引入vuex辅助函数
import { mapState } from 'vuex'
export default {
  computed: {
    ...mapState(['address','categorys']),
    //计算属性实现categorysArr
    categorysArr(){
      //取出相关属性
      const bigArr = []
      let smallArr = []
      const {categorys} = this
      //计算属性
      categorys.forEach(c => {

        if(smallArr.length === 0){
          bigArr.push(smallArr)
        }

        smallArr.push(c)

        if(smallArr.length === 8){
          smallArr = []
        }
      })

      //f返回结果
      return bigArr
    }
  },
  
  mounted(){
    //发送异步请求获取地址信息
    this.$store.dispatch('getAddress')
    //发送请求获取异步商家列表信息---
    //虽然该请求响应后会修改state中的shops，并且该状态数据实在shopList组件中具体使用，但是state中的状态数据是全局性值的，
    //所以在shopList组件中可以直接使用
    this.$store.dispatch('getShops')
    this.$store.dispatch('getCategorys')

    //使用swiper需要new一个Swiper对象，但是需要在页面初始化显示之后再new
    /* var mySwiper = new Swiper('.swiper-container', {
      // direction: 'vertical', // 垂直切换选项
      loop: true, // 循环模式选项
      
      // 如果需要分页器
      pagination: {
        el: '.swiper-pagination',
      },
    }) */
  }, 
  //-------------解决创建Swiper对象之后不能正常轮播的问题
  watch: {
    //我们更新状态==》立即同步调用监视的回调函数==》但是却是异步更新页面
    categorys(newVal,oldVal){
      //nextTick该方法需要在修改数据之后立即使用
      //然后他的回调函数将会在下一次界面更新之后调用
      this.$nextTick(() => {
        var mySwiper = new Swiper('.swiper-container', {
        loop: true, 
        pagination: {
          el: '.swiper-pagination',
      }
    })
      })
    }
  } ,
  //引入附近商家组件
  components: {
    ShopList
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import '../../common/stylus/mixins.styl'
  .msite  //首页
    width 100%
    .msite_nav
      bottom-border-1px(#e4e4e4)
      margin-top 45px
      height 200px
      background #fff
      .swiper-container
        width 100%
        height 100%
        .swiper-wrapper
          width 100%
          height 100%
          .swiper-slide
            display flex
            justify-content center
            align-items flex-start
            flex-wrap wrap
            .link_to_food
              width 25%
              .food_container
                display block
                width 100%
                text-align center
                padding-bottom 10px
                font-size 0
                img
                  display inline-block
                  width 50px
                  height 50px
              span
                display block
                width 100%
                text-align center
                font-size 13px
                color #666
        .swiper-pagination
          >span.swiper-pagination-bullet-active
            background #02a774
</style>