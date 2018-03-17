<template>
  <div>
    <div class="category">
      <ul class="category-list">
        <li class="category-item" v-for="(item,index) in ulArr" :key="index">
          <a href="javascript:;">
            <img :src="item.image" alt="ccc">
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default{
    props:{
      ulArr:Array
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .category
    width 100%
    .category-list
      width 100%
      height 190px
      display flex
      flex-wrap wrap
      .category-item
        height 95px
        flex 0 0 20%
        width 20%
        img
          width 100%
          height 100%
</style>
