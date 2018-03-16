<template>
  <div>
    <div class="tab">
      <div class="tab-item">
        <router-link to="/sort/category" replace>
          <span>分类</span>
        </router-link>
      </div>
      <div class="tab-item">
        <router-link to="/sort/brand" replace>
          <span>品牌</span>
        </router-link>
        <span>
          <i class="iconfont icon-sousuo"></i>
        </span>
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
  export default{
    mounted(){
      this.$store.dispatch('getBrand')
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
    .tab
      width 100%
      height 40px
      background #fff
      display flex
      align-items center
      line-height 40px
      box-sizing border-box
      padding 0 10px
      position absolute
      top 0
      left 0
      right 0
      .tab-item
        flex 1
        box-sizing border-box
        a
          display block
          font-size 14px
          font-weight bold
          &.router-link-active
            span
              color red
              border-bottom 3px solid red
              padding 0 5px 8px
      .tab-item:nth-child(1)
        text-align right
        padding-right 5%
        font-size 16px
        color red
      .tab-item:nth-child(2)
        padding-left 5%
        display flex
        justify-content space-between



</style>
