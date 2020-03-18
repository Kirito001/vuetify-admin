import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const router = new Router({
    mode: 'hash',
    routes: [{
        path: '/login',
        name: 'Login',
        component: () => import('@/login/login')
    }, {
        path: '/home',
        name: 'Home',
        component: () => import('@/layout/home'),
        meta: '首页',
        children: [{
            path: '/plugin/prism',
            name: 'Prism',
            component: () => import('@/views/plugin/prism'),
            meta: '使用Prismjs'
        }, {
            path: '/plugin/icons',
            name: 'Icons',
            component: () => import('@/views/plugin/icons'),
            meta: '材质图标'
        }, {
            path: '/bulb/motion',
            name: 'Motion',
            component: () => import('@/views/bulb/motion'),
            meta: '转场动画'
        }]
    }, {
        path: '*',
        redirect: '/plugin/prism'
    }]
})

export default router