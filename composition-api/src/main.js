import { createApp } from 'vue'

import App from './App.vue'
import router from './router'
import store from './store'



import './assets/tailwind.css'
createApp(App).use(store).use(router).use(require("moment")).mount('#app')
