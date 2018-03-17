<template>
  <div>
    <div class="divbox">
      <div class="divimg">
        <a href="javascript:;" v-for="(item,index) in contentImagesArr[0]">
          <img :src="item.image" alt="variety">
        </a>
      </div>
      <div class="divimg" >
        <a href="javascript:;" v-for="(item,index) in contentImagesArr[1]">
          <img :src="item.image" alt="variety">
        </a>
      </div>

    </div>
  </div>
</template>

<script>
  export default{
    props:{
      contentImagesArr:Array
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .divbox
    width 100%
    display flex
    .divimg
      width 50%
      img
        display block
        width 188px
        height 100px
</style>
