<template>
  <div class="home" >
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
      <HeaderTop/>
      <!--滑动内容区-->
      <div class="contentbox" >
        <div class="contentbox-container" :class="{add:isAdd}">
          <!--轮播区域-->
          <div v-if="homeMessage[0]">
            <ContentSlide :imgsArr="homeMessage[0].value"/>
          </div>
          <!--轮播底部图片-->
          <div class="bottom-img" v-if="homeMessage[1]">
            <a href="javascript:;">
              <img :src="homeMessage[1].value[0].image" alt="dog">
            </a>
          </div>
          <!--ul部分-->
          <div v-if="homeMessage[2]">
            <ContentCategory :ulArr="homeMessage[2].menus"/>
          </div>

          <div class="miaosha" v-if="homeMessage[3]">
            <a href="javascript:;">
              <img :src="homeMessage[3].value[0].image" alt="miaosha">
            </a>
          </div>
          <!--中部滑动-->
          <div v-if="homeMessage[4]">
            <ContentScroll :middleSlideArr="homeMessage[4].goods"/>
          </div>

          <div class="pinpai" v-if="homeMessage[5]">
            <a href="javascript:;">
              <img :src="homeMessage[5].value[0].image" alt="pinpai">
            </a>
          </div>
          <div class="slide">
            <a href="javascript:;"  v-if="homeMessage[6]">
              <img :src="homeMessage[6].value[0].image" alt="slide">
            </a>
          </div>
          <div class="vip" v-if="homeMessage[7]">
            <a href="javascript:;">
              <img :src="homeMessage[7].value[0].image" alt="vip">
            </a>
          </div>
          <div v-if="homeMessage[8]">
            <ContentDivBox :contentImagesArr="homeMessage[8].content_images"/>
          </div>

          <div class="ciji">
            <a href="javascript:;" v-if="homeMessage[9]">
              <img :src="homeMessage[9].value[0].image" alt="ciji">
            </a>
          </div>
          <!--中部轮播-->
          <div v-if="homeMessage[10]">
            <ContentSlide :imgsArr="homeMessage[10].value"/>
          </div>


          <div class="dapai">
            <a href="javascript:;" v-if="homeMessage[11]">
              <img :src="homeMessage[11].value[0].image" alt="dapai">
            </a>
          </div>
          <div v-if="homeMessage[12]">
            <ContentForeign :foreinArr1="homeMessage[12].content_images"
                            :foreinArr2="homeMessage[13].content_images"
                            :foreinArr3="homeMessage[14].content_images"
                            :foreinArr4="homeMessage[15].content_images"
                            :foreinArr5="homeMessage[16].content_images"
            />
          </div>

          <div class="badly">
            <a href="javascript:;" v-if="homeMessage[17]" >
              <img :src="homeMessage[17].value[0].image" alt="badly">
            </a>
          </div>
          <div class="cat">
            <a href="javascript:;" v-if="homeMessage[18]">
              <img :src="homeMessage[18].value[0].image" alt="cat">
            </a>
          </div>
          <div class="content">
            <a href="javascript:;" v-if="homeMessage[19]">
              <img :src="homeMessage[19].value[0].image" alt="content">
            </a>
          </div>
          <div v-if="homeMessage[20]">
            <ContentTrend :trendArr="homeMessage[20].content_images"/>
          </div>

          <div class="characteristic">
            <a href="javascript:;" v-if="homeMessage[21]">
              <img :src="homeMessage[21].value[0].image" alt="characteristic">
            </a>
          </div>
          <div v-if="homeMessage[22]">
            <ContentBottomUl :BottomUlArr="homeMessage[22].content_images"/>
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
  import {mapState} from 'vuex'
  import BScroll from 'better-scroll'
  import Swiper from 'swiper'
  import 'swiper/dist/css/swiper.min.css'

  import HeaderTop from '../../components/HeaderTop/HeaderTop.vue'
  import ContentSlide from '../../components/ContentSlide/ContentSlide.vue'
  import ContentCategory from '../../components/ContentCategory/ContentCategory.vue'
  import ContentScroll from '../../components/ContentScroll/ContentScroll.vue'
  import ContentDivBox from '../../components/ContentDivBox/ContentDivBox.vue'
  import ContentForeign from '../../components/ContentForeign/ContentForeign.vue'
  import ContentTrend from '../../components/ContentTrend/ContentTrend.vue'
  import ContentBottomUl from '../../components/ContentBottomUl/ContentBottomUl.vue'

  export default{
    data(){
      return{
        isShow:true,
        loop:false,
        isAdd:true
      }
    },
    mounted(){
      this.$store.dispatch('getHomeMessage')
      this.$nextTick(()=>{
        /*整体*/
        new BScroll('.contentbox',{
          probeType: 3,
          scrollX:true,
          click: true //响应点击
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
    },
    computed:{
      ...mapState(['homeMessage'])
    },
    components:{
      HeaderTop,
      ContentSlide,
      ContentCategory,
      ContentScroll,
      ContentDivBox,
      ContentForeign,
      ContentTrend,
      ContentBottomUl
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
      .contentbox
        width 100%
        height 100%
        overflow hidden
        box-sizing border-box
        .contentbox-container
          padding-top 90px
          &.add
            padding-bottom 50px
          .bottom-img
            width 100%
            img
              display block
              width 100%
              height 270px
          .miaosha
            img
              display block
              width 100%
              height 98px
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
          .ciji
            width 100%
            img
              width 100%
              display block
              height 98px
          .dapai
            width 100%
            img
              width 100%
              display block
              height 98px
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
          .characteristic
            width 100%
            img
              width 100%
              display block
              height 98px
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
