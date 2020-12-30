<template>
  <view>
    <view :style="{height:`${$statusBarHeight}px`}" style="background:teal;"></view>
    <view class="flex mx-1 align-center justify-around mb-2">
      <view
        class="py-2 rounded flex align-center justify-center font"
        style="background:#F5F4F2;width:85%;"
      >
        <r-icon iname="icon-sousuo" icolor="#62615C" class="font-weight-bold mx-2" />搜索帖子
      </view>
      <r-icon iname="icon-bianji1" icolor="#62615C" class="font-weight-bold" isize="60" />
    </view>
  </view>
</template>

<script>
// 字体图标组件
import rIcon from "../../components/rIcon";
// 引入请求接口组件
// import { } from '../../model/home';
export default {
  components: {
    rIcon
  },
  data() {
    return {};
  },
  onLoad() {},
  methods: {}
};
</script>

<style>
</style>
