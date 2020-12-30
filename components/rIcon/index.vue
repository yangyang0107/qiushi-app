<template>
  <text class="iconfont" :class="iname" :style="{fontSize:`${isize}rpx`,color:icolor}" @tap="rTap"></text>
</template>

<script>
export default {
  props: {
    iname: {
      type: String,
      default: ""
    },
    icolor: {
      type: String,
      default: "#CBCBCB"
    },
    isize: {
      type: String,
      default: '30'
    }
  },
  components: {},
  data() {
    return {};
  },
  onLoad() {},
  methods: {
    rTap(){
      this.$emit("r-tap");
    }
  }
};
</script>

<style scoped>
</style>
