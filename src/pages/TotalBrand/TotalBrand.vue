<template>
  <div class="container">
    <div class="headerTop">
      <span class="icon-left" @click="$router.back()">
        <i class="iconfont icon-fanhui"></i>
      </span>
      <span class="icon-center">购物车</span>
      <span class="icon-right" @click="toggleShow">
         <i class="iconfont icon-gonggeshitu"></i>
      </span>
    </div>
    <div class="header-nav" :class="{'showHead':isShow}" >
      <div>
          <span class="nav-icon">
            <i class="iconfont icon-shouye"></i>
          </span >
        <span class="nav-text">首页</span>
      </div>
      <div>
        <span class="nav-icon">
          <i class="iconfont icon-fenlei"></i>
        </span>
        <span class="nav-text">商品分类</span>
      </div>
      <div>
        <span class="nav-icon">
          <i class="iconfont icon-shouye1"></i>
        </span>
        <span class="nav-text">购物车</span>
      </div>
      <div>
        <span class="nav-icon">
          <i class="iconfont icon-wode"></i>
        </span>
        <span class="nav-text">我的E宠</span>
      </div>
    </div>
    <div class="outWrap">
      <div class="brandcontainer" >
        <div ref="brandListContainer" class="ListContainer" :class="{'add':true}">
          <div class="total-brand" v-for="(items,index) in totalBrand" >
            <div class="brand-detail">
              <h2>{{items.order}}</h2>
              <div class="brand-container">
                <ul class="brand-list">
                  <li class="brand-item brand-item-hook"  v-for="(item,index) in items.list">
                  <span class="brand-img">
                    <img :src="item.logo" alt="logo">
                  </span>
                    <span class="brand-text">
                    <span class="brand-detail">{{item.name}}</span>
                    <span class="brand-country">{{item.address}}</span>
                  </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="letters">
      <span :class="{current:index===currentIndex}" @click="choiceLetters(index)"
            v-for="(items,index) in totalBrand">{{items.order}}</span>
    </div>
  </div>
</template>

<script>
  import CartHeader from '../../components/CartHeader/CartHeader.vue'
  import {mapState} from 'vuex'
  import BScroll from 'better-scroll'
  export default{
    data(){
      return{
        scrollY:0,
        tops:[],
        isShow:false
      }
    },
    mounted(){
      this.$store.dispatch('getTotalBrand',()=>{
          this.$nextTick(()=>{
            /*整体*/
            this.init_scroll()
            this.init_tops()
          })
      })
    },
    methods:{
      init_scroll(){
        this.brandScroll = new BScroll('.brandcontainer',{
          probeType: 3,
          scrollY:true,
          click: true //响应点击
        })
        this.brandScroll.on('scroll',(pos)=>{
          this.scrollY = Math.abs(pos.y)
        })
      },
      init_tops(){
        const tops = []
        let top = 0
        tops.push(top)
        console.log(this.$refs)
        const lis = this.$refs.brandListContainer.getElementsByClassName('total-brand')

        Array.prototype.slice.call(lis).forEach((li,index)=>{
          top += li.clientHeight
          tops.push(top)
        })
        this.tops = tops
        console.log(this.tops)
      },

      choiceLetters(index){
        const top = this.tops[index]
        this.scrollY = top
        this.brandScroll.scrollTo(0,-top,300)
      },
      toggleShow(){
        this.isShow = !this.isShow
      }
    },
    computed:{
      ...mapState(['totalBrand']),
      currentIndex(){
        const {scrollY,tops} = this
        return tops.findIndex((top,index)=>(scrollY+300)>=top&&(scrollY+300)<tops[index+1])
      }
    },
    components:{
      CartHeader
    },
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  html,body{
    height 100%
  }
  .container
    width 100%
    height 100%
    .headerTop
      width 100%
      height 50px
      display flex
      background #fff
      justify-content space-between
      align-items center
      line-height 50px
      box-sizing border-box
      bottom-border-1px(#f1f1f1)
      .icon-left
        font-size 30px
        padding-left 3%
        .iconfont
          font-size 20px
      .icon-center
        font-size 18px
      .icon-right
        font-size 30px
        padding-right  3%
        .iconfont
          font-size 25px
    .header-nav
      width 100%
      padding 0 3%
      height 0
      background #fff
      display flex
      justify-content space-around
      align-items center
      box-sizing border-box
      bottom-border-1px(#f1f1f1)
      transition .5s
      overflow hidden
      &.showHead
        height 75px
      div
        display flex
        flex-direction column
        align-items center
        justify-content space-around
        .nav-icon
          .iconfont
            font-size 28px
            color #999
        .nav-text
          font-size 15px
          padding 5px 0
          color #999
    .outWrap
      width 100%
      height calc(100% - 50px)
      overflow hidden
      position relative
      .brandcontainer
        position absolute
        top 0
        bottom 0
        left 0
        right 0
        overflow hidden
        .ListContainer
          &.add
            padding-bottom 75px
        .total-brand
          width 100%
          background #fff
          .brand-detail
            width 100%
            h2
              height 24px
              background #d9d9d9
              padding-left 3%
              line-height 24px
            .brand-container
              width 100%
              .brand-list
                width 100%
                .brand-item
                  width 100%
                  height 73px
                  display flex
                  align-items center
                  padding 0 3%
                  box-sizing border-box
                  .brand-img
                    border 1px solid #d9d9d9
                    padding 3px 5px
                    img
                      width 89px
                      height 40px
                  .brand-text
                    display flex
                    flex-direction column
                    padding-left 3%
                    align-items flex-start
                    .brand-detail
                      font-size 16px
                    .brand-country
                      font-size 12px
                      color #999
                      padding-top 3px
    .letters
      height 100%
      position fixed
      top 0
      right 5px
      bottom 0
      margin  auto 0
      display flex
      flex-direction column
      align-items flex-end
      justify-content center
      text-align center
      span
        font-size 13px
        display block
        width 13px
        height 12px
        line-height 13px
        margin-top 3px
        &.current
          color red
</style>
