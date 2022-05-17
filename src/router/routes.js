/*
 * @Author: 顾清曦
 * @Date: 2022-05-04 12:31:33
 * @LastEditors: 顾清曦
 * @LastEditTime: 2022-05-17 00:23:42
 * @FilePath: \gshop-client\src\router\routes.js
 * @Description: 
 * 要加油
 * 归属于顾清曦
 */
// 所有路由匹配的数组
import Home from '@/pages/Home'
import Search from '@/pages/Search'
import Login from '@/pages/Login'
import Register from '@/pages/Register'
import store from '@/store/modules/user'

export default [
    {
        path: '/',
        component: Home
    },
    {
        path: '/search/:keyword?',
        name: 'search',
        component: Search,
        // props: true 只映射params参数
        props: (route) => ({
            keyword: route.params.keyword,
            categoryName: route.query.categoryName
        })
    },
    {
        path: '/register',
        name: 'register',
        component: Register,
        meta: {
            isHideFooter: true
        }
    },
    {
        path: '/login',
        name: 'login',
        component: Login,
        meta: {
            isHideFooter: true
        },
        // 路由前置守卫
        beforeEnter: (to, from) => {
            let token = store.state.user.token
            if (token) {
                console.log('你已登录')
                next('/')
            } else {
                next()
            }
        }
    },
    {
        path: '/detail/:skuId',
        name: 'detail',
        component: () => import('../pages/Detail')
    },
    {
        path: '/addcartsuccess',
        name: "addcartsuccess",
        component: () => import('../pages/AddCartSuccess'),
        beforeEnter: (to, from, next) => {
            let skuNum = to.query.skuNum
            let skuInfo = sessionStorage.getItem('SKUINFO_KEY')
            if (skuNum && skuInfo) {
                next()
            } else {
                // 阻止
                next('/')
            }
        }
    },
    {
        path: '/shopcart',
        name: 'shopcart',
        component: () => import('../pages/ShopCart')
    },
    {
        path: '/trade',
        name: 'trade',
        component: () => import('../pages/Trade'),
        beforeEnter: (to, from, next) => {
            if (from.path === '/shopcart') {
                next()
            } else {
                // 阻止
                next('/')
            }
        }
    },
    {
        path: '/pay',
        name: 'pay',
        component: () => import('../pages/Pay'),
        beforeEnter: (to, from, next) => {
            // 判断是否从交易页面跳转的
            if (from.path === '/trade') {
                next()
            } else {
                next('/')
            }
        }
    },
    {
        path: '/center',
        name: 'center',
        component: () => import('../pages/Center'),
        beforeEnter: (to, from, next) => {
            if (from.path === "/pay") {
                next()
            } else {
                next('/')
            }
        }
    },
    {
        path: '/shijian',
        name: 'shijian',
        component: () => import('../Communent/index'),
        children: [
            {
                path: 'scopeslot',
                component: () => import('../Communent/ScopeSlote/ScopeSlotTest')
            },
            {
                path: 'event',
                component: () => import('../Communent/自定义事件/EventText')
            },
            {
                path: 'model',
                component: () => import('../Communent/Module')
            },
            {
                path: 'sync',
                component: () => import('../Communent/SyncTest/Test')
            },
            {
                path: 'button',
                component: () => import('../Communent/attrsAndlistern')
            }
        ]
    }

]