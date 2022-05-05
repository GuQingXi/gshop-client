/*
 * @Author: 顾清曦
 * @Date: 2022-05-04 11:34:11
 * @LastEditors: 顾清曦
 * @LastEditTime: 2022-05-05 11:27:45
 * @FilePath: \gshop-client\vue.config.js
 * @Description: 
 * 要加油
 * 归属于顾清曦
 */
const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: 'warning',
  devServer: {
    proxy: {
      "/api": {
        target: "http://gmall-h5-api.atguigu.cn",//转发请求
        changeOrigin: true//支持跨域
      }
    }
  }
})
