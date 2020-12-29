<template>
  <view class="px-4">
    <view class="border-bottom flex py-2 align-center">
      <text class="font-weight-bold" v-show="!logFlag">+86</text>
      <input
        v-model="query.phone"
        type="text"
        placeholder="输入手机号码"
        class="pl-2 font-weight-bold inp"
        v-show="!logFlag"
      />
      <input type="text" placeholder="昵称/手机号/邮箱" class="font-weight-bold inp" v-show="logFlag" />
    </view>
    <view class="border-bottom flex py-2 justify-between align-center">
      <input
        v-model="query.code"
        type="text"
        placeholder="请输入验证码"
        class="inp font-weight-bold"
        v-show="!logFlag"
      />
      <view
        class="log_code rounded"
        v-show="!logFlag"
        @tap="getPhoneCode"
      >{{codeFlag?codeNum:'获取验证码'}}</view>
      <input type="text" placeholder="请输入密码" class="inp font-weight-bold" v-show="logFlag" />
      <view style="fontSize:22rpx; width:140rpx;" class="pt-1" v-show="logFlag">忘记密码？</view>
    </view>
    <button
      type="primary"
      class="border my-3 log_btn"
      @tap="register"
      :disabled="query.phone !='' && query.code != '' ? false :true"
      :class="[query.phone !='' && query.code != '' ? 'btn':'btn-color']"
    >登录</button>
    <view class="text-center w-100 my-5 flex align-center justify-center" @tap="logFlag=!logFlag">
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
export default {
  components: { rIcon },
  data() {
    return {
      logFlag: false,
      codeFlag: false,
      codeNum: 5,
      query: {
        phone: "",
        code: ""
      }
    };
  },
  onLoad() {},
  methods: {
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
        console.log(222);
      }
    },
    // 获取验证码
    async getPhoneCode() {
      this.codeFlag = true;
      // 调用验证规格函数
      if (this.rules() == false) {
        return false;
      }
      // // 13673802120
      var timer = setInterval(() => {
        this.codeNum -= 1;
        if (this.codeNum < 0) {
          clearInterval(timer);
          this.codeNum = 5;
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
        // let res = await api.phonelogin(this.query);
        // console.log(res);
      } else {
        // 账号密码登录
        console.log("账号密码登录");
      }
    }
  }
};
</script>

<style scoped>
.log_code {
  font-size: 22rpx;
  color: #979797;
  width: 140rpx;
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

