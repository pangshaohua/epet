<template>
  <div>
    <div class="top swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="(imgs,index) in imgsArr" :key="index">
          <a href="javascript:;">
            <img :src="imgs.image" alt="baolu">
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
      imgsArr:Array
    },
    mounted(){
      this.$nextTick(()=>{
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
      })
    },
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .swiper-wrapper
    .swiper-slide
      width 100%
      height 160px
      a
        img
          display block
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
