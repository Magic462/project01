import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
// import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
// import router from './router'; // 引入 router

const app = createApp(App)//创建根实例
// app.use(ElementPlus, { size: 'small', zIndex: 3000 })
app.use(router).use(pinia).mount('#app')//插件安装和视图挂载
