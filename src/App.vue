<!--
 * @Author: 顾清曦
 * @Date: 2022-05-04 11:34:12
 * @LastEditors: 顾清曦
 * @LastEditTime: 2022-05-05 11:06:01
 * @FilePath: \gshop-client\src\App.vue
 * @Description: 
 * 要加油
 * 归属于顾清曦
-->
<template>
  <div id="app">
    <Header></Header>
    <router-view></router-view>
    <Footer v-show="!$route.meta.isHideFooter"></Footer>
  </div>
</template>

<script>
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { getCategoryList } from "@/api/index.js";
export default {
  name: "App",
  components: {
    Header,
    Footer,
  },
  mounted() {
    //异步获取三级分类列表
    getCategoryList()
      .then((result) => console.log(result))
      .catch((error) => {
        throw error;
      });
  },
};
</script>

<style>
</style>
