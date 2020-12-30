<template>
  <view class="px-4">
    <!--  -->
    <view class="border-bottom flex py-2 align-center">
      <!-- 手机号登录 -->
      <text class="font-weight-bold" v-show="!logFlag">+86</text>
      <input
        v-model="query.phone"
        type="text"
        placeholder="输入手机号码"
        class="pl-2 font-weight-bold inp"
        v-show="!logFlag"
      />
      <!-- 昵称/手机号/邮箱登录 -->
      <input
        v-model="uquery.username"
        type="text"
        placeholder="昵称/手机号/邮箱"
        class="font-weight-bold inp"
        v-show="logFlag"
      />
    </view>

    <view class="border-bottom flex py-2 justify-between align-center">
      <!-- 验证码输入框 -->
      <input
        v-model="query.code"
        type="text"
        placeholder="请输入验证码"
        class="inp font-weight-bold"
        v-show="!logFlag"
      />
      <button
        class="log_code rounded"
        v-show="!logFlag"
        @tap="getPhoneCode"
        :disabled="codeFlag?true:false"
      >{{codeFlag?codeNum:'获取验证码'}}</button>
      <!-- 密码输入框 -->
      <input
        v-model="uquery.password"
        type="text"
        placeholder="请输入密码"
        class="inp font-weight-bold"
        v-show="logFlag"
      />
      <view style="fontSize:22rpx; width:140rpx;" class="pt-1" v-show="logFlag">忘记密码？</view>
    </view>
    <!-- 登录按钮 -->
    <button
      type="primary"
      class="border my-3 log_btn"
      @tap="register"
      :disabled="(query.phone !='' && query.code != '') || (uquery.username != '' && uquery.password != '') ? false :true"
      :class="[(query.phone !='' && query.code != '') || (uquery.username != '' && uquery.password != '') ? 'btn':'btn-color']"
    >登录</button>


    <view class="text-center w-100 my-5 flex align-center justify-center" @tap="changeLogflag">
      <text style="fontSize:24rpx;color:#484848;" v-show="!logFlag">账号密码登录</text>
      <text style="fontSize:24rpx;color:#484848;" v-show="logFlag">验证码登录</text>
      <r-icon iname="icon-jinru" icolor="#DADADA" isize="30" />
    </view>
  </view>
</template>


<script>
// 引入字体图标
import rIcon from "../../rIcon";
// 引入提示消息组件
import { showToast } from "../../../utils/asyncUNI";
// 引入接口配置文件
import api from "../../../model/login";
// 引入数组存储配置文件
import { setToken, setInfo } from "../../../utils/auth";
export default {
  components: { rIcon },
  data() {
    return {
      logFlag: true,
      codeFlag: false,
      codeNum: 10,
      // 手机号/验证码
      query: {
        phone: "",
        code: ""
      },
      // 账号/密码
      uquery: {
        username: "",
        password: ""
      }
    };
  },
  onLoad() {},
  methods: {
    // 登录切换
    changeLogflag(){
      this.logFlag = !this.logFlag;
      if(this.logFlag){
        this.query.phone = '';
        this.query.code = '';
      }else{
        this.uquery.username = '';
        this.uquery.password = ''
      }
    },
    // 表单验证
    rules() {
      if (!this.logFlag) {
        if (this.query.phone == "") {
          showToast({ title: "请输入手机号!" });
          return false;
        } else if (this.query.phone.length != 11) {
          showToast({ title: "11位哦!" });
          return false;
        }
      } else {
         return false;
      }
    },
    // 获取验证码
    async getPhoneCode() {
      // 调用验证规格函数
      if (this.rules() == false) {
        return false;
      }
      // 13673802120
      this.codeFlag = true;
      var timer = setInterval(() => {
        this.codeNum -= 1;
        if (this.codeNum < 1) {
          clearInterval(timer);
          this.codeNum = 10;
          this.codeFlag = false;
        }
      }, 1000);
      let phone = Number(this.query.phone);
      let res = await api.getCode(phone);
      if (res.errorCode == false) {
        // let code = Number(res.msg.slice(4,res.msg.length));
        showToast({ title: res.msg, duration: 5000 });
      } else {
        showToast({ title: res.msg });
      }
    },
    // 登录
    async register() {
      // 判断是什么操作登录
      if (!this.logFlag) {
        console.log("手机号登录");
        if (this.rules() == false) {
          return false;
        }
        //手机号登录
        let res = await api.phonelogin(this.query);
        if ((res.msg == "登录成功")) {
         
          this.$store.commit('settoken',res.data.token)
          this.$store.commit('setinfo',res.data)
          uni.switchTab({
            url: "/pages/mine/mine"
          });
        }else{
          showToast({ title: res.msg });
        }
      } else {
        // 账号密码登录
        console.log(this.uquery);
        
        let res = await api.accountlogin(this.uquery);
        console.log(res);
        if ((res.msg == "登录成功")) {
          // setToken(res.data.token);
          // setInfo(res.data);
          uni.switchTab({
            url: "/pages/mine/mine"
          });
        }else{
          showToast({ title: res.msg });
        }
      }
    }
  }
};
</script>

<style scoped>
.log_code {
  font-size: 22rpx;
  color: #979797;
  width: 160rpx;
  text-align: center;
  height: 55rpx;
  line-height: 55rpx;
  background: #f4f4f4;
}
.log_btn {
  text-align: center;
  height: 80rpx;
  line-height: 80rpx;
  border-radius: 25px;
}
.inp {
  font-size: 30rpx;
  color: #969696;
}
.btn-color {
  background: #00b9b9 !important;
  color: #d4d4d4;
}
.btn {
  background: teal !important;
  color: #fff;
}
</style>

