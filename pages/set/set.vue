<template>
  <view>
    <r-title>
      <template v-slot:title>设置</template>
    </r-title>
    <!-- 设置列表 -->
    <view>
      <view :class="rclass" :style="rstyle" v-if="$store.state.token">
        <text class="font">账号与安全</text>
        <r-icon iname="icon-jinru" isize="30" />
      </view>
      <view :class="rclass" :style="rstyle" v-if="$store.state.token">
        <text class="font">资料编辑</text>
        <r-icon iname="icon-jinru" isize="30" />
      </view>
      <view :class="rclass" :style="rstyle">
        <text class="font">清除缓存</text>
        <text>{{ $store.state.token ? '1.00KB':'0.00KB' }}</text>
      </view>
      <view :class="rclass" :style="rstyle" v-if="$store.state.token">
        <text class="font">意见反馈</text>
        <r-icon iname="icon-jinru" isize="30" />
      </view>
      <view :class="rclass" :style="rstyle">
        <text class="font">关于社区</text>
        <r-icon iname="icon-jinru" isize="30" />
      </view>
    </view>
    <!-- 退出登录 -->
    <view class="p-3" v-if="$store.state.token">
      <button style="background:teal;color:#fff;" @tap="layout">退出登录</button>
    </view>
  </view>
</template>

<script>
// 引入字体图标组件
import rIcon from "../../components/rIcon";
// 顶部标题组件
import rTitle from "../../components/set/rTitle";
// 请求接口配置文件
import api from "../../model/login";
// 确认提示框配置文件
import { showModal, switchTab } from "../../utils/asyncUNI";
// vuex 清除数据存储
import { clear } from "../../utils/auth";
export default {
  components: { rIcon, rTitle },
  data() {
    return {
      rclass: "py-4 mx-2 px-2 flex justify-between align-center ",
      rstyle: "border-bottom:1px solid #F4F4F4;"
    };
  },
  onLoad() {},
  methods: {
    // 退出登录
    async layout() {
      let result = await showModal({ content: "是否要退出登录" });
      if (result.confirm) {
        let res = await api.logout();
        clear();
        this.$store.commit('settoken',null);
        this.$store.commit('setinfo',null);
        switchTab({url: "/pages/mine/mine"});
      }
    }
  }
};
</script>

<style scoped>
</style>
