import { createApp } from 'vue'
import ElementPlus from 'element-plus'
// import './styles/variables.module.scss'
import 'element-plus/dist/index.css'
import './assets/css/style.scss'
import './assets/css/common.scss'
import router from './router/index'
import App from './App.vue'

const app = createApp(App)
    .use(router)
    .use(ElementPlus)
    .mount('#app')