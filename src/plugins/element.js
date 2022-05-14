/*
 * @Author: 顾清曦
 * @Date: 2022-05-13 16:52:29
 * @LastEditors: 顾清曦
 * @LastEditTime: 2022-05-13 19:36:49
 * @FilePath: \gshop-client\src\plugins\element.js
 * @Description: 
 * 要加油
 * 归属于顾清曦
 */
import Vue from 'vue';
import { MessageBox, Message } from 'element-ui';


Vue.prototype.$msgbox = MessageBox;
Vue.prototype.$alert = MessageBox.alert;
Vue.prototype.$confirm = MessageBox.confirm;
Vue.prototype.$prompt = MessageBox.prompt;
Vue.prototype.$message = Message;