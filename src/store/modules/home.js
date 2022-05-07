/*
 * @Author: 顾清曦
 * @Date: 2022-05-05 12:50:05
 * @LastEditors: 顾清曦
 * @LastEditTime: 2022-05-07 13:32:22
 * @FilePath: \gshop-client\src\store\modules\home.js
 * @Description: 
 * 要加油
 * 归属于顾清曦
 */
/** 
 *管理首页相关数据的vuex子模块
 */
import {
    reqCategoryList,
    reqBannerList,
    reqMockRecomments,
    reqMockFloors,
    reqMockRans,
    reqMockLikes
} from "@/api";


const state = {
    categoryList: [],
    bannerList: [],
    // 推荐数据
    floorList: [],
    // 楼层数据
    recommentList: [],
    // 热门数据
    rankList: [],
    // 猜你喜欢数据
    likeList: [],
}
const mutations = {
    // 接收保存分类列表
    RECEIVE_CATEGORY_LIST(state, categoryArr) {
        state.categoryList = categoryArr.splice(0, 15)
    },
    RECEIVE_BANNER_LIST(state, bannerArr) {
        state.bannerList = bannerArr
    },
    RECEIVE_FLOOR_LIST(state, floorArr) {
        state.floorList = floorArr
    },
    RECEIVE_RECOMMENT_LIST(state, recommentArr) {
        state.recommentList = recommentArr
    },
    RECEIVE_RANK_LIST(state, rankArr) {
        state.rankList = rankArr
    },
    RECEIVE_LIKE_LIST(state, likeArr) {
        state.likeList = likeArr
    }

}
const actions = {
    // commit触发是所有匹配的mutation，可能是其他模块或总的mutation
    // 获取三级分类列表的异步actions
    async getCategoryList({ commit }) {
        // 发送请求
        const categoryArr = await reqCategoryList()
        // 如果成功了，得到数据交给mutation
        if (categoryArr.code === 200) {
            commit('RECEIVE_CATEGORY_LIST', categoryArr.data)
        }

    },
    // 获取广告列表
    async getBannerList({ commit }) {
        const bannerArr = await reqBannerList()
        if (bannerArr.code === 200) {
            commit('RECEIVE_BANNER_LIST', bannerArr.data)
        }

    },
    // 获取楼层数数据
    async getMockFloors({ commit }) {
        const floorArr = await reqMockFloors()
        if (floorArr.code === 200) {
            commit('RECEIVE_FLOOR_LIST', floorArr.data)
        }
    },
    // 获取今日推荐数据
    async getMockRecomments({ commit }) {
        const recommentArr = await reqMockRecomments()
        if (recommentArr.code === 200) {
            commit('RECEIVE_RECOMMENT_LIST', recommentArr.data)
        }
    },
    // 获取热卖排行数据
    async getmockRanks({ commit }) {
        const ranks = await reqMockRans()
        if (ranks.code === 200) {
            commit('RECEIVE_RANK_LIST', ranks.data)
        }
    },
    // 获取猜你喜欢数据
    async getMockLikes({ commit }) {
        const likes = await reqMockLikes()
        if (likes.code === 200) {
            commit('RECEIVE_LIKE_LIST', likes.data)
        }
    }
}
const getters = {

}

export default {
    state,
    mutations,
    actions,
    getters
}