/*
 * @Author: 顾清曦
 * @Date: 2022-05-04 11:34:12
 * @LastEditors: 顾清曦
 * @LastEditTime: 2022-05-17 10:17:24
 * @FilePath: \gshop-client\src\main.js
 * @Description: 
 * 要加油
 * 归属于顾清曦
 */
import Vue from 'vue'
import App from './App.vue'
import store from '@/store'
import router from '@/router'
// 引入菜单
import Nav from '@/components/Nav'
// 引入分页
import Pagination from '@/components/Pagination'
// 引入swiper样式
import "swiper/css/swiper.min.css";
// 引入vue-swiper插件
import './plugins/swiper'
// 引入mock数据
import '@/mock/mockServer'

import * as API from '@/api'
// 引入element ui
import "@/plugins/element"

// 安装vue-lazylodash
import VueLazylodash from 'vue-lazyload'

Vue.use(VueLazylodash, {
  preLoad: 1,
  error: require('./assets/loading.gif'),//错误展示的图片
  loading: require('./assets/loading2.gif'),//加载图片
  attempt: 1
})


Vue.config.productionTip = false
//注册全局组件
Vue.component('Nav', Nav)
Vue.component(Pagination.name, Pagination)
// Vue.prototype.$bus = new Vue()

new Vue({
  beforeCreate() {
    // 创建或指定事件总线对象，保存到Vue的原型上
    Vue.prototype.$bus = this
    // 当不使用vuex的时候，可以把接口函数全部装在对象当中挂在Vue原型身上
    Vue.prototype.$api = API
  },
  render: h => h(App),
  store,
  router
}).$mount('#app')
