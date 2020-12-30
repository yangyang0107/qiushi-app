<template>
  <view>
    <!-- 背景图片 -->
    <view class="py-4">
      <image mode="widthFix" src="/static/common/loginhead.png" class="log_img" />
      <r-icon iname="icon-guanbi" icolor="#000" isize="40" class="log_close" @r-tap="toMine"/>
    </view>
    <!-- 表单组件 -->
    <r-form />
    <!-- 第三方登录组件 -->
    <r-third />
  </view>
</template>

<script>
// 引入字体图标
import rIcon from "../../components/rIcon";
// 引入表单组件
import rForm from "../../components/login/rForm";
// 引入第三方登录组件
import rThird from "../../components/login/rThird";
// 
import { switchTab } from '../../utils/asyncUNI';
export default {
  components: { rIcon, rForm, rThird },
  data() {
    return {
      statusBarHeight: this.$statusBarHeight
    };
  },
  onLoad() {},
  methods: {
    toMine(){
        switchTab({url:'/pages/mine/mine'});
    }
  }
};
</script>

<style scoped>
.log_close {
  position: absolute;
  top: 55rpx;
  left: 10rpx;
  font-weight: bold;
}
.log_img {
  width: 100%;
}
</style>
