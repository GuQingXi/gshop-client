<!--
 * @Author: 顾清曦
 * @Date: 2022-05-04 12:20:32
 * @LastEditors: 顾清曦
 * @LastEditTime: 2022-05-04 19:35:16
 * @FilePath: \gshop-client\src\pages\Home\index.vue
 * @Description: 
 * 要加油
 * 归属于顾清曦
-->

<template>
  <div>
    <Nav></Nav>
    <list-content></list-content>
    <Recommend></Recommend>
    <Rank></Rank>
    <Like></Like>
    <Floor></Floor>
    <Floor></Floor>
    <Brand></Brand>
  </div>
</template>

<script>
import ListContent from "./listContent";
import Recommend from "./Recommend";
import Rank from "./Rank";
import Like from "./Like";
import Floor from "./Floor/Floor.vue";
import Brand from "./Brand/Brand.vue";
export default {
  name: "Home",
  components: {
    ListContent,
    Recommend,
    Rank,
    Like,
    Brand,
    Floor,
  },
};
</script>

<style lang="less" scoped>
</style>