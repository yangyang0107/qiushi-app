<template>
  <view>
    <view :style="{height:`${$statusBarHeight}px`}"></view>
    <view class="flex justify-between align-center py-2 px-2">
      <r-icon iname="icon-fanhui" icolor="#000" isize="45" @r-tap="back"/>
      <view class="font-weight-bold">浏览历史</view>
      <r-icon iname="icon-gengduo1" icolor="#000" isize="45" @r-tap="clearHistory"/>
    </view>

    <view
      style="border-radius:50%;width:300rpx;height:300rpx;margin:30rpx auto;"
      class="bg-hover-success"
    >
      <image
        style="width:300rpx;height:300rpx;border-radius:50%"
        src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2F5b0988e595225.cdn.sohucs.com%2Fimages%2F20180602%2F93eb9b9d9ac14c1887addcf7838af58e.jpeg&refer=http%3A%2F%2F5b0988e595225.cdn.sohucs.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1611902235&t=4cb8e5bed5b4d8a9226a76ba4b7c7e81"
      />
    </view>
  </view>
</template>

<script>
// icon组件
import rIcon from "../../components/rIcon";
// asyncUNI 
import { showModal,showToast } from '../../utils/asyncUNI';
export default {
  components: { rIcon },
  data() {
    return {};
  },
  onLoad() {},
  methods: {
    // 返回上一页
     back() {
      uni.navigateBack({
        delta: 1
      });
    },
    // 清除历史记录
   async clearHistory(){
      let result = await showModal({content:'是否要清除历史记录？'})
      if(result.confirm){
        showToast({title:'清除成功'})
      }else{
        showToast({title:'取消'})
      }
    }
  }
};
</script>

<style scoped>
</style>
