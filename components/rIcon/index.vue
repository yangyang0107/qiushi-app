<template>
  <text class="iconfont" :class="iname" :style="{fontSize:`${isize}rpx`,color:icolor}"></text>
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
      default: ""
    },
    isize: {
      type: String,
      default: 30
    }
  },
  components: {},
  data() {
    return {};
  },
  onLoad() {},
  methods: {}
};
</script>

<style scoped>
</style>
