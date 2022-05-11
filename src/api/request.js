/*
 * @Author: 顾清曦
 * @Date: 2022-05-05 11:43:02
 * @LastEditors: 顾清曦
 * @LastEditTime: 2022-05-11 10:38:28
 * @FilePath: \gshop-client\src\api\request.js
 * @Description: 
 * 要加油
 * 归属于顾清曦
 */
/* 
对axios进行二次包装
1. 配置通用的基础路径和超时
2. 显示请求进度条
3. 成功返回的数据不再是response, 而直接是响应体数据response.data
4. 统一处理请求错误, 具体请求也可以选择处理或不处理
*/
import axios from "axios"
import NProgress from "nprogress"
import 'nprogress/nprogress.css'
import store from "@/store"


// 1. 配置通用的基础路径和超时
// instance是一个能发任意Ajax请求的函数，当然可以作为对象使用
const instance = axios.create({
    baseURL: '/api',//基础路径
    timeout: 15000,
})

// 添加请求拦截器
instance.interceptors.request.use(function (config) {
    // 在发送请求之前做什么
    // 2. 显示请求进度条
    NProgress.start()
    let userTempId = store.state.user.userTempId
    if (userTempId) {
        config.headers.userTempId = userTempId
    }

    // 必须返回config
    return config
})
// 添加响应拦截器
instance.interceptors.response.use(
    response => {
        // 请求成功返回的回调
        // 结束请求进度条
        NProgress.done()
        // 3. 成功返回的数据不再是response, 而直接是响应体数据response.data
        return response.data
    },
    error => {
        // 请求失败返回的回调
        // 结束请求进度条
        NProgress.done()

        alert(error.message)
        // throw error
        return Promise.reject(error)
    }
)



//向外暴露instance
export default instance