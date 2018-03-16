<template>
  <div>
    <div class="goods">
      <div class="menu-wrapper" v-if="categorysAndList[0]">
        <ul>
          <li class="menu-item" v-for="(category,index) in categorysAndList[0]" :class="{on:index===currindex}" @click="change(index)">{{category.name}}</li>
        </ul>
      </div>
      <div class="detail-wrapper">
        <div>
          <div class="category-top">
            <div class="category-title" v-if="categorysAndList[1]">
              <span>{{categorysAndList[0][currindex].name}}</span>
              <span>
                <span>全部商品</span>
                <span>
                  <i class="iconfont icon-sanjiaoxing-down"></i>
                </span>
              </span>
            </div>
            <div class="category-container" v-if="categorysAndList[1]">
              <ul class="category-list">
                <li class="category-item" v-for="(item,index) in categorysAndList[1][currindex][0].list">
                  <span class="category-img">
                    <img :src="item.photo" alt="product">
                  </span>
                  <span class="item-text">{{item.name}}</span>
                </li>
              </ul>
            </div>
          </div>
          <div class="trademark-bottom" v-if="categorysAndList[1]">
            <div class="trademark-title" v-if="categorysAndList[1][currindex][1]">
              <span>{{categorysAndList[1][currindex][1].title}}</span>
            </div>
            <div class="trademark-names" v-if="categorysAndList[1]">
              <ul class="trademark-list" v-if="categorysAndList[1][currindex][1]" >
                <li class="trademark-item" v-for="(item,index) in categorysAndList[1][currindex][1].list">
                  <span class="trademark-img">
                    <img :src="item.logo" alt="trademark">
                  </span>
                  <span class="trademark-text">{{item.name}}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import {mapState} from 'vuex'
  import BScroll from 'better-scroll'
  export default{
    data(){
      return{
        currindex:1,//导航样式
        showList:false//右侧列表是否显示
      }
    },
    mounted(){
      this.$store.dispatch('getCategorysAndList',()=>{
        this.$nextTick(()=>{
          new BScroll('.menu-wrapper',{
            probeType: 3,
            scrollY:true,
            click: true, //响应点击
            bounce:false
          })
          new BScroll('.detail-wrapper',{
            probeType: 3,
            scrollY:true,
            click: true, //响应点击
            bounce:false
          })
        })
      })
    },
    methods:{
      change(index){
        this.currindex = index
      }
    },
    computed:{
      ...mapState(['categorysAndList'])
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
      margin-top 3px
      .menu-wrapper
        flex 0 0 20%
        width 20%
        display flex
        flex-direction column
        align-items center
        background #f5f5f5
        margin-right 5px
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
        margin-top 8px
        .category-top
          width 100%
          .category-title
            height 50px
            display flex
            justify-content space-between
            box-sizing border-box
            padding 5px 15px
            align-items center
            background #fff
            span
              height 100%
              line-height 50px
              font-size 10px
              color #999
          .category-container
            width 100%
            .category-list
              display flex
              flex-wrap wrap
              border-bottom: 1px solid #f3f4f5
              .category-item
                flex 0 0 33.33%
                display flex
                flex-direction column
                align-items center
                margin-bottom 8px
                background #fff
                .category-img
                  padding-bottom 10px
                  img
                    display block
                    width 87px
                    height 87px
                .item-text
                  font-size 13px
        .trademark-bottom
          width 100%
          padding-bottom 15px
          .trademark-title
            width 100%
            height 50px
            span
              font-size 13px
              color #999
              line-height 50px
              padding-left 5%
          .trademark-names
            width 100%
          .trademark-list
            width 100%
            display flex
            flex-wrap wrap
            .trademark-item
              flex 0 0 50%
              display flex
              flex-direction column
              align-items center
              .trademark-img
                border: 1px solid #f3f4f5
                padding 5px 10px
                img
                  width 108px
                  height 45px
              .trademark-text
                font-size 12px
                padding-top 5px



</style>
