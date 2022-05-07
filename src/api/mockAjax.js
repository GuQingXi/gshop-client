/*
 * @Author: 顾清曦
 * @Date: 2022-05-06 22:43:33
 * @LastEditors: 顾清曦
 * @LastEditTime: 2022-05-06 22:51:20
 * @FilePath: \gshop-client\src\api\mockAjax.js
 * @Description: 
 * 要加油
 * 归属于顾清曦
 */
import axios from "axios";
import nprogress from "nprogress";
const service = axios.create({
    baseURL: '/mock',
    timeout: 2000
})

// 请求拦截器
service.interceptors.request.use((config) => {
    nprogress.start()
    return config
})

//响应拦截器
service.interceptors.response.use(
    (response) => {
        nprogress.done()
        return response.data
    },
    (error) => {
        nprogress.done()
        return Promise.reject(error)
    }
)
export default service