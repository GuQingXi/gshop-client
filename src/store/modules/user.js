/*
 * @Author: 顾清曦
 * @Date: 2022-05-07 13:46:28
 * @LastEditors: 顾清曦
 * @LastEditTime: 2022-05-11 10:13:18
 * @FilePath: \gshop-client\src\store\modules\user.js
 * @Description: 
 * 要加油
 * 归属于顾清曦
 */
/*
管理登录用户数据的vuex子模块
*/
import { getUserTempId } from '@/utils/userabout'
export default {
    state: {
        // getUserTempId获取临时标识id
        userTempId: getUserTempId()
    },
    mutations: {

    },
    actions: {},
    getters: {},
}