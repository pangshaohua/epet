<template>
  <div>
    <div class="middle swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="(imgs,index) in middleImgsArr">
          <a href="javascript:;">
            <img :src="imgs.image" alt="naifen">
          </a>
        </div>
      </div>
      <!-- 如果需要分页器 -->
      <div class="swiper-pagination"></div>
    </div>
  </div>
</template>

<script>
  import Swiper from 'swiper'
  import 'swiper/dist/css/swiper.min.css'
  export default{
    props:{
      middleImgsArr:Array
    },
    mounted(){
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
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
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
</style>
