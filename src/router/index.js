/*
 * @Author: 顾清曦
 * @Date: 2022-05-04 12:12:33
 * @LastEditors: 顾清曦
 * @LastEditTime: 2022-05-16 22:03:53
 * @FilePath: \gshop-client\src\router\index.js
 * @Description: 
 * 要加油
 * 归属于顾清曦
 */
import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './routes'
import store from '@/store'

const that = new Vue()//拿到this

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

router.beforeEach(async (to, from, next) => {
    // 全局前置导航守卫 to准备去的路由对象  from 从哪个路由对象来
    // next是个函数 next()表示无条件放行 next(false)代表不放行，停在原地  
    // next('/') next({path:'/'})代表最终让他去哪

    // token校验
    // 首先先拿到token
    let token = store.state.user.token
    console.log(to)
    // 如果token存在
    if (token) {
        // 代表登录了或者之前登录了
        if (to.path === '/login') {
            // 登录过了，又想去登录页 直接跳转首页
            next('/')
            console.log('你已经登录不能再去登录页面')
        } else {
            // 判断如果有用户数据就不需要再次去获取了
            // 如果有数据返回true 没影响 如果没数据 返回undefined !undefined =true !!undefined=false
            // let hasUserInfo= !!store.state.user.userInfo.nickName
            let hasUserInfo = store.state.user.userInfo
            if (!Object.keys(hasUserInfo).length === 0) {
                // 用户信息存在 代表登录无条件放行
                console.log('信息存在')
                next()
            } else {
                // 此时代表登录了，去的不是登录页 那我们要根据token发请求获取用户的真正信息
                try {
                    await store.dispatch('getTokenUserInfo')
                    // 将用户信息放入localStorage中
                    console.log('获取你的信息')
                    next()
                } catch (error) {
                    // 这里处理的是token过期和获取用户失败的
                    alert('请重新登录')
                    // 调用vuex中的方法 清除token和用户信息
                    store.dispatch('resetUserInfo')
                    // 去到之前想去但是没有去成的地方 需要和登录逻辑去配合使用
                    next('/login?redirect=' + to.path)
                }
            }
        }
    } else {
        // 代表用户没登录或者之前没登录
        // 后期我们需要判断用户是不是去订单相关的页面，如果是那么就先登录

        // 交易相关的 订单相关的 支付相关的 用户中心相关的 都要登录才能访问
        if (to.path === '/pay' || to.path === '/trade' || to.path === '/center') {
            that.$message.error('请登录');
            next('/login?redirect=' + to.path);
        }
        next()
    }

})

export default router


