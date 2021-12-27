<script setup lang="ts">
import { onMounted, reactive, computed } from 'vue';
import { browserRedirect } from 'utils';
import { routes } from 'router';
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
const onTouchEnd = e => {
  const state = moves.y - moves.move > 0;
  moves.y = 0;
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
const move = computed(() => {
  if (moves.move) {
    return `${moves.move - moves.y}px`
  } else return 0
})
</script>

<template>
  <div id="container" @touchstart.stop="onTouchStart" @touchend.stop="onTouchEnd" @touchmove="onTouchMove" :style="{ top: `${move}` }" :class="{'move-class': moves.move}">
    <router-view></router-view>
    <div class="next" v-if="browserRedirect()">
      <img :src="fpage" alt="">
    </div>
  </div>
</template>

<style lang="less" scoped>
#container {
  width: 100vw;
  height: 100vh;
  position: absolute;
  background: violet;
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
