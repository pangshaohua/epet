<template>
  <div class="home">
    <!--广告-->
    <div class="advertisement" v-show="isShow">
      <span class="advertisement-img">
        <img src="./images/advertisement.jpg" alt="advertisement">
      </span>
      <span class="close"  @click="toggleShow">
        <img src="http://static.epetbar.com/static_wap/lib/common_images/closebtn_03.png" alt="close">
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
      <!--滑动内容区-->
      <div class="contentbox">
        <div class="contentbox-container" :class="{add:isAdd}">
          <!--轮播区域-->
          <div class="top swiper-container">
            <div class="swiper-wrapper">
              <div class="swiper-slide">
                <a href="javascript:;">
                  <img src="./images/baolu.jpg" alt="baolu">
                </a>
              </div>
              <div class="swiper-slide">
                <a href="javascript:;">
                  <img src="./images/fumo.jpg" alt="fumo">
                </a>
              </div>
              <div class="swiper-slide">
                <a href="javascript:;">
                  <img src="./images/haiwai.jpg" alt="haiwai">
                </a>
              </div>
              <div class="swiper-slide">
                <a href="javascript:;">
                  <img src="./images/tongzhi.jpg" alt="tongzhi">
                </a>
              </div>
              <div class="swiper-slide">
                <a href="javascript:;">
                  <img src="./images/zhuliang.jpg" alt="zhuliang">
                </a>
              </div>
              <div class="swiper-slide">
                <a href="javascript:;">
                  <img src="./images/baolu.jpg" alt="baolu">
                </a>
              </div>
            </div>
            <!-- 如果需要分页器 -->
            <div class="swiper-pagination"></div>
          </div>
          <!--轮播底部图片-->
          <div class="bottom-img">
            <a href="javascript:;">
              <img src="./images/dog.jpg" alt="">
            </a>
          </div>
          <!--ul部分-->
          <div class="category">
            <ul class="category-list">
              <li class="category-item">
                <a href="javascript:;">
                  <img src="./images/aaa.jpg" alt="">
                </a>
              </li>
              <li class="category-item">
                <a href="javascript:;">
                  <img src="./images/aaa.jpg" alt="">
                </a>
              </li>
              <li class="category-item">
                <a href="javascript:;">
                  <img src="./images/aaa.jpg" alt="">
                </a>
              </li>
              <li class="category-item">
                <a href="javascript:;">
                  <img src="./images/aaa.jpg" alt="">
                </a>
              </li>
              <li class="category-item">
                <a href="javascript:;">
                  <img src="./images/aaa.jpg" alt="">
                </a>
              </li>
              <li class="category-item">
                <a href="javascript:;">
                  <img src="./images/aaa.jpg" alt="">
                </a>
              </li>
              <li class="category-item">
                <a href="javascript:;">
                  <img src="./images/aaa.jpg" alt="">
                </a>
              </li>
              <li class="category-item">
                <a href="javascript:;">
                  <img src="./images/aaa.jpg" alt="">
                </a>
              </li>
              <li class="category-item">
                <a href="javascript:;">
                  <img src="./images/aaa.jpg" alt="">
                </a>
              </li>
              <li class="category-item">
                <a href="javascript:;">
                  <img src="./images/aaa.jpg" alt="">
                </a>
              </li>
            </ul>
          </div>
          <div class="miaosha">
            <a href="javascript:;">
              <img src="./images/miaosha.jpg" alt="miaosha">
            </a>
          </div>
          <div class="surprise">
            <div class="surprise-top">
              <div class="surprise-left">
                <img src="./images/fengqiang.png" alt="fengqiang">
              </div>
              <div class="surprise-right">
                <div class="surprise-time">
                  <span class="surprise-text">下一场开始</span>
                  <span class="surprise-m">
                <span>21</span>
                <span>:</span>
                <span>00</span>
              </span>
                </div>
                <div class="more">
                  <img src="./images/more.png" alt="more">
                </div>
              </div>
            </div>
            <!--滑动-->
            <div class="surprise-bottom">
              <ul class="product-list">
                <li class="product-item">
                <span class="item-icon">
                  <img src="./images/shop.jpg" alt="shop">
                </span>
                  <span class="item-price">￥2.20</span>
                  <span class="item-cheap">省19.80</span>
                </li>
                <li class="product-item">
                <span class="item-icon">
                  <img src="./images/shop.jpg" alt="shop">
                </span>
                  <span class="item-price">￥2.20</span>
                  <span class="item-cheap">省19.80</span>
                </li>
                <li class="product-item">
                <span class="item-icon">
                  <img src="./images/shop.jpg" alt="shop">
                </span>
                  <span class="item-price">￥2.20</span>
                  <span class="item-cheap">省19.80</span>
                </li>
                <li class="product-item">
                <span class="item-icon">
                  <img src="./images/shop.jpg" alt="shop">
                </span>
                  <span class="item-price">￥2.20</span>
                  <span class="item-cheap">省19.80</span>
                </li>
                <li class="product-item">
                <span class="item-icon">
                  <img src="./images/shop.jpg" alt="shop">
                </span>
                  <span class="item-price">￥2.20</span>
                  <span class="item-cheap">省19.80</span>
                </li>
                <li class="product-item">
                <span class="item-icon">
                  <img src="./images/shop.jpg" alt="shop">
                </span>
                  <span class="item-price">￥2.20</span>
                  <span class="item-cheap">省19.80</span>
                </li>
                <li class="product-item">
                <span class="item-icon">
                  <img src="./images/shop.jpg" alt="shop">
                </span>
                  <span class="item-price">￥2.20</span>
                  <span class="item-cheap">省19.80</span>
                </li>
                <li class="product-item">
                <span class="item-icon">
                  <img src="./images/shop.jpg" alt="shop">
                </span>
                  <span class="item-price">￥2.20</span>
                  <span class="item-cheap">省19.80</span>
                </li>
              </ul>
            </div>
          </div>
          <div class="pinpai">
            <a href="javascript:;">
              <img src="./images/pinpai.jpg" alt="pinpai">
            </a>
          </div>
          <div class="slide">
            <a href="javascript:;">
              <img src="./images/slide.gif" alt="slide">
            </a>
          </div>
          <div class="vip">
            <a href="javascript:;">
              <img src="./images/vip.jpg" alt="vip">
            </a>
          </div>
          <div class="divbox">
            <div class="divimg">
              <a href="javascript:;">
                <img src="./images/variety.jpg" alt="variety">
              </a>
              <a href="javascript:;">
                <img src="./images/variety.jpg" alt="variety">
              </a>
            </div>
            <div class="divimg">
              <a href="javascript:;">
                <img src="./images/variety.jpg" alt="variety">
              </a>
              <a href="javascript:;">
                <img src="./images/variety.jpg" alt="variety">
              </a>
            </div>

          </div>
          <div class="ciji">
            <a href="javascript:;">
              <img src="./images/ciji.jpg" alt="ciji">
            </a>
          </div>
          <!--中部轮播-->
          <div class="middle swiper-container">
            <div class="swiper-wrapper">
              <div class="swiper-slide">
                <a href="javascript:;">
                  <img src="./images/naifen.jpg" alt="naifen">
                </a>
              </div>
              <div class="swiper-slide">
                <a href="javascript:;">
                  <img src="./images/fumo.jpg" alt="fumo">
                </a>
              </div>
              <div class="swiper-slide">
                <a href="javascript:;">
                  <img src="./images/haiwai.jpg" alt="haiwai">
                </a>
              </div>
              <div class="swiper-slide">
                <a href="javascript:;">
                  <img src="./images/tongzhi.jpg" alt="tongzhi">
                </a>
              </div>
              <div class="swiper-slide">
                <a href="javascript:;">
                  <img src="./images/zhuliang.jpg" alt="zhuliang">
                </a>
              </div>
              <div class="swiper-slide">
                <a href="javascript:;">
                  <img src="./images/baolu.jpg" alt="baolu">
                </a>
              </div>
            </div>
            <!-- 如果需要分页器 -->
            <div class="swiper-pagination"></div>
          </div>
          <div class="dapai">
            <a href="javascript:;">
              <img src="./images/dapai.jpg" alt="dapai">
            </a>
          </div>
          <div class="foreign">
            <ul class="foreign-list">
              <li class="foreign-item">
                <a href="javascript:;">
                  <img src="./images/youxuan.jpg" alt="youxuan">
                </a>
              </li>
              <li class="foreign-item">
                <a href="javascript:;">
                  <img src="./images/youxuan.jpg" alt="youxuan">
                </a>
              </li>
              <li class="foreign-item">
                <a href="javascript:;">
                  <img src="./images/youxuan.jpg" alt="youxuan">
                </a>
              </li>
              <li class="foreign-item">
                <a href="javascript:;">
                  <img src="./images/youxuan.jpg" alt="youxuan">
                </a>
              </li>
              <li class="foreign-item">
                <a href="javascript:;">
                  <img src="./images/youxuan.jpg" alt="youxuan">
                </a>
              </li>
              <li class="foreign-item">
                <a href="javascript:;">
                  <img src="./images/youxuan.jpg" alt="youxuan">
                </a>
              </li>
            </ul>
            <ul class="foreign-list">
              <li class="foreign-item">
                <a href="javascript:;">
                  <img src="./images/youxuan.jpg" alt="youxuan">
                </a>
              </li>
              <li class="foreign-item">
                <a href="javascript:;">
                  <img src="./images/youxuan.jpg" alt="youxuan">
                </a>
              </li>
              <li class="foreign-item">
                <a href="javascript:;">
                  <img src="./images/youxuan.jpg" alt="youxuan">
                </a>
              </li>
              <li class="foreign-item">
                <a href="javascript:;">
                  <img src="./images/youxuan.jpg" alt="youxuan">
                </a>
              </li>
              <li class="foreign-item">
                <a href="javascript:;">
                  <img src="./images/youxuan.jpg" alt="youxuan">
                </a>
              </li>
              <li class="foreign-item">
                <a href="javascript:;">
                  <img src="./images/youxuan.jpg" alt="youxuan">
                </a>
              </li>
            </ul>
            <ul class="foreign-list">
              <li class="foreign-item">
                <a href="javascript:;">
                  <img src="./images/youxuan.jpg" alt="youxuan">
                </a>
              </li>
              <li class="foreign-item">
                <a href="javascript:;">
                  <img src="./images/youxuan.jpg" alt="youxuan">
                </a>
              </li>
              <li class="foreign-item">
                <a href="javascript:;">
                  <img src="./images/youxuan.jpg" alt="youxuan">
                </a>
              </li>
              <li class="foreign-item">
                <a href="javascript:;">
                  <img src="./images/youxuan.jpg" alt="youxuan">
                </a>
              </li>
              <li class="foreign-item">
                <a href="javascript:;">
                  <img src="./images/youxuan.jpg" alt="youxuan">
                </a>
              </li>
              <li class="foreign-item">
                <a href="javascript:;">
                  <img src="./images/youxuan.jpg" alt="youxuan">
                </a>
              </li>
            </ul>
          </div>
          <div class="badly">
            <a href="javascript:;">
              <img src="./images/badly.jpg" alt="badly">
            </a>
          </div>
          <div class="cat">
            <a href="javascript:;">
              <img src="./images/cat.jpg" alt="cat">
            </a>
          </div>
          <div class="content">
            <a href="javascript:;">
              <img src="./images/content.jpg" alt="content">
            </a>
          </div>
          <div class="trend">
            <div class="trend-left">
              <a href="javascript:;">
                <img src="./images/sale.jpg" alt="sale">
              </a>
            </div>
            <div class="trend-right">
              <a href="javascript:;">
                <img src="./images/trend.jpg" alt="trend">
              </a>
              <a href="javascript:;">
                <img src="./images/trend2.jpg" alt="trend">
              </a>
            </div>

          </div>
          <div class="characteristic">
            <a href="javascript:;">
              <img src="./images/characteristic.jpg" alt="characteristic">
            </a>
          </div>
          <div class="bottomul">
            <div class="bottomul-left">
              <a href="javascript:;">
                <img src="./images/global.jpg" alt="global">
              </a>
              <a href="javascript:;">
                <img src="./images/global.jpg" alt="global">
              </a>
              <a href="javascript:;">
                <img src="./images/global.jpg" alt="global">
              </a>
            </div>
            <div class="bottomul-right">
              <a href="javascript:;">
                <img src="./images/global.jpg" alt="global">
              </a>
              <a href="javascript:;">
                <img src="./images/global.jpg" alt="global">
              </a>
              <a href="javascript:;">
                <img src="./images/global.jpg" alt="global">
              </a>
            </div>

          </div>
          <div class="footer">
            <div class="footer-detail">
              <span>触屏版</span>
              <span>手机客户端</span>
              <span>关于我们</span>
              <span>联系我们</span>
            </div>
            <div class="footer-copy">
              <span>© wap.epet.com 版权：重庆易宠科技有限公司</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="switchtype">
      <span class="switchimg" >
        <img src="./images/godog.png" alt="godog" :class="{on:loop}">
      </span>
    </div>
  </div>
