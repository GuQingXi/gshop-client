/*
 * @Author: 顾清曦
 * @Date: 2022-05-07 14:36:00
 * @LastEditors: 顾清曦
 * @LastEditTime: 2022-05-08 18:00:34
 * @FilePath: \gshop-client\src\store\modules\search.js
 * @Description: 
 * 要加油
 * 归属于顾清曦
 */

import { reqCommodityList } from '@/api/'
const state = {
    // 搜索出的商品列表相关数据对象
    productList: {}
}
const mutations = {
    RECEIVE_PEODUCT_LIST(state, productList) {
        state.productList = productList
    }
}
const actions = {
    async getProductList({ commit }, searchParams) {
        // 因为不想删除search组件中的options中的属性
        searchParams = { ...searchParams }
        // 删除searchParams中的空串或空数组(优化请求)
        Object.keys(searchParams).forEach(key => {
            if (searchParams[key] === "" || (Array.isArray(searchParams[key]) && searchParams[key].length === 0)) {
                delete searchParams[key]
            }
        })

        const ProductList = await reqCommodityList(searchParams)
        if (ProductList.code === 200) {
            commit('RECEIVE_PEODUCT_LIST', ProductList.data)
        }
    }
}
const getters = {
    goodsList(state) {
        // 商品分页列表
        return state.productList.goodsList || []
    },
    // 品牌列表
    trademarkList(state) {
        return state.productList.trademarkList || []
    },
    // 属性列表
    attrsList(state) {
        return state.productList.attrsList || []
    },
    // 总数量
    total(state) {
        return state.productList.total || 0
    }
}

export default {
    state,
    mutations,
    actions,
    getters
}