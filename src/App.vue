<!--
 * @Author: 顾清曦
 * @Date: 2022-05-04 11:34:12
 * @LastEditors: 顾清曦
 * @LastEditTime: 2022-05-07 23:51:07
 * @FilePath: \gshop-client\src\App.vue
 * @Description: 
 * 要加油
 * 归属于顾清曦
-->
<template>
  <div id="app">
    <Header v-show="!$route.meta.isHideFooter"></Header>
    <router-view></router-view>
    <Footer v-show="!$route.meta.isHideFooter"></Footer>
  </div>
</template>

<script>
import Header from "@/components/Header";
import Footer from "@/components/Footer";
export default {
  name: "App",
  components: {
    Header,
    Footer,
  },
  mounted() {
    //异步获取三级分类列表
    this.$store.dispatch("getCategoryList");
    // 获取轮播图
    this.$store.dispatch("getBannerList");
  },
};
</script>

<style>
</style>
