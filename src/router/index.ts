import {createRouter, createWebHistory} from 'vue-router'

import DefaultLayout from '@/layouts/DefaultLayout.vue'

const routes = [
    {
        path: '/',
        name: 'index',
        component: DefaultLayout,
        redirect: {
            name: 'index.index'
        },
        children: [
            {
                path: '',
                name: 'index.index',
                component: () => import('@/views/index/Index.vue'),
            },
        ],
    }
]

const router = createRouter({
    // @ts-ignore
    history: createWebHistory(import.meta.env.BASE_URL),
    linkActiveClass: 'is-link-active',
    linkExactActiveClass: 'is-link-exact-active',
    // @ts-ignore
    routes
})

export default router