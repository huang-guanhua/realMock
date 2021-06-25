import { createRouter, createWebHistory } from 'vue-router'
import Home from '../pages/home/index.vue'
import List from '../pages/list/index.vue'
import Config from '../pages/config/index.vue'

export default createRouter({
    history: createWebHistory('/realmock/'),
    routes: [
        {
            path: '/',
            component: Home
        },
        {
            path: '/list',
            component: List
        },
        {
            path: '/config',
            component: Config
        }
    ]
})