<template>
  <div>
    <div class="topContainer">
      <div class="register">
        <span @click="$router.back()">
          <i class="iconfont icon-fanhui"></i>
        </span>
        <span>注册</span>
      </div>
      <div class="login-type">
        <div class="normal-login">
            <span class="login-text">普通登录</span>
            <span class="icon-bottom">
              <i class="iconfont icon-sanjiaoxing-up"></i>
            </span>
        </div>
        <div class="mobile-login">
            <span class="login-text">手机动态密码登录</span>
            <span class="icon-bottom">
              <i class="iconfont icon-sanjiaoxing-up"></i>
            </span>
        </div>
      </div>
    </div>
    <div class="formContainer">
      <ul class="formList">
        <li class="form-item">
            <span class="form-icon">
              <i class="iconfont icon-icon--"></i>
            </span>
          <input class="form-input" type="text" placeholder="已注册的手机号">
        </li>
        <li class="form-item">
          <span class="form-icon">
            <i class="iconfont icon-mima"></i>
          </span>
          <input class="form-input" type="text" placeholder="请输入图片内容">
          <div class="form-img">
            <img src="" alt="yanzheng">
          </div>
        </li>
        <li class="form-item">
            <span class="form-icon">
              <i class="iconfont icon-mima"></i>
            </span>
          <input class="form-input" type="text" placeholder="已注册的手机号">
          <button class="reqCode">
            获取动态验证码
          </button>
        </li>
      </ul>
    </div>
    <div class="pwd">
      <span>忘记密码？</span>
    </div>
    <div class="loginCommit">
      <button class="loginbtn">登&nbsp; 录</button>
    </div>
    <div class="coperation">
      <div class="coperation-conotainer">
        <p class="coperation-text">合作网站登录</p>
        <div class="coperation-img">
          <span>
            <img src="//static.epetbar.com/mpet/images/login/login_ico4.png" alt="">
          </span>
          <span>
            <img src="//static.epetbar.com/mpet/images/login/login_ico2.png" alt="">
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default{}
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .topContainer
    width 100%
    height 180px
    background-image url("http://img1.epetbar.com/2018-03/14/17/d6aa601c1a4b5789b776f18261a960f6.png")
    background-repeat no-repeat
    background-size 100% 100%
    position relative
    .register
      width 100%
      height 50px
      box-sizing border-box
      padding 0 3%
      display flex
      justify-content space-between
      align-items center
      span
        font-size 16px
        color #fff
    .login-type
      width 100%
      height 44px
      background rgba(255,255,255,0.3)
      display flex
      position absolute
      left 0
      right 0
      bottom 0
      div
        width 50%
        height 100%
        text-align center
        display flex
        flex-direction column
        position relative
        color #fff
        .login-text
          line-height 44px
        .icon-bottom
          position absolute
          bottom -7px
          left 0
          right 0
          margin 0 auto
          padding-bottom 0
          .iconfont
            font-size 20px
  .formContainer
    width 100%
    background #fff
    .form-item
      width 90%
      margin 0 auto
      height 46px
      line-height 46px
      position relative
      color #d6d6d6
      border-bottom 2px solid #f5f5f5
      .form-icon
        position absolute
        left 0
        .iconfont
         font-size 22px
      .form-input
        width 100%
        height 100%
        outline 0
        text-indent 30px
        font-size 15px
        &::placeholder
          color #d9d9d9


      .form-img
        width 70px
        height 35px
        background #666
        position absolute
        right 0
        top 0
        bottom 0
        margin auto
      .reqCode
        height 32px
        color red
        font-size 12px
        background #fff
        border 1px solid red
        padding 0 8px
        border-radius 4px
        position absolute
        right 0
        top 0
        bottom 0
        margin auto
  .pwd
    font-size 14px
    color #666
    background #fff
    text-align right
    padding 8px 5%
  .loginCommit
    width 100%
    background #fff
    height 44px
    .loginbtn
      display block
      width 90%
      height 90%
      background lightgreen
      margin 0 auto
      outline 0
      border 0
      font-size 16px
      color #fff
      border-radius 6px

  .coperation
    width 100%
    height 240px
    background #fff
    position relative
    .coperation-conotainer
      position absolute
      bottom 0
      width 100%
      padding-bottom 20px
      box-sizing border-box
      .coperation-text
        text-align center
        margin 0 auto 20px
        color #d9d9d9
      .coperation-img
        padding 0 3%
        span
          img
            width 58px
            height 58px
            margin 0 25px

</style>
