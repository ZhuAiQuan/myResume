/*
 * @Description: xingp，yyds
 * @Author: zaq
 * @Date: 2021-12-27 10:00:00
 * @LastEditTime: 2021-12-27 14:01:47
 * @LastEditors: zaq
 * @Reference: 
 */
import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import { defineAsyncComponent } from 'vue'

export const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: defineAsyncComponent(() => import('views/home/index.vue')),
  },
  {
    path: '/about',
    component: defineAsyncComponent(() => import('views/about/index.vue'))
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: '/'
  }
];

export default createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})