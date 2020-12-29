<template>
  <view>
    <view class="flex flex-column align-center">
      <view style="color:#969696;fontSize:20rpx;">———— 社交账号登录 ————</view>
      <view class="w-100 flex align-center justify-center my-5">
        <view class="third-party" style="background:#2AD19B">
          <r-icon iname="icon-weixin" icolor="#fff" isize="45" />
        </view>
        <view class="third-party mx-5" style="background:#2BAEFC">
          <r-icon iname="icon-QQ" icolor="#fff" isize="45" />
        </view>
        <view class="third-party" style="background:#FC772A">
          <r-icon iname="icon-xinlangweibo" icolor="#fff" isize="45" />
        </view>
      </view>
      <view style="color:#969696;fontSize:20rpx;">
        注册即代表您同意
        <text style="color:#41B6FC;">《你在教我做事用户协议》</text>
      </view>
    </view>
  </view>
</template>

<script>
// 引入字体图标
import rIcon from "../../rIcon";
export default {
  components: { rIcon },
  data() {
    return {};
  },
  onLoad() {},
  methods: {}
};
</script>

<style scoped>
.third-party {
  width: 100rpx;
  height: 100rpx;
  border-radius: 50%;
  text-align: center;
  line-height: 100rpx;
}
</style>
