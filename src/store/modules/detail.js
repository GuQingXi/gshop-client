import { reqDetailInfo } from '@/api'
const state = {
    skuDetailInfo: {}
}
const mutations = {
    RECEIVE_SKUDETAIL_INFO(state, detailInfo) {
        state.skuDetailInfo = detailInfo
    }
}
const actions = {
    async getSkuDetailInfo({ commit }, skuId) {
        const detailInfo = await reqDetailInfo(skuId)
        if (detailInfo.code === 200) {
            commit('RECEIVE_SKUDETAIL_INFO', detailInfo.data)
        }
    }
}
const getters = {
    // 面包削的数据
    categoryView(state) {
        return state.skuDetailInfo.categoryView || {}
    },
    // 商品单个信息
    skuInfo(state) {
        return state.skuDetailInfo.skuInfo || {}
    },
    // 配置信息
    spuSaleAttrList(state) {
        return state.skuDetailInfo.spuSaleAttrList || []
    }

}

export default {
    state,
    mutations,
    actions,
    getters,
}