<template>
  <!-- 头部信息 -->
  <view>
    <!-- header -->
    <view class="flex justify-between mx-2 align-center my-2">
      <view></view>
      <view class="font-weight-bold ml-5">我的</view>
      <r-icon iname="icon-gengduo1" icolor="#000" isize="45" @r-tap="toSet" />
    </view>
    <!-- main 登录状态 -->
    <view class="flex justify-between align-center mx-4" v-if="$store.state.token">
      <image
        src="https://ftp.bmp.ovh/imgs/2020/12/35e53c05630bf6f5.jpg"
        style="width:100rpx;height:100rpx;border-radius:50%;"
      />
      <view style="width:80%" class="px-2">
        <view class="font-weight-bold my-1 font-lg">{{ info.username }}</view>
        <view style="color:#8A8985;">
          <text>总帖子 1</text>
          <text>今日发帖 0</text>
        </view>
      </view>
      <r-icon iname="icon-jinru" icolor="#000" isize="40" />
    </view>

    <!-- main 未登录状态 -->
    <view class="flex flex-column justify-between align-center mx-4" v-else>
      <view class="font mb-5">登录社区，体验更多功能</view>
      <view class="font mt-5" style="color:#6c757d;" @tap="toLogin">
        账号/邮箱/手机登录
        <r-icon iname="icon-jinru" />
      </view>
    </view>
    <!-- footer -->
    <view class="flex w-100 justify-around my-5">
      <view class="text-center">
        <view class="font-weight-bold my-1 font-lg">1</view>
        <view style="color:#5F5F59;" class="font-sm">帖子</view>
      </view>
      <view class="text-center">
        <view class="font-weight-bold my-1 font-lg">1</view>
        <view style="color:#5F5F59;" class="font-sm">动态</view>
      </view>
      <view class="text-center">
        <view class="font-weight-bold my-1 font-lg">2</view>
        <view style="color:#5F5F59;" class="font-sm">评论</view>
      </view>
      <view class="text-center">
        <view class="font-weight-bold my-1 font-lg">0</view>
        <view style="color:#5F5F59;" class="font-sm">粉丝</view>
      </view>
    </view>
  </view>
</template>

<script>
// 引入字体图标组件
import rIcon from "../../rIcon";
// asyncUNI
import { redirectTo, navigateTo } from "../../../utils/asyncUNI";
export default {
  components: { rIcon },
  props: [
    'info'
  ],
  data() {
    return {};
  },
  onLoad() {
console.log(this.$store.state.token);

  },
  methods: {
    //   去设置
    toSet() {
      navigateTo({ url: "/pages/set/set" });
    },
    // 去登录
    toLogin() {
      redirectTo({ url: "/pages/login/index" });
    }
  }
};
</script>

<style scoped>
</style>
