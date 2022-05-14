/*
 * @Author: 顾清曦
 * @Date: 2022-05-04 11:34:11
 * @LastEditors: 顾清曦
 * @LastEditTime: 2022-05-13 16:48:57
 * @FilePath: \gshop-client\babel.config.js
 * @Description: 
 * 要加油
 * 归属于顾清曦
 */
module.exports = {
  presets: [
    '@vue/cli-plugin-babel/preset'
  ],
  "plugins": [
    [
      "component",
      {
        "libraryName": "element-ui",
        "styleLibraryName": "theme-chalk"
      }
    ]
  ]
}
