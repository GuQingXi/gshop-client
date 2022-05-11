/*
 * @Author: 顾清曦
 * @Date: 2022-05-04 19:58:19
 * @LastEditors: 顾清曦
 * @LastEditTime: 2022-05-10 20:30:37
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
//  获取商品详情
export function reqDetailInfo(skuId) {
    return request({
        url: '/item/' + skuId,
        method: 'GET',
    })
}
// 添加购物车（修改购物车的商品数量）cart/addToCart/{ skuId }/{ skuNum }
export function reqAddOrUpdateCart(skuId, skuNum,) {
    return request({
        url: `/cart/addToCart/${skuId}/${skuNum}`,
        method: 'POST'
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