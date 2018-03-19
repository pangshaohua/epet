<template>
  <div>
    <div class="headerTop">
      <span class="icon-left" @click="$router.back()">
        <i class="iconfont icon-fanhui"></i>
      </span>
      <span class="icon-center">购物车</span>
      <span class="icon-right" @click="toggleShow">
         <i class="iconfont icon-gonggeshitu"></i>
      </span>
    </div>
    <div class="header-nav" :class="{'showHead':isShow}" >
      <div>
          <span class="nav-icon">
            <i class="iconfont icon-shouye"></i>
          </span >
        <span class="nav-text">首页</span>
      </div>
      <div>
        <span class="nav-icon">
          <i class="iconfont icon-fenlei"></i>
        </span>
        <span class="nav-text">商品分类</span>
      </div>
      <div>
        <span class="nav-icon">
          <i class="iconfont icon-shouye1"></i>
        </span>
        <span class="nav-text">购物车</span>
      </div>
      <div>
        <span class="nav-icon">
          <i class="iconfont icon-wode"></i>
        </span>
        <span class="nav-text">我的E宠</span>
      </div>
    </div>
  </div>
</template>

<script>
  export default{
    data(){
      return{
        isShow:false
      }
    },
    methods:{
      toggleShow(){
        this.isShow=!this.isShow
      }
    },
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .headerTop
    width 100%
    height 50px
    display flex
    background #fff
    justify-content space-between
    align-items center
    line-height 50px
    box-sizing border-box
    bottom-border-1px(#f1f1f1)
    .icon-left
      font-size 30px
      padding-left 3%
      .iconfont
        font-size 20px
    .icon-center
      font-size 18px
    .icon-right
      font-size 30px
      padding-right  3%
      .iconfont
        font-size 25px
  .header-nav
    width 100%
    padding 0 3%
    height 0
    background #fff
    display flex
    justify-content space-around
    align-items center
    box-sizing border-box
    bottom-border-1px(#f1f1f1)
    transition .5s
    overflow hidden
    &.showHead
      height 75px
    div
      display flex
      flex-direction column
      align-items center
      justify-content space-around
      .nav-icon
        .iconfont
          font-size 28px
          color #999
      .nav-text
        font-size 15px
        padding 5px 0
        color #999
</style>
