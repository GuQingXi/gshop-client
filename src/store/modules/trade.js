/*
 * @Author: 顾清曦
 * @Date: 2022-05-13 10:52:04
 * @LastEditors: 顾清曦
 * @LastEditTime: 2022-05-13 16:16:28
 * @FilePath: \gshop-client\src\store\modules\trade.js
 * @Description: 
 * 要加油
 * 归属于顾清曦
 */
import { reqTraderInfo, reqMockAddress, reqPay } from '@/api'
const state = {
    tradeInfo: {
    },
    addresslList: [],
    OrderInfo: {}
}
const mutations = {
    RECEIVE_TRANDE_INF(state, tradeInfo) {
        state.tradeInfo = tradeInfo
    },
    RECEIVE_ADDRESS_LIST(state, address) {
        state.addresslList = address
    },
    RECEIVE_ORDER_INFO(state, orderInfo) {
        state.OrderInfo = orderInfo
    }
}
const actions = {
    async getTradeInfo({ commit }) {
        const result = await reqTraderInfo()
        console.log(result, "userInfo")
        if (result.code === 200) {
            commit('RECEIVE_TRANDE_INF', result.data)
        }
    },
    async getAddressList({ commit }) {
        const result = await reqMockAddress()
        if (result.code === 200) {
            commit('RECEIVE_ADDRESS_LIST', result.data)
        }
    },
    async getOrderInfo({ commit }, { tradeNo, tradeData }) {
        const result = await reqPay(tradeNo, tradeData)
        if (result.code === 200) {
            return 'ok'
        } else {
            return Promise.reject(result.message)
        }
    }
}
const getters = {
    detailArrayList(state) {
        return state.tradeInfo.detailArrayList || []
    }
}

export default {
    state,
    mutations,
    actions,
    getters
}