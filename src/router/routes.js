/*
 * @Author: 顾清曦
 * @Date: 2022-05-04 12:31:33
 * @LastEditors: 顾清曦
 * @LastEditTime: 2022-05-06 12:00:44
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
    }
]