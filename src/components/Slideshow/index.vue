<!--
 * @Author: 顾清曦
 * @Date: 2022-05-06 12:27:37
 * @LastEditors: 顾清曦
 * @LastEditTime: 2022-05-06 13:24:55
 * @FilePath: \gshop-client\src\components\Slideshow\index.vue
 * @Description:
 * 要加油
 * 归属于顾清曦
-->
<template>
  <div>
    <div class="swiper-container" id="mySwiper">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="item in slideshowArr" :key="item.id">
          <!-- <img src="../../pages/Home/images/home/banner1.jpg" /> -->
          <img :src="item.imageUrl" alt="" />
        </div>
      </div>
      <!-- 如果需要分页器 -->
      <div class="swiper-pagination"></div>

      <!-- 如果需要导航按钮 -->
      <div class="swiper-button-prev"></div>
      <div class="swiper-button-next"></div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "slideShow",
  computed: {
    ...mapState({
      slideshowArr: (state) => state.slideshow.slideshowList,
    }),
  },
};
</script>

<style>
</style>