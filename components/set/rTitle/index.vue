<template>
  <view>
    <view :style="{height:`${$statusBarHeight}px`}"></view>
    <view class="flex justify-between mx-2 align-center py-2" style="border-bottom:1px solid #F4F4F4;">
      <r-icon iname="icon-fanhui" icolor="#000" isize="45" @r-tap="back" />
      <text class="font-weight-bold mr-5">
        <slot name="title"></slot>
      </text>
      <view></view>
    </view>
  </view>
</template>

<script>
// 引入字体图标组件
import rIcon from "../../rIcon";
export default {
  components: { rIcon },
  data() {
    return {};
  },
  onLoad() {},
  methods: {
    back() {
      uni.navigateBack({
        delta: 1
      });
    }
  }
};
</script>

<style scoped>
</style>
