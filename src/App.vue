<template>
<div>
  <router-view></router-view>
  <!-- 因为我们在4个路由组件中添加了meta属性，所以我们可以通过这个属性值来判断footer组建是否出现 -->
  <FooterGuide v-if="$route.meta.isShowFooter"></FooterGuide>
</div> 
</template>

<script>
import FooterGuide from './components/FooterGuide/FooterGuide.vue'
export default {
  components: {
    FooterGuide
  }
}
</script>

<style scoped>
</style>