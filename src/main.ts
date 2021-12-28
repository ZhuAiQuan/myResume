import { createApp } from 'vue'
import App from './App.vue'
import router from '@/router'
import '@/styles/index.less'
import 'assets/icons/iconfont.js';

createApp(App).use(router).mount('#app')
