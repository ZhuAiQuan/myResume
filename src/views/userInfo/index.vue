<!--
 * @Description: xingp，yyds
 * @Author: zaq
 * @Date: 2021-12-28 13:59:04
 * @LastEditTime: 2021-12-28 15:46:05
 * @LastEditors: zaq
 * @Reference: 
-->
<template>
  <div class="content">
    <ZContent title="个人信息"></ZContent>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import ZContent from '@/components/z-content'

export default defineComponent({
  name: '',
  setup() {
    return {}
  },
  components: {
    ZContent
  }
})
</script>

<style lang="less" scoped>
.content {
  // background-color: #fff;
  height: 100%;
  padding: 10px;
}
</style>
