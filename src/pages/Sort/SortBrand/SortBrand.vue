<template>
  <div>
    <div class="brand">
      <div>
        <div v-for="(brand,index) in brand">
          <div class="brand-title">——{{brand.title}}——</div>
          <ul class="brand-list">
            <li class="brand-item" v-for="(item,index) in brand.list">
              <span class="brand-img">
                <img :src="item.logo" alt="variety">
              </span>
              <div class="brand-text">
                <p class="brand-text-first">{{item.name}}</p>
                <p class="brand-text-second">{{item.address}}</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import {mapState} from 'vuex'
  import BScroll from 'better-scroll'
  export default{
    mounted(){
      new BScroll('.brand',{
        probeType: 3,
        scrollX:true,
        click: true, //响应点击
        bounce:false
      })
    },
    computed:{
      ...mapState(['brand'])
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .brand
    margin-top 8px
    position absolute
    top 40px
    left 0
    right 0
    bottom 50px
    background #f5f5f5
    overflow hidden
    .brand-title
      width 100%
      font-size 12px
      text-align center
      padding-top 20px
      background #fff
    .brand-list
      width 100%
      display flex
      align-items center
      flex-wrap wrap
      background #fff
      margin-bottom 10px
      padding-top 8px
      .brand-item
        height 107px
        flex 0 0 33.33%
        display flex
        flex-direction column
        align-items center
        justify-content center
        background #fff
        margin-bottom 20px
        .brand-img
          border: 1px solid #f3f4f5
          padding 10px 15px
          img
            width 79px
            height 40px
        .brand-text
          text-align center
          padding 15px 5px
          .brand-text-first
            font-size 12px
          .brand-text-second
            font-size 10px
            padding-top 5px
            color #999



</style>