</template>

<script>
  import BScroll from 'better-scroll'
  import Swiper from 'swiper'
  import 'swiper/dist/css/swiper.min.css'
  export default{
    data(){
      return{
        isShow:true,
        loop:false,
        isAdd:true
      }
    },
    mounted(){
      this.$nextTick(()=>{
        /*头部导航*/
        new BScroll('.header-nav',{
          probeType: 3,
          scrollX:true,
          click: true //响应点击
        })
        /*中部商品*/
        new BScroll('.surprise-bottom',{
          probeType: 3,
          scrollX:true,
          click: true //响应点击
        })
        /*整体*/
        new BScroll('.contentbox',{
          probeType: 3,
          scrollX:true,
          click: true //响应点击
        })
        new Swiper('.top', {
          pagination: {
            el: '.swiper-pagination',
          },
          loop: true,
          autoplay:{
            delay: 2000,
            disableOnInteraction: false,
          }
        })
        new Swiper('.middle', {
          pagination: {
            el: '.swiper-pagination',
          },
          loop: true,
          autoplay:{
            delay: 2000,
            disableOnInteraction: false,
          }
        })

      })
      setInterval(()=>{
        this.loop = !this.loop
      },1000)
    },
    methods:{
      toggleShow(){
        this.isShow = false
        this.isAdd = false
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .home
    height calc(100% - 50px)
    width 100%
    overflow hidden
    position relative
    .advertisement
      width 100%
      height 55px
      position relative
      .advertisement-img
        img
          width 100%
          display block
      .close
        line-height 55px
        position absolute
        top 0
        left 10px
        img
          width 18px
          height 18px
    .indexbox
      width 100%
      height 100%
      background #fff
      position relative
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
      .contentbox
        width 100%
        height 100%
        overflow hidden
        box-sizing border-box
        .contentbox-container
          padding-top 90px
          &.add
            padding-bottom 50px
          .swiper-wrapper
            .swiper-slide
              width 100%
              height 160px
              a
                img
                  width 100%
                  height 100%
          .swiper-pagination-bullet
            background #fff
            width 6px
            height 6px
            opacity 1
          .swiper-pagination-bullet-active
            background #fff
            width 16px
            height 6px
            border-radius 4px
          .bottom-img
            width 100%
            img
              display block
              width 100%
              height 270px
          .category
            width 100%
            .category-list
              width 100%
              height 190px
              display flex
              flex-wrap wrap
              .category-item
                height 95px
                flex 0 0 20%
                width 20%
                img
                  width 100%
                  height 100%
          .miaosha
            img
              display block
              width 100%
              height 98px
          .surprise
            width 100%
            .surprise-top
              display flex
              justify-content space-between
              padding 0 10px 10px
              .surprise-left
                display flex
                align-items center
                img
                  display block
                  width 85px
                  height 19px
              .surprise-right
                display flex
                justify-content space-between
                align-items center
                .surprise-time
                  .surprise-text
                    font-size 14px
                .surprise-m
                  font-size 14px
                  span
                    border 1px solid #f1f1f1
                  :nth-child(2)
                    border 0
                .more
                  img
                    width 67.5px
                    height 34px
            .surprise-bottom
              width 100%
              overflow hidden
              .product-list
                display flex
                width 160%
                .product-item
                  flex 0 0 20%
                  width 20%
                  display flex
                  flex-direction column
                  align-items center
                  .item-icon
                    img
                      width 100%
                  .item-price
                    font-size 14px
                    color red
                    padding 3px
                  .item-cheap
                    font-size 12px
                    color #7e8c8d
                    padding 3px 3px 8px
          .pinpai
            width 100%
            img
              display block
              width 100%
              height 98px
          .slide
            width 100%
            img
              display block
              height 183px
          .vip
            width 100%
            img
              width 100%
              display block
              height 98px
          .divbox
            width 100%
            display flex
            .divimg
              width 50%
              img
                display block
                width 100%
          .ciji
            width 100%
            img
              width 100%
              display block
              height 98px
          .middle
            .swiper-slide
              width 100%
              height 160px
              a
                img
                  width 100%
                  height 100%
          .swiper-pagination-bullet
            background #fff
            width 6px
            height 6px
            opacity 1
          .swiper-pagination-bullet-active
            background #fff
            width 16px
            height 6px
            border-radius 4px
          .dapai
            width 100%
            img
              width 100%
              display block
              height 98px

          .foreign
            width 100%
            background black
            .foreign-list
              display flex
              width 100%
              flex-wrap wrap
              padding-bottom 10px
              .foreign-item
                flex 0 0 50%
                width 50%
                img
                  width 100%
                  display block
          .badly
            width 100%
            img
              width 100%
              display block
              height 98px
          .cat
            width 100%
            img
              width 100%
              display block
          .content
            width 100%
            img
              width 100%
              display block
              height 98px
          .trend
            width 100%
            display flex
            .trend-left
              felx 1
              width 50%
              img
                display block
                width 100%
            .trend-right
              flex 1
              width 50%
              img
                display block
                width 100%
          .characteristic
            width 100%
            img
              width 100%
              display block
              height 98px

          .bottomul
            width 100%
            display flex
            padding 10px 0
            background black
            .bottomul-left
              width 50%
              img
                display block
                width 100%
            .bottomul-right
              width 50%
              img
                display block
                width 100%
          .footer
            width 100%
            height 86px
            display flex
            align-items center
            flex-direction column
            justify-content center
            .footer-detail
              text-align center
              padding 10px 0
              span
                font-size 14px
                padding 0 5px
              :nth-child(1)
                color red
            .footer-copy
              text-align center
              span
                font-size 12px
    .switchtype
        position absolute
        right  0
        bottom 50px
        width 41px
        height 46px
        overflow hidden
      .switchimg
        width 41px
        height 46px
        overflow hidden
        img
          width 200%
          height 100%
          &.on
            transform translateX(-50%)

</style>
