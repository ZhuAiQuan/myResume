<script setup lang="ts">
import { onMounted, reactive, computed } from 'vue';
import { browserRedirect } from '@/utils';
import { routes } from '@/router';
import { useRoute, useRouter, RouteRecordRaw } from 'vue-router'
import fpage from 'assets/images/fpage_btn.png';

interface RouterType {
  list: RouteRecordRaw[]
}
onMounted(() => {
  router.list = routes.filter(item => item.component)
  if (browserRedirect()) {
    // 注册touch触摸事件
  } else {
    // pc端 监听鼠标滚动事件
  }
})
const moves = reactive({
  y: 0,
  move: 0
})
const router: RouterType = reactive({
  list: []
})
const route = useRoute();
const routerVm = useRouter();

const onTouchStart = (e: TouchEvent) => {
  moves.y = e.changedTouches[0].clientY
}
const onTouchEnd = () => {
  const canGoNext = moves.y - moves.move >= document.body.offsetHeight * 0.1 || (moves.y - moves.move) * -1 > document.body.offsetHeight * 0.1;
  const state = moves.y - moves.move > 0;
  moves.y = 0;
  if (!moves.move || !canGoNext) {
    moves.move = 0;
    return
  }
  moves.move = 0;
  
  if (state) {
    for(let i = 0; i < router.list.length; i++) {
      if (router.list[i].path === route.path && router.list[i+1]) {
        routerVm.push(router.list[i+1].path)
        return
      }
    }
  } else {
    for(let i = router.list.length - 1; i > 0; i--) {
      if (router.list[i].path === route.path && router.list[i-1]) {
        routerVm.push(router.list[i-1].path)
        return
      }
    }
  }
}
const onTouchMove = (e: TouchEvent) => {
  moves.move = e.changedTouches[0].clientY;
}
const toFirstPage = () => {
  routerVm.push('/')
}
const move = computed(() => {
  if (moves.move) {
    return `${moves.move - moves.y}px`
  } else return 0
})
const firstPage = computed(() => {
  if (router.list.length && route.path === '/') return true
  else return false
})
const lastPage = computed(() => {
  return router.list.length && router.list[router.list.length - 1].path === route.path
})
</script>

<template>
  <div id="container" @touchstart.stop="onTouchStart" @touchend.stop="onTouchEnd" @touchmove="onTouchMove" :style="{ top: `${move}` }" :class="{'move-class': moves.move}">
    <router-view></router-view>
    <div class="next" v-if="browserRedirect() && !lastPage">
      <img :src="fpage" alt="">
    </div>
    <div class="up" v-if="!firstPage" @click="toFirstPage">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-arrow_up_fill"></use>
      </svg>
    </div>
  </div>
</template>

<style lang="less" scoped>
#container {
  width: 100vw;
  height: 100vh;
  position: absolute;
  -webkit-overflow-scrolling: touch;
  .next {
    position: fixed;
    width: 100%;
    bottom: 50px;
    text-align: center;
    animation: toDown 2s linear;
    animation-fill-mode: both;
    animation-iteration-count: infinite;
    z-index: 999;
    img {
      width: 20px;
    }
  }
  .up {
    position: absolute;
    bottom: 15px;
    right: 15px;
    width: 30px;
    height: 30px;
    border: 1px solid #ccc;
    border-radius: 8px;
    text-align: center;
    line-height: 30px;
  }
}
.move-class {
  transition: all .16s linear;
  &::before {
    content: '';
    position: absolute;
    top: -30vh;
    width: 100%;
    height: 30vh;
    background: yellow;
  }
  &::after {
    content: '';
    position: absolute;
    bottom: -30vh;
    width: 100%;
    height: 30vh;
    background: green;
  }
}
</style>

<style lang="less">
@keyframes toDown {
  0% {
    bottom: 50px;
    opacity: 1;
  }
  100% {
    bottom: 10px;
    opacity: 0;
  }
}
</style>
