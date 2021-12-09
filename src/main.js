import { createApp } from 'vue/dist/vue.esm-bundler'

//import VueRouter from 'vue-router'

import App from './App.vue'
import router from './router'

createApp(App)
    .use(router)
    .mount('#app')

router.beforeEach((to, from, next) => {
    document.getElementById('app').style.opacity = '0';
    setTimeout(() => {
        next()
    }, 200)
})

router.afterEach(() => {
    setTimeout(() => {
        document.getElementById('app').style.opacity = '1';
    }, 1000)
})