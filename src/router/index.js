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
            path: '/consign',
            name: 'Consign',
            component: () => import('@/views/consign'),
            meta: '菜单 1'
        }, {
            path: '/cwdz/subnav1',
            name: 'Subnav1',
            component: () => import('@/views/subnav1'),
            meta: '子菜单1'
        }, {
            path: '/cwdz/subnav2',
            name: 'Subnav2',
            component: () => import('@/views/subnav2'),
            meta: '子菜单2'
        }, {
            path: '/agentSummary',
            name: 'AgentSummary',
            component: () => import('@/views/agentSummary'),
            meta: '菜单 3'
        }, {
            path: '/bill',
            name: 'Bill',
            component: () => import('@/views/bill'),
            meta: '菜单 4'
        }, {
            path: '/siteApplyFor',
            name: 'SiteApplyFor',
            component: () => import('@/views/siteApplyFor'),
            meta: '菜单 5'
        }, {
            path: '/punish',
            name: 'Punish',
            component: () => import('@/views/punish'),
            meta: '菜单 6'
        }]
    }, {
        path: '*',
        redirect: '/home'
    }]
})

export default router