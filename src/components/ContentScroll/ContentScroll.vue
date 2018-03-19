<template>
  <div>
    <div class="surprise">
      <div class="surprise-top">
        <div class="surprise-left">
          <img src="https://static.epetbar.com/static_wap/appmall/main/new_index_icon_suprice.png?version=03" alt="fengqiang">
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
            <img src="https://img2.epetbar.com/nowater/2018-02/02/12/0e7b95a6cae2f593c0277eac64f94794.png" alt="more">
          </div>
        </div>
      </div>
      <!--滑动-->
      <div class="surprise-bottom">
        <ul class="product-list">
          <li class="product-item" v-for="(item,index) in middleSlideArr">
                <span class="item-icon">
                  <img :src="item.image.image" alt="shop">
                </span>
            <span class="item-price">￥{{item.sale_price}}</span>
            <span class="item-cheap">{{item.little_price}}</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
  import BScroll from 'better-scroll'
  export default{
    props:{
      middleSlideArr:Array
    },
    mounted(){
      this.$nextTick(()=>{
        /*中部商品*/
        new BScroll('.surprise-bottom',{
          probeType: 3,
          scrollX:true,
          click: true //响应点击
        })
      })
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
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
        width 210%
        .product-item
          flex 0 0 100px
          width 100px
          display flex
          flex-direction column
          align-items center
          .item-icon
            img
              width 85px
              height 85px
          .item-price
            font-size 14px
            color red
            padding 3px
          .item-cheap
            font-size 12px
            color #7e8c8d
            padding 3px 3px 8px
</style>
