<template>
  <div class="star" :class="'star-'+size">
    <!-- 生成与分数对应的星星 -->
    <span class="star-item" v-for="(c,index) in starClasses" :key="index" :class="c"></span>
  </div> 
</template>

<script>

export default {
  props: {
    size: Number, //尺寸
    score: Number //评分
  },

  computed: {
    starClasses(){
      const score = this.score
      const arr = []
      const scoreInteger = Math.floor(score)
      //添加全星
      for(let i = 0;i<scoreInteger;i++){
        arr.push('on')
      }
      //添加半星
      if(score*10-scoreInteger*10 >= 5){
        arr.push('half')
      }
      //添加空星
      while(arr.length <5){
        arr.push('off')
      }

      return arr

    }
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import '../../common/stylus/mixins.styl'
  .star //2x图 3x图
    float left
    font-size 0
    .star-item
      display inline-block
      background-repeat no-repeat
    &.star-48
      .star-item
        width 20px
        height 20px
        margin-right 22px
        background-size 20px 20px
        &:last-child
          margin-right: 0
        &.on
          bg-image('star48_on')
        &.half
          bg-image('star48_half')
        &.off
          bg-image('star48_off')
    &.star-36
      .star-item
        width 15px
        height 15px
        margin-right 6px
        background-size 15px 15px
        &:last-child
          margin-right 0
        &.on
          bg-image('star36_on')
        &.half
          bg-image('star36_half')
        &.off
          bg-image('star36_off')
    &.star-24
      .star-item
        width 10px
        height 10px
        margin-right 3px
        background-size 10px 10px
        &:last-child
          margin-right 0
        &.on
          bg-image('star24_on')
        &.half
          bg-image('star24_half')
        &.off
          bg-image('star24_off')
                  
</style>