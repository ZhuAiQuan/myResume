<!--
 * @Description: xingp，yyds
 * @Author: zaq
 * @Date: 2021-12-29 15:27:50
 * @LastEditTime: 2021-12-29 15:48:57
 * @LastEditors: zaq
 * @Reference: 
-->
<template>
  <div></div>
</template>

<script lang="ts" setup>
import { defineProps, PropType } from 'vue';
import type { UserInfo } from 'types/user'
const props = defineProps({
  userInfo: {
    type: Object as PropType<UserInfo>,
    default: () => ({
      name: '',
      both: '',
      edu: '',
      workTime: 0
    })
  }
})
</script>

<style lang="less" scoped>

</style>
