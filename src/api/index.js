/*
 * @Author: 顾清曦
 * @Date: 2022-05-04 19:58:19
 * @LastEditors: 顾清曦
 * @LastEditTime: 2022-05-07 14:51:07
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
import MockAjax from './mockAjax'

/**
 *  首页三级分类 /api/product/getBaseCategoryList
 */

export function reqCategoryList() {
    // return request.get('/product/getBaseCategoryList')
    return request({
        url: 'product/getBaseCategoryList',
        method: 'GET',
    })
}
// 获取首页广告轮播列表
export function reqBannerList() {
    return request({
        url: '/cms/banner',
        method: 'GET',
    })
}
// 搜索商品列表 
export function reqCommodityList(searchParams) {
    return request({
        url: '/list',
        method: 'POST',
        data: searchParams
    })

}


// mock接口函数
export const reqMockRecomments = () => {
    return MockAjax({
        url: '/recomments',
        method: 'GET',
    })
}
export const reqMockFloors = () => {
    return MockAjax('/floors')
}

export const reqMockRans = () => {
    return MockAjax('/ranks')
}
export const reqMockLikes = () => {
    return MockAjax('/likes')
}