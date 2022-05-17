/*
 * @Author: 顾清曦
 * @Date: 2022-05-13 16:52:29
 * @LastEditors: 顾清曦
 * @LastEditTime: 2022-05-15 11:41:00
 * @FilePath: \gshop-client\src\plugins\element.js
 * @Description: 
 * 要加油
 * 归属于顾清曦
 */
import Vue from 'vue';
import { MessageBox, Message, Button } from 'element-ui';

Vue.use(Button)

Vue.prototype.$msgbox = MessageBox;
Vue.prototype.$alert = MessageBox.alert;
Vue.prototype.$confirm = MessageBox.confirm;
Vue.prototype.$prompt = MessageBox.prompt;
Vue.prototype.$message = Message;