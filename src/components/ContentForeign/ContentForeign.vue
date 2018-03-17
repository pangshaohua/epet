<template>
  <div>
    <div class="foreign">
      <div class="foreign-item">
        <ul class="foreign-list">
          <li class="foreign-item" v-for="(item,index) in foreinArr1[0]">
            <a href="javascript:;">
              <img :src="item.image" alt="youxuan">
            </a>
          </li>
        </ul>
      </div>
      <div class="foreign-item">
        <ul class="foreign-list">
          <li class="foreign-item" v-for="(item,index) in foreinArr1[1]">
            <a href="javascript:;">
              <img :src="item.image" alt="youxuan">
            </a>
          </li>
        </ul>
      </div>
    </div>
    <div class="foreign">
      <div class="foreign-item">
        <ul class="foreign-list">
          <li class="foreign-item" v-for="(item,index) in foreinArr2[0]">
            <a href="javascript:;">
              <img :src="item.image" alt="youxuan">
            </a>
          </li>
        </ul>
      </div>
      <div class="foreign-item">
        <ul class="foreign-list">
          <li class="foreign-item" v-for="(item,index) in foreinArr2[1]">
            <a href="javascript:;">
              <img :src="item.image" alt="youxuan">
            </a>
          </li>
        </ul>
      </div>
    </div>
    <div class="foreign">
      <div class="foreign-item">
        <ul class="foreign-list">
          <li class="foreign-item" v-for="(item,index) in foreinArr3[0]">
            <a href="javascript:;">
              <img :src="item.image" alt="youxuan">
            </a>
          </li>
        </ul>
      </div>
      <div class="foreign-item">
        <ul class="foreign-list">
          <li class="foreign-item" v-for="(item,index) in foreinArr3[1]">
            <a href="javascript:;">
              <img :src="item.image" alt="youxuan">
            </a>
          </li>
        </ul>
      </div>
    </div>
    <div class="foreign">
      <div class="foreign-item">
        <ul class="foreign-list">
          <li class="foreign-item" v-for="(item,index) in foreinArr4[0]">
            <a href="javascript:;">
              <img :src="item.image" alt="youxuan">
            </a>
          </li>
        </ul>
      </div>
      <div class="foreign-item">
        <ul class="foreign-list">
          <li class="foreign-item" v-for="(item,index) in foreinArr4[1]">
            <a href="javascript:;">
              <img :src="item.image" alt="youxuan">
            </a>
          </li>
        </ul>
      </div>
    </div>
    <div class="foreign">
      <div class="foreign-item">
        <ul class="foreign-list">
          <li class="foreign-item" v-for="(item,index) in foreinArr5[0]">
            <a href="javascript:;">
              <img :src="item.image" alt="youxuan">
            </a>
          </li>
        </ul>
      </div>
      <div class="foreign-item">
        <ul class="foreign-list">
          <li class="foreign-item" v-for="(item,index) in foreinArr5[1]">
            <a href="javascript:;">
              <img :src="item.image" alt="youxuan">
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
  export default{
    props:{
      foreinArr1:Array,
      foreinArr2:Array,
      foreinArr3:Array,
      foreinArr4:Array,
      foreinArr5:Array,
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .foreign
    width 100%
    background black
    display flex
    padding 0 2px 0 0
    box-sizing border-box
    .foreign-item
      width 50%
      .foreign-list
        width 100%
        .foreign-item
          width 100%
          img
            width 188px
            height 232px
            display block
</style>
