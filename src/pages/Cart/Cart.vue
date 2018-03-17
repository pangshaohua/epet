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
    <div class="header-nav" v-show="isShow" :class="{on}">
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
    <div class="myCart">
      <div class="CartImg">
        <span>
          <i class="iconfont icon-shouye1"></i>
        </span>
      </div>
      <div class="cartText">购物车是空的</div>
      <div class="goto">
        <span class="gotoFirst">去逛逛</span>
        <span>我的收藏</span>
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
        this.isShow = !this.isShow
      },
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixins.styl"
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
      padding-left 5%
      .iconfont
        font-size 20px
    .icon-center
      font-size 18px
    .icon-right
      font-size 30px
      padding-right  5%
      .iconfont
          font-size 25px
  .header-nav
    width 100%
    padding 0 5%
    height 75px
    background #fff
    display flex
    justify-content space-around
    align-items center
    box-sizing border-box
    bottom-border-1px(#f1f1f1)
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
  .myCart
    width 100%
    height 300px
    background #fff
    box-sizing border-box
    .CartImg
      width 100%
      height 170px
      text-align center
      line-height 170px
      padding-top 20px
      box-sizing border-box
      span
        .iconfont
          font-size 100px
          color #f1f1f1
    .cartText
      width 100%
      text-align center
      font-size 16px
      color #7e8c8d
  .goto
    width 100%
    height 40px
    text-align center
    line-height 40px
    padding-top 20px
    display flex
    align-items center
    justify-content center
    span
      box-sizing border-box
      width 100px
      padding 3px 8px
      border 1px solid #999
      border-radius 5px
      color #999
    .gotoFirst
      margin-right 5px

</style>
