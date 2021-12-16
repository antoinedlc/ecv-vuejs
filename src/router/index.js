import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: () => import(/* webpackChunkName: "about" */ '../views/Home.vue')
    },
    {
        path: '/about',
        name: 'About',
        component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
    },
    {
        path: '/expos',
        name: 'Expos',
        component: () => import(/* webpackChunkName: "about" */ '../views/Expos.vue')
    },
    {
        path: '/shop',
        name: 'Shop',
        component: () => import('../views/Shop.vue')
    },
    {
        path: '/contact',
        name: 'Contact',
        component: () => import('../views/Contact.vue')
    },
    {
        path: '/tickets',
        name: 'Tickets',
        component: () => import('../views/Tickets.vue')
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router