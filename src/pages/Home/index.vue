<!--
 * @Author: 顾清曦
 * @Date: 2022-05-04 12:20:32
 * @LastEditors: 顾清曦
 * @LastEditTime: 2022-05-07 12:33:45
 * @FilePath: \gshop-client\src\pages\Home\index.vue
 * @Description: 
 * 要加油
 * 归属于顾清曦
-->

<template>
  <div>
    <Nav></Nav>
    <list-content></list-content>
    <Recommend :recommends="recommends"></Recommend>
    <Rank></Rank>
    <Like></Like>
    <Floor v-for="floor in floors" :key="floor.id" :floor="floor"></Floor>
    <Brand></Brand>
  </div>
</template>

<script>
import ListContent from "./listContent/index_vue_swiper.vue";
import Recommend from "./Recommend";
import Rank from "./Rank";
import Like from "./Like";
import Floor from "./Floor/Floor.vue";
import Brand from "./Brand/Brand.vue";

import { mapState } from "vuex";
export default {
  name: "isHome",
  components: {
    ListContent,
    Recommend,
    Rank,
    Like,
    Brand,
    Floor,
  },
  mounted() {
    // 获取楼层数据
    this.$store.dispatch("getMockFloors");
    // 获取今日推荐数据
    this.$store.dispatch("getMockRecomments");
  },
  computed: {
    ...mapState({
      floors: (state) => state.home.floorList,
      recommends: (state) => state.home.recommentList,
    }),
  },
};
</script>

<style lang="less" scoped>
</style>