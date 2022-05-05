/*
 * @Author: 顾清曦
 * @Date: 2022-05-04 19:58:19
 * @LastEditors: 顾清曦
 * @LastEditTime: 2022-05-05 10:56:45
 * @FilePath: \gshop-client\src\api\index.js
 * @Description
 * 要加油
 * 归属于顾清曦
 */

/*  包含应用的所有接口的接口请求函数
    函数内部调用Ajax发送请求
    函数返回promise对象

*/
import request from './request.js'

/**
 *  首页三级分类 /api/product/getBaseCategoryList
 */

export function getCategoryList() {
    // return request.get('/product/getBaseCategoryList')
    return request({
        url: 'product/getBaseCategoryList',
        method: 'GET',
    })
}