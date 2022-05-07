<!--
 * @Author: 顾清曦
 * @Date: 2022-05-05 11:43:03
 * @LastEditors: 顾清曦
 * @LastEditTime: 2022-05-06 12:00:56
 * @FilePath: \gshop-client\src\pages\Search\index.vue
 * @Description: 
 * 要加油
 * 归属于顾清曦
-->
<template>
  <div>
    <Nav />
    Search
    <h3>{{ keyword }}</h3>
    <h3>{{ categoryName }}</h3>
  </div>
</template>

<script>
export default {
  name: "isSearch",
  props: ["keyword", "categoryName"],
};
</script>

<style>
</style>