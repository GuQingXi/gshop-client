/*
 * @Author: 顾清曦
 * @Date: 2022-05-10 19:00:45
 * @LastEditors: 顾清曦
 * @LastEditTime: 2022-05-10 20:32:05
 * @FilePath: \gshop-client\src\store\modules\shopcart.js
 * @Description: 
 * 要加油
 * 归属于顾清曦
 */
import { reqMockRecomments } from '@/api'
const state = {
}
const mutations = {

}
const actions = {
    async addOrUpdataCart({ commit }, { skuId, skuNum }) {
        const result = await reqMockRecomments(skuId, skuNum)
        if (result.code === 200) {
            return 'ok'
        } else {
            return Promise.reject(new Error('failed'))
        }
    }
}
const getters = {}

export default {
    state,
    mutations,
    actions,
    getters
}