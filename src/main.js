import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from '@/router'
// 引入清除默认样式
import '@/style/reset.css'

const app = createApp(App)

// 安装router
app.use(router)


app.mount('#app')
