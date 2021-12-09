import { createApp } from 'vue/dist/vue.esm-bundler'

//import VueRouter from 'vue-router'

import App from './App.vue'
import router from './router'

createApp(App)
    .use(router)
    .mount('#app')

router.beforeEach((to, from, next) => {
    document.querySelector('.loader').classList.toggle('active')
    setTimeout(() => {
        document.getElementById('router-container').style.opacity = '0'
        next()
    }, 500)
})

router.afterEach(() => {
    setTimeout(() => {
        document.getElementById('router-container').style.opacity = '1'
        document.querySelector('.loader').classList.toggle('active')
    }, 500)
})

// document.querySelectorAll('.router-link').forEach(link => {
//     link.addEventListener('click', () => {
//         document.querySelectorAll('.router-link').forEach(link => {
//             link.style.pointerEvents = "auto"
//         })

//         link.style.pointerEvents = "none"
//     })
// })

document.querySelector('#theme-toggle').addEventListener('click', () => {
    if(document.querySelector('.main').classList.contains('theme--default')) {
        document.querySelector('.main').classList.remove('theme--default')
        document.querySelector('.main').classList.add('theme--dark')
    } else {
        document.querySelector('.main').classList.remove('theme--dark')
        document.querySelector('.main').classList.add('theme--default')
    }
})