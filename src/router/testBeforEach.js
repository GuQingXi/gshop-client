/*
 * @Author: 顾清曦
 * @Date: 2022-05-04 12:12:33
 * @LastEditors: 顾清曦
 * @LastEditTime: 2022-05-12 20:25:36
 * @FilePath: \gshop-client\src\router\index copy.js
 * @Description: 
 * 要加油
 * 归属于顾清曦
 */
import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './routes'
import store from '@/store'
Vue.use(VueRouter)

// 缓存原本的push方法
const originPush = VueRouter.prototype.push
// 指定新的push方法
VueRouter.prototype.push = function (location, onReslove, onReject) {
    // 如果指定了成功或失败的回调
    if (onReslove || onReject) {
        return originPush.call(this, location, onReslove, onReject)
    }
    // 没有指定成功或失败回调，必须用catch处理
    return originPush.call(this, location).catch((err) => {
        //如果是重复导航产生的错误
        if (VueRouter.isNavigationFailure(err)) {
            return err
        }
        return Pomise.reject(err)
    })

}
const originReplace = VueRouter.prototype.push
// 指定新的push方法
VueRouter.prototype.replace = function (location, onReslove, onReject) {
    // 如果指定了成功或失败的回调
    if (onReslove || onReject) {
        return originReplace.call(this, location, onReslove, onReject)
    }
    // 没有指定成功或失败回调，必须用catch处理
    return originReplace.call(this, location).catch((err) => {
        //如果是重复导航产生的错误
        if (VueRouter.isNavigationFailure(err)) {
            return err
        }
        return Pomise.reject(err)
    })

}

const router = new VueRouter({
    // 模式
    mode: 'history',
    routes,
    scrollBehavior() {
        // 始终滚动到顶部
        return { x: 0, y: 0 }
    },
})

// 全局路由守卫 验证token
router.beforeEach(async (to, from, next) => {

    // 首先获取到token
    let token = store.state.user.token
    if (token) {
        // 有token用户点击登录页就跳转到首页
        if (to.path === '/login') {
            next('/')
        } else {
            // 如果有信息则不用获取 这里初始值是个空对象 !!{}为true
            let userInfo = !!store.state.user.userInfo.nickName
            if (userInfo) {
                // 此判断代表有用户数据
                next()
            } else {
                // 没有用户信息 
                // 获取用户的详细信息
                try {
                    await store.dispatch('getTokenUserInfo')
                    next()
                } catch (error) {
                    // 如果获取失败
                    alert('登录失效')
                    // 删除localStorage里面的token
                    store.dispatch('resetUserInfo')
                    // 跳转到登录页面 携带用户想要跳转的信息 等用户登录过后自动跳转相对页面
                    next('/login?redirect' + to.path)
                }
            }
        }
    } else {
        // 代表用户没登录
        // 判断如果不进订单页 用户可以随便浏览 
        next()
    }
})

export default router


