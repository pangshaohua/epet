<template>
  <div>
    <div class="goods">
      <div class="menu-wrapper">
        <ul>
          <li class="menu-item on">为您推荐</li>
          <li class="menu-item">狗狗主粮</li>
          <li class="menu-item">狗狗零食</li>
          <li class="menu-item">狗狗服饰</li>
          <li class="menu-item">狗狗窝垫</li>
          <li class="menu-item">狗狗生活</li>
          <li class="menu-item">狗狗玩具</li>
          <li class="menu-item">狗狗保健</li>
          <li class="menu-item">狗狗医疗</li>
          <li class="menu-item">狗狗牵引</li>
          <li class="menu-item">狗狗美容</li>
          <li class="menu-item">狗狗周边</li>
          <li class="menu-item">狗狗清洁</li>
        </ul>
      </div>
      <div class="detail-wrapper">
        <div class="category-top">
          <span>狗狗主粮</span>
          <span>
            <span>全部商品</span>
            <span>
              <i class="iconfont icon-sanjiaoxing-down"></i>
            </span>
          </span>
        </div>
        <div class="category-bottom"></div>
      </div>
    </div>
  </div>
</template>

<script>
  import BScroll from 'better-scroll'
  export default{
    mounted(){
      this.$nextTick(()=>{
        new BScroll('.menu-wrapper',{
          probeType: 3,
          scrollX:true,
          click: true, //响应点击
          bounce:false
        })
      })
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
    .goods
      position absolute
      top 40px
      bottom 50px
      width 100%
      display flex
      overflow hidden
      margin-top 5px 0
      .menu-wrapper
        flex 0 0 20%
        width 20%
        display flex
        flex-direction column
        align-items center
        background #f5f5f5
        .menu-item
          width 75px
          font-size 13px
          height 50px
          line-height 50px
          background #fff
          border-bottom: 1px solid #f3f4f5;
          text-align center
          &.on
            color red
            background #f5f5f5
      .detail-wrapper
        flex 0 0 80%
        width 80%
        background #fff
        overflow hidden
        .category-top
          height 20px
          display flex
          justify-content space-between
          box-sizing border-box
          padding 10px 15px
          background #7e8c8d
          span
            line-height 20px

</style>
