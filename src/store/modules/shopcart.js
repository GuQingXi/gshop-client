/*
 * @Author: 顾清曦
 * @Date: 2022-05-10 19:00:45
 * @LastEditors: 顾清曦
 * @LastEditTime: 2022-05-13 11:10:06
 * @FilePath: \gshop-client\src\store\modules\shopcart.js
 * @Description: 
 * 要加油
 * 归属于顾清曦
 */
import { reqMockRecomments, reqCartList, reqUserLogin } from '@/api'
const state = {
    //购物车列表
    cartList: {}
}
const mutations = {
    SET_CART_LIST(state, cartArr) {
        state.cartList = cartArr
    }
}
const actions = {
    async addOrUpdataCart({ commit }, { skuId, skuNum }) {
        const result = await reqMockRecomments(skuId, skuNum)
        if (result.code === 200) {
            return 'ok'
        } else {
            return Promise.reject(new Error('failed'))
        }
    },
    async getCartList({ commit }) {
        const cartArr = await reqCartList()
        console.log(cartArr)
        if (cartArr.code === 200) {
            commit('SET_CART_LIST', cartArr.data[0])
        }
    },
}
const getters = {
    cartList(state) {
        return state.cartList.cartInfoList || []
    }
}

export default {
    state,
    mutations,
    actions,
    getters
}