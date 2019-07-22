import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router);

import Layout from '@/layout'
import store from '@/store'

const router = new Router({
    mode: 'history',
    // scrollBehavior(to, from, savedPosition){
    //     if(savedPosition) {
    //         return savedPosition
    //     } else {
    //         return { x: 0, y: 0 }
    //     }
    // },
    routes: [
        {
            path: '/login',
            name: 'Login',
            component: () => import('@/views/login')
        }, {
            path: '/',
            component: Layout,
            redirect: '/home',
            children: [{
                path: 'home',
                name: 'Home',
                component: () => import('@/views/home'),
                meta: {
                    title: '首页'
                }
            }, {
                path: '/tabs',
                name: 'Tabs',
                component: () => import('@/views/tabs'),
                meta: {
                    title: '选项卡'
                }
            }]
        }, {
            path: '/',
            component: Layout,
            redirect: '/table',
            children: [{
                path: 'table',
                name: 'Table',
                component: () => import('@/views/table'),
                meta: {
                    title: '表格'
                }
            }]
        }, {
            path: '*',
            redirect: '/home'
        }
    ]
});

router.beforeEach((to, from, next) => {
    if(to.name == 'Login') {
        if(localStorage.getItem('accessToken')) {
            next(from.path);
        } else {
            next();
        }
    } else {
        if(localStorage.getItem('accessToken')) {
            store.commit('setTabs', {
                name: to.meta.title,
                href: to.path
            });
            next();
        } else {
            next({
                path: '/login'
            });
        }
    }
})

export default router