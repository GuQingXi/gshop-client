/*
 * @Author: 顾清曦
 * @Date: 2022-05-11 10:06:29
 * @LastEditors: 顾清曦
 * @LastEditTime: 2022-05-11 10:28:13
 * @FilePath: \gshop-client\src\utils\userabout.js
 * @Description: 
 * 要加油
 * 归属于顾清曦
 */
// 这个函数是让用户获取到唯一标识
//第一步：先从localStorage当中去获取，如果没有
// 第二：再调用getUserTempId，并且还要存储到localStorage
import { v4 as uuidv4 } from 'uuid';
function getUserTempId() {
    let userTempId = localStorage.getItem('USERTEMID_KEY')
    if (!userTempId) {
        userTempId = uuidv4()
        localStorage.setItem('USERTEMID_KEY', userTempId)
    }
    return userTempId
}
export {
    getUserTempId
}