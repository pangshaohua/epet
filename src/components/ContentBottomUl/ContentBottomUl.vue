<template>
  <div>
    <div class="bottomul">
      <div class="bottomul-left">
        <a href="javascript:;" v-for="(item,index) in BottomUlArr[0]">
          <img :src="item.image" alt="global">
        </a>
      </div>
      <div class="bottomul-right">
        <a href="javascript:;" v-for="(item,index) in BottomUlArr[1]">
          <img :src="item.image" alt="global">
        </a>
      </div>

    </div>
  </div>
</template>

<script>
  export default{
    props:{
      BottomUlArr:Array
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .bottomul
    width 100%
    display flex
    padding 5px 0
    background black
    box-sizing border-box
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
</style>
