<template>
  <div>
    <!--广告-->
    <div class="advertisement">
      <span class="close">
        <img src="//static.epetbar.com/static_wap/lib/common_images/closebtn_03.png" alt="close">
      </span>
    </div>
    <!--主内容区-->
    <div class="indexbox">
      <!--头部-->
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
            <li class="header-item">首页</li>
            <li class="header-item">狗狗主粮</li>
            <li class="header-item">服饰城</li>
            <li class="header-item">医疗保健</li>
            <li class="header-item">零食玩具</li>
            <li class="header-item">日用外出</li>
            <li class="header-item">美容香波</li>
          </ul>
        </div>
      </div>
      <!--滑动内容区-->
      <div class="contentbox"></div>
    </div>


  </div>
</template>

<script>
  import BScroll from 'better-scroll'
  export default{
    mounted(){
      this.$nextTick(()=>{
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
  .advertisement
    width 100%
    height 55px
    background-image url("https://img2.epetbar.com/nowater/2017-12/13/18/c63b6e6cf483cbb61196f658920a9d6e.jpg@!water")
    background-size 100% 100%
  .close
    line-height 55px
    margin-left 10px
    img
      width 18px
      height 18px
  .indexbox
    width 100%
    background #fff
    .indexheader
      width 100%
      height 90px
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
          .header-item
            font-size 14px
            width 20%
            text-align center
            color #666
</style>
