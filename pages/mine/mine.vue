<template>
  <view>
    <view :style="{height:`${$statusBarHeight}px`,background:'#008800'}"></view>
    <!-- 用户信息 -->
    <r-info :info="info"></r-info>
    <!-- 广告 -->
    <view class="mx-4 my-3" style="height:200rpx;">
      <image
        style="width:100%;height:100%"
        class="rounded"
        src="https://ftp.bmp.ovh/imgs/2020/12/b9417317d11ebb6d.png"
      />
    </view>
    <!-- 功能栏 -->
    <view class="my-5 mx-4">
      <view class="flex justify-between align-center py-3" @tap="toHistory">
        <r-icon iname="icon-liulan" icolor="#000" isize="45" />
        <view style="width:75%;">浏览历史</view>
        <r-icon iname="icon-jinru" icolor="#9E9B96" isize="45" />
      </view>
      <view class="flex justify-between align-center py-3">
        <r-icon iname="icon-huiyuanvip" icolor="#000" isize="45" />
        <view style="width:75%;">社区认证</view>
        <r-icon iname="icon-jinru" icolor="#9E9B96" isize="45" />
      </view>

      <view class="flex justify-between align-center py-3">
        <r-icon iname="icon-keyboard" icolor="#000" isize="45" />
        <view style="width:75%;">审核帖子</view>
        <r-icon iname="icon-jinru" icolor="#9E9B96" isize="45" />
      </view>
    </view>
  </view>
</template>

<script>
// 引入字体图标组件
import rIcon from "../../components/rIcon";
// 用户信息组件
import rInfo from "../../components/mine/rInfo";
// 跳转页面
import { navigateTo } from '../../utils/asyncUNI';
export default {
  components: { rIcon, rInfo },
  data() {
    return {
      info:this.$store.state.info?this.$store.state.info:{}
    };
  },
  onLoad() {
  
  },
  methods: {
    // 浏览历史
    toHistory(){
      navigateTo({url:'/pages/history/history'})
    }
  }
};
</script>

<style scoped>
</style>
