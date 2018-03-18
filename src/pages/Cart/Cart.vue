<template>
  <div>
    <CartHeader/>
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
  import CartHeader from '../../components/CartHeader/CartHeader.vue'
  export default{

    components:{
      CartHeader
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixins.styl"
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
