<template>
  <div>
    <div class="trend">
      <div class="trend-left">
        <a href="javascript:;">
          <img :src="trendArr[0][0].image" alt="sale">
        </a>
      </div>
      <div class="trend-right">
        <a href="javascript:;" v-for="(item,index) in trendArr[1]">
          <img :src="item.image" alt="trend">
        </a>
      </div>

    </div>
  </div>
</template>

<script>
  export default{
    props:{
      trendArr:Array
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
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
</style>
