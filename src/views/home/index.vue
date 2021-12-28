<!--
 * @Description: xingp，yyds
 * @Author: zaq
 * @Date: 2021-12-27 09:58:49
 * @LastEditTime: 2021-12-28 13:28:33
 * @LastEditors: zaq
 * @Reference: 
-->
<template>
  <div class="content">
    <div class="top" :class="{ loading: firstLoading }"></div>
    <div class="bottom" :class="{ 'bottom-loading': firstLoading }"></div>
    <div class="avatar">
      <img :src="avatar" alt="" />
    </div>
    <div class="name">
      {{ info.name }}
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted, reactive } from "vue";
import avatar from "assets/images/avatar.jpg";

const firstLoading = ref(false);
const info = reactive({
  title: "",
  name: "丁总的个人简历",
});
onMounted(() => {
  firstLoading.value = true;
});
</script>


<style lang="less" scoped>
.content {
  width: 100%;
  height: 100%;
  overflow: hidden;
  position: relative;
  padding: 5px;
  .top {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 50%;
    background-color: #fff;
    // background-image: linear-gradient(to bottom, rgb(189, 159, 159), red);
    border-bottom: 2px solid #fff;
  }
  .bottom {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 50%;
    background-color: #fff;
    // background-color: hotpink;
    // background-image: linear-gradient(to bottom,hotpink, rgb(175, 123, 153));
    border-top: 2px solid #fff;
  }
  .loading {
    animation-name: loading-ani;
  }
  .bottom-loading {
    animation-name: btm-loading-ani;
  }
  .bottom,
  .top {
    animation-duration: 1s;
  }
  .avatar {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 0;
    height: 0;
    border-radius: 50%;
    background-color: rgb(28, 173, 240);
    z-index: 9;
    animation: show-avatar 1s ease-out 1s forwards;
    overflow: hidden;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .name {
    position: absolute;
    z-index: 9;
    top: calc(50% + 70px);
    width: calc(100% - 10px);
    text-align: center;
    animation: 2.5s linear alternate infinite text-blinking;
    font-size: 20px;
  }
}
</style>

<style lang="less">
@keyframes loading-ani {
  0% {
    transform: translate3d(0, -50%, 0);
    opacity: 0;
  }
  100% {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
}
@keyframes btm-loading-ani {
  0% {
    transform: translate3d(0, 50%, 0);
    opacity: 0;
  }
  100% {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
}
@keyframes show-avatar {
  0% {
    opacity: 0;
    border-radius: 0;
    width: 0;
    height: 0;
  }
  100% {
    opacity: 1;
    width: 100px;
    height: 100px;
    filter: drop-shadow(2px 4px 6px black);
  }
}
@keyframes text-blinking {
  0%, 84%, 86%, 100% {
    text-shadow: -3.2px -3.2px 16px #fff, 3.2px 3.2px 16px #fff,
      0 0 16px hsl(120deg,100%,50%), 0 0 32px hsl(120deg,100%,50%),
      0 0 48px hsl(120deg,100%,50%), 0 0 64px hsl(120deg,100%,50%),
      0 0 80px hsl(120deg,100%,50%);
  }
  85% {
    text-shadow: none;
  }
}
</style>