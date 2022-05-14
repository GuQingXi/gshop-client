/*
 * @Author: 顾清曦
 * @Date: 2022-05-04 12:31:33
 * @LastEditors: 顾清曦
 * @LastEditTime: 2022-05-13 19:33:51
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
        component: () => import('../pages/AddCartSuccess')
    },
    {
        path: '/shopcart',
        name: 'shopcart',
        component: () => import('../pages/ShopCart')
    },
    {
        path: '/trade',
        name: 'trade',
        component: () => import('../pages/Trade')
    },
    {
        path: '/pay',
        name: 'pay',
        component: () => import('../pages/Pay')
    },
    {
        path: '/center',
        name: 'center',
        component: () => import('../pages/Center')
    }


]