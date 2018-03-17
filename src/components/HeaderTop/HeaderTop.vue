<template>
  <div>
    <div class="indexheader">
      <div class="header-search">
        <!--左-->
        <span class="search-left">
            <span>狗狗</span>
            <span>|</span>
            <span>重庆</span>
            <i class="iconfont icon-sanjiaoxing-down"></i>
          </span>
        <!--中-->
        <span class="search-middle">
            <input class="search-input" type="text" placeholder="搜索商品和品牌">
            <span class="searchbtn">
              <i class="iconfont icon-sousuo"></i>
            </span>
          </span>
        <!--右-->
        <span class="searchmsg">
            <i class="iconfont icon-xinxi"></i>
          </span>
      </div>
      <div class="header-nav">
        <ul class="header-list">
          <li class="header-item on">
            <span>首页</span>
          </li>
          <li class="header-item">
            <span>狗狗主粮</span>
          </li>
          <li class="header-item">
            <span>服饰城</span>
          </li>
          <li class="header-item">
            <span>医疗保健</span>
          </li>
          <li class="header-item">
            <span>零食玩具</span>
          </li>
          <li class="header-item">
            <span>日用外出</span>
          </li>
          <li class="header-item">
            <span>美容香波</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
  import BScroll from 'better-scroll'
  export default{
    mounted(){
      this.$nextTick(()=>{
        /*头部导航*/
        new BScroll('.header-nav',{
          probeType: 3,
          scrollX:true,
          click: true //响应点击
        })
      })
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .indexheader
    position absolute
    left 0
    right 0
    top 0
    width 100%
    height 90px
    background #fff
    z-index 100
    .header-search
      width 100%
      height 50px
      padding 3px 0 5px
      display flex
      justify-content space-around
      flex-wrap nowrap
      align-items center
      .search-left
        flex 2
        font-size 14px
        color #7e8c8d
        text-align center
      .search-middle
        flex 4
        position relative
        .search-input
          background-color #bcbcbc
          height 25px
          font-size 14px
          border-radius 4px
          width 100%
          text-indent 10px
          outline 0
        .searchbtn
          position absolute
          top 50%
          transform translateY(-50%)
          right 10px
          .iconfont
            font-size 10px
      .searchmsg
        flex 1
        text-align center
        .iconfont
          font-size 22px
    .header-nav
      width 100%
      overflow hidden
      .header-list
        width 140%
        display flex
        align-items flex-end
        .header-item
          font-size 14px
          width 20%
          text-align center
          color #666
          height 36px
          line-height 36px
          &.on
            span
              color #459d36
              border-bottom 3px solid #459d36
              padding 0 5px 3px
</style>
