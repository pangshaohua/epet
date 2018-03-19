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
        <div class="normal-login" >
            <span class="login-text" @click="handleLogin(true)">普通登录</span>
            <span class="icon-bottom" v-show="isShow">
              <i class="iconfont icon-sanjiaoxing-up"></i>
            </span>
        </div>
        <div class="mobile-login" >
            <span class="login-text" @click="handleLogin(false)">手机动态密码登录</span>
            <span class="icon-bottom" v-show="!isShow">
              <i class="iconfont icon-sanjiaoxing-up"></i>
            </span>
        </div>
      </div>
    </div>
    <form @submit.prevent="login" class="submitMsg">
      <div class="formContainer" v-show="isShow">
        <ul class="formList">
          <li class="form-item">
            <span class="form-icon">
              <i class="iconfont icon-icon--"></i>
            </span>
            <input class="form-input" type="text" maxlength="11" placeholder="已注册的手机号"
                   v-model="phone">
          </li>
          <li class="form-item">
            <span class="form-icon">
              <i class="iconfont icon-mima"></i>
            </span>
            <input class="form-input" type="text" maxlength="6"
                   placeholder="请输入密码" v-model="code">
          </li>
        </ul>
      </div>
      <div class="formContainer" v-show="!isShow">
        <ul class="formList">
          <li class="form-item">
            <span class="form-icon">
              <i class="iconfont icon-icon--"></i>
            </span>
            <input class="form-input" type="text" maxlength="11" placeholder="已注册的手机号"
                   v-model="number">
          </li>
          <li class="form-item">
          <span class="form-icon">
            <i class="iconfont icon-mima"></i>
          </span>
            <input class="form-input" type="text" placeholder="请输入图片内容"
                   v-model="content">
            <div class="form-img">
              <img src="" alt="yanzheng">
            </div>
          </li>
          <li class="form-item">
            <span class="form-icon">
              <i class="iconfont icon-mima"></i>
            </span>
            <input class="form-input" type="text" maxlength="6" placeholder="动态密码" v-model="pwd">
            <button class="reqCode">
              获取动态验证码
            </button>
          </li>
        </ul>
      </div>
      <div class="pwd">
        <span>忘记密码？</span>
      </div>
      <input type="submit" class="loginbtn"  value="登录"/>
    </form>


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
    <AlertTip v-if="alertShow" :alertText="alertText" @closeTip="closeTip"/>
  </div>
</template>

<script>
  import AlertTip from '../../components/AlertTip/AlertTip.vue'
  export default{
    data(){
      return{
        isShow:true,
        phone:'',
        code:'',
        content:'',
        pwd:'',
        number:'',

        alertText: '', // 提示框文本
        alertShow: false, //是否显示提示框
      }
    },
    computed: {
      rightPhone () {// 以1开头的11数字
        return /^1\d{10}$/.test(this.phone)
      }
    },
    methods:{
      handleLogin(isShow){
        this.isShow=isShow
      },
      // 关闭提示框
      closeTip () {
        this.alertShow = false
      },
      login () {
        if(this.isShow) { // 短信登陆
          const { rightPhone,phone, code} = this
          // 表单验证
          if(! rightPhone) { // 手机号
            this.alertShow = true
            this.alertText = '请输入正确的手机号'
            return
          } else if(!/^\d{6}$/.test(code)) { // 验证码
            this.alertShow = true
            this.alertText = '请输入正确的密码'
            return
          }
         /* // 提交登陆请求
          result = await smsLogin({phone, code})*/

          // 处理返回
        } else {// 密码登陆
          const {number, pwd, content} = this
          // 表单验证
          if(!number) { // 用户名
            this.alertShow = true
            this.alertText = '请输入手机号'
            return
          } else if(!pwd) { // 密码
            this.alertShow = true
            this.alertText = '请输入密码'
            return
          } else if(!content) { // 图片验证码
            this.alertShow = true
            this.alertText = '请输入验证码'
            return
          }
         /* // 提交登陆请求
          result = await pwdLogin({name, pwd, captcha})*/

          // 处理返回
        }
      },
    },
    components:{
      AlertTip
    }
  }
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
  .submitMsg
    background #fff
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
    .loginbtn
      width 90%
      height 44px
      display block
      background lightgreen
      margin 0 auto
      outline 0
      border 0
      font-size 16px
      color #fff
      border-radius 6px
      box-sizing border-box
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
