<!--
 * @Description: xingp，yyds
 * @Author: zaq
 * @Date: 2021-12-28 13:59:04
 * @LastEditTime: 2021-12-29 15:42:20
 * @LastEditors: zaq
 * @Reference: 
-->
<template>
  <div class="content">
    <ZContent title="个人信息">
      <template #ctx>
        
      </template>
    </ZContent>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue';
import ZContent from '@/components/z-content/index.vue';
import type { UserInfo } from 'types/user'

export default defineComponent({
  name: '',
  setup() {
    const userInfo: UserInfo = reactive({
      name: '丁总',
      both: '2013-12-12',
      workTime: 5,
      edu: '北京大学'
    })
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
