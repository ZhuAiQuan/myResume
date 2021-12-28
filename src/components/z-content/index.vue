<!--
 * @Description: xingp，yyds
 * @Author: zaq
 * @Date: 2021-12-28 14:01:29
 * @LastEditTime: 2021-12-28 14:21:20
 * @LastEditors: zaq
 * @Reference: 
-->
<template>
  <div class="z-content">
    <div class="title">
      <span>{{ title }}</span>
      <div class="bg"></div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: '',
  setup() {
    return {}
  },
  props: {
    title: {
      type: String,
      default: '标题'
    }
  }
})
</script>

<style lang="less" scoped>
.z-content {
  background-color: #fff;
  border-radius: 16px;
  margin-top: 20px;
  // overflow: hidden;
  
  .title {
    position: relative;
    font-size: 20px;
    transform: skewX(-20deg);
    span {
      position: relative;
      z-index: 3;
      top: -10px;
    }
    .bg {
      position: absolute;
      left: 0;
      top: 0;
      height: 100%;
      width: 100%;
      background-color: turquoise;
      z-index: 1;
      animation: moves 2s linear;
      border-radius: 16px;
    }
  }
}
</style>

<style lang="less">
@keyframes moves {
  0% {
    border-top-right-radius: 16px;
    border-bottom-right-radius: 16px;
    width: 0;
  }
  100% {
    width: 100%;
  }
}
</style>
