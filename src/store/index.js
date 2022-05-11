/*
 * @Author: 顾清曦
 * @Date: 2022-05-05 11:43:03
 * @LastEditors: 顾清曦
 * @LastEditTime: 2022-05-10 19:02:11
 * @FilePath: \gshop-client\src\store\index.js
 * @Description: 
 * 要加油
 * 归属于顾清曦
 */
import Vue from 'vue'
import Vuex from 'vuex'
import home from './modules/home'
import user from './modules/user'
import search from './modules/search'
import detail from './modules/detail'
import shopcart from './modules/shopcart'
Vue.use(Vuex)

const state = {}//存放数据
const mutations = {}//操作state
const actions = {}//和用户交互
const getters = {}

export default new Vuex.Store({
    state,
    mutations,
    actions,
    getters,
    modules: {
        home,
        user,
        search,
        detail,
        shopcart
    }
})