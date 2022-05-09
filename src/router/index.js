/*
 * @Author: 顾清曦
 * @Date: 2022-05-04 12:12:33
 * @LastEditors: 顾清曦
 * @LastEditTime: 2022-05-07 22:59:31
 * @FilePath: \gshop-client\src\router\index.js
 * @Description: 
 * 要加油
 * 归属于顾清曦
 */
import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './routes'
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

export default new VueRouter({
    // 模式
    mode: 'history',
    routes
})