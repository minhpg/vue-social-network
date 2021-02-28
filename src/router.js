import Router from 'vue-router'
import Vue from "vue";

Vue.use(Router)

const router = new Router({
    mode: 'history',
    routes: [
        {
            name: 'Home',
            path: '/',
            component: () => import('./views/Home')
        },
        {
            name: 'Messages',
            path: '/messages',
            component: () => import('./views/Messages')
        },
        {
            name: 'Profile',
            path: '/profile',
            component: () => import('./views/Profile')
        },
        {
            name: 'Bookmark',
            path: '/bookmark',
            component: () => import('./views/Bookmark')
        }
        

    ]
})

export default router