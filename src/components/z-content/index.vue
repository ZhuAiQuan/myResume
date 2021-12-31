<!--
 * @Description: xingp，yyds
 * @Author: zaq
 * @Date: 2021-12-28 14:01:29
 * @LastEditTime: 2021-12-29 14:11:17
 * @LastEditors: zaq
 * @Reference: 
-->
<template>
  <div class="z-content">
    <div class="title">
      <span>{{ title }}</span>
      <!-- <div class="bg"></div> -->
    </div>
    <div class="ctx">
      <slot name="ctx"></slot>
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
  padding: 16px 0;
  // overflow: hidden;
  animation: shake-shadows 4s ease-in-out infinite alternate;
  .title {
    position: relative;
    font-size: 18px;
    // transform: skewX(-20deg);
    text-align: center;
    span {
      position: relative;
      z-index: 3;
      background-color: #fff;
      padding: 0 10px;
      // border: 1px solid rgb(79, 238, 16);
      // top: -10px;
      // animation: title-boder 2s linear 1s infinite alternate-reverse;
    }
    .bg {
      position: absolute;
      left: 0;
      top: 0;
      height: 2px;
      width: 0;
      background-color: turquoise;
      z-index: 1;
      // animation: moves 2s linear;
      border-radius: 16px;
    }
    &::after {
      content: '';
      position: absolute;
      width: 0;
      left: 50%;
      top: 15px;
      height: 2px;
      background-color: turquoise;
      animation: add-width 2s ease-out infinite alternate;
    }
    &::before {
      content: '';
      position: absolute;
      width: 0;
      left: 50%;
      top: 15px;
      height: 2px;
      background-color: turquoise;
      animation: to-left-move 2s ease-out infinite alternate;
    }
  }
  .ctx {
    min-height: 30px;
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
@keyframes shake-shadows {
  0% {
    box-shadow: 0 0 4px #F56C6C;
  }
  16% {
    box-shadow: 0 0 4px orangered;
  }
  32% {
    box-shadow: 0 0 4px rgb(245, 245, 7);
  }
  48% {
    box-shadow: 0 0 4px greenyellow;
  }
  64% {
    box-shadow: 0 0 4px rgb(14, 228, 146);
  }
  80% {
    box-shadow: 0 0 4px rgb(15, 35, 218);
  }
  100% {
    box-shadow: 0 0 4px rgb(191, 24, 224);
  }
}
@keyframes add-width {
  0% {
    width: 0;
  }
  100% {
    width: 50%;
  }
}
@keyframes to-left-move {
  0% {
    left: 50%;
    width: 0;
  }
  100% {
    left: 0;
    width: 50%;
  }
}
@keyframes title-boder {
  0%, 100% {
    border-top: none;
    border-bottom: 1px solid;
  }
  25% {
    border-left: 1px solid;
    border-right: none;
  }
  50% {
    border-top: 1px solid;
    border-bottom: none;
  }
  75% {
    border-right: 1px solid;
    border-left: none;
  }
}
</style>
