/*
 * @Author: 顾清曦
 * @Date: 2022-05-04 19:58:19
 * @LastEditors: 顾清曦
 * @LastEditTime: 2022-05-13 16:43:06
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
// 获取购物车列表 /api/cart/cartList
export function reqCartList() {
    return request({
        url: '/cart/cartList',
        // url: 'http://127.0.0.1:8000/cartlist',
        method: 'GET',
    })
}
// 用户注册 /api/user/passport/register
export function reqUserInfo(userInfo) {
    return request({
        url: "/user/passport/register",
        method: 'POST',
        data: userInfo
    })
}
// 获取验证码
export function reqCode(phone) {
    return request({
        url: `/user/passport/sendCode/${phone}`,
        method: 'GET'
    })
}
// 获取用户登录信息
export function reqUserLogin(userInfo) {
    return request({
        url: '/user/passport/login',
        method: 'POST',
        data: userInfo,
    })
}

// 根据token获取用户信息
// user/passport/auth/getUserInfo
export const reqTokenUserInfo = () => {
    return request({
        url: '/user/passport/auth/getUserInfo',
        method: 'GET'
    })
}

// 退出登录
export const reqUserLogout = () => {
    return request({
        url: '/user/passport/logout',
        method: 'GET'
    })
}


// 获取订单信息
export const reqTraderInfo = () => {
    return request({
        url: '/order/auth/trade',
        method: 'GET'
    })
}

// 提交订单
export const reqPay = (tradNo, tradData) => {
    // /order/auth/submitOrder?tradeNo={tradeNo}
    return request({
        url: '/order/auth/submitOrder?tradeNo=' + tradNo,
        method: 'POST',
        data: tradData,
    })
}

// 获取支付信息 /payment/weixin/createNative/{orderId}
export const reqPayInfo = (orderId) => {
    return request({
        url: `/payment/weixin/createNative/${orderId}`,
        method: 'GET'
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

export const reqMockAddress = () => {
    return MockAjax('/address')
}
