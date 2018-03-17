<template>
  <div class="footer_guide">
    <span class="guide_item" :class="{on:$route.path==='/home'}" @click="goto('/home')">
      <span class="item_icon">
        <i class="iconfont icon-shouye"></i>
      </span>
      <span>首页</span>
    </span>
    <span class="guide_item" :class="{on:$route.path==='/sort/category'}" @click="goto('/sort')">
      <span class="item_icon">
        <i class="iconfont icon-fenlei"></i>
      </span>
      <span>分类</span>
    </span>
    <span class="guide_item" :class="{on:$route.path==='/cart'}" @click="goto('/cart')">
      <span class="item_icon">
        <i class="iconfont icon-shouye1"></i>
      </span>
      <span>购物车</span>
    </span>
    <span class="guide_item" :class="{on:$route.path==='/profile'}" @click="goto('/profile')">
      <span class="item_icon">
        <i class="iconfont icon-wode"></i>
      </span>
      <span>我的E宠</span>
    </span>
  </div>
</template>

<script>
  export default{
    methods:{
      goto(path){
        this.$router.push(path)
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .footer_guide
    z-index 200
    position fixed
    bottom 0
    left 0
    right 0
    background #fff
    height 50px
    width 100%
    display flex
    .guide_item
      display flex
      flex 1
      flex-direction column
      align-items center
      justify-content center
      color #999
      &.on
        color lightgreen
      span
        font-size 12px
        .iconfont
          font-size 25px

</style>
