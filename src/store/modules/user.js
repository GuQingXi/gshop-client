/*
 * @Author: 顾清曦
 * @Date: 2022-05-07 13:46:28
 * @LastEditors: 顾清曦
 * @LastEditTime: 2022-05-12 19:09:09
 * @FilePath: \gshop-client\src\store\modules\user.js
 * @Description: 
 * 要加油
 * 归属于顾清曦
 */
/*
管理登录用户数据的vuex子模块
*/
import { getUserTempId, getToken, setToken, removeToken } from '@/utils/userabout'
import { reqUserInfo, reqCode, reqUserLogin, reqTokenUserInfo, reqUserLogout } from '@/api'

const state = {
    // getUserTempId获取临时标识id
    userTempId: getUserTempId(),
    code: "",
    token: getToken(),//先从localStorage当中获取
    userInfo: {}
}
const mutations = {
    SET_CODE(state, code) {
        state.code = code
    },
    TOKEN_KEY(state, token) {
        state.token = token
    },
    SET_USER_INFO(state, userInfo) {
        state.userInfo = userInfo
    },
    REMOVE_USER_INFO(state) {
        // 包含用户信息和token
        state.userInfo = {}
        state.token = ''
    }
}
const actions = {
    async getUserInfo({ commit }, userInfo) {
        const result = await reqUserInfo(userInfo)
        if (result.code === 200) {
            return 'ok'
        } else {
            return Promise.resolve(new Error('failed'))
        }

    },
    // 获取验证码
    async getCode({ commit }, phone) {
        const result = await reqCode(phone)
        if (result.code === 200) {
            commit('SET_CODE', result.data)
            return 'ok'
        } else {
            return Promise.reject(new Error('failed'))
        }
    },
    async getUserLogin({ commit }, userInfo) {
        const result = await reqUserLogin(userInfo)
        // console.log(result.message)
        if (result.code === 200) {
            commit('TOKEN_KEY', result.data.token)//将token存储到vuex中
            setToken(result.data.token)
            // 这里return的原因是 如果请求成功我需要根据成功决定异步的返回页面
            return 'ok'
        } else {
            return Promise.reject(result.message)
        }
    },
    // 获取登录用户的详细信息
    async getTokenUserInfo({ commit }) {
        const result = await reqTokenUserInfo()
        console.log(result, '登录状态')
        if (result.code === 200) {
            commit('SET_USER_INFO', result.data)
            return 'ok'
        } else {
            return Promise.reject(new Error('failed'))
        }
    },
    // 清除token
    resetUserInfo({ commit }) {
        commit('REMOVE_USER_INFO')
        removeToken()//调用函数清空localStorage里面的token
    },
    // 退出登录
    async getUserLogout({ commit }) {
        const reslut = await reqUserLogout()
        if (reslut.code === 200) {
            commit('REMOVE_USER_INFO')
            removeToken()
            return 'ok'
        } else {
            return Promise.reject(reslut.message)
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