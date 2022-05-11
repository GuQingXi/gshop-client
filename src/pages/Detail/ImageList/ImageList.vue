<!--
 * @Author: 顾清曦
 * @Date: 2022-05-10 10:23:16
 * @LastEditors: 顾清曦
 * @LastEditTime: 2022-05-10 16:53:41
 * @FilePath: \gshop-client\src\pages\Detail\ImageList\ImageList.vue
 * @Description: 
 * 要加油
 * 归属于顾清曦
-->
<template>
  <swiper :options="swiperOptions">
    <swiper-slide v-for="(img, index) in skuImageList" :key="img.id">
      <img
        :src="img.imgUrl"
        :class="{ active: index === defaultIndex }"
        @click="chengeDfaultIndex(index)"
      />
    </swiper-slide>
    <div class="swiper-button-prev" slot="button-prev"></div>
    <div class="swiper-button-next" slot="button-next"></div>
  </swiper>
  <!-- <div class="swiper-container">
    <div class="swiper-wrapper">
      <div
        class="swiper-slide"
        v-for="(img, index) in skuImageList"
        :key="img.id"
      >
        <img
          :src="img.imgUrl"
          :class="{ active: index === defaultIndex }"
          @click="chengeDfaultIndex(index)"
        />
      </div>
    </div>
    <div class="swiper-button-next"></div>
    <div class="swiper-button-prev"></div>
  </div> -->
</template>

<script>
export default {
  name: "ImageList",
  props: {
    skuImageList: Array,
  },
  data() {
    return {
      defaultIndex: 0, //默认有橙色框框的下标
      swiperOptions: {
        slidesPerView: 5, //一个容器显示的数量
        slidesPerGroup: 3, //多少数量为一组
        // 如果需要前进后退按钮
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      },
    };
  },
  methods: {
    chengeDfaultIndex(index) {
      this.defaultIndex = index;

      // 通过全局事件总线把选中的index传递给zoom
      this.$bus.$emit("syncDefaultIndex", index);
    },
  },
};
</script>

<style lang="less" scoped>
.swiper-container {
  height: 56px;
  width: 412px;
  box-sizing: border-box;
  padding: 0 12px;

  .swiper-slide {
    width: 56px;
    height: 56px;

    img {
      width: 100%;
      height: 100%;
      border: 1px solid #ccc;
      padding: 2px;
      width: 50px;
      height: 50px;
      display: block;

      &.active {
        border: 2px solid #f60;
        padding: 1px;
      }

      // &:hover {
      //   border: 2px solid #f60;
      //   padding: 1px;
      // }
    }
  }

  .swiper-button-next {
    left: auto;
    right: 0;
  }

  .swiper-button-prev {
    left: 0;
    right: auto;
  }

  .swiper-button-next,
  .swiper-button-prev {
    box-sizing: border-box;
    width: 12px;
    height: 56px;
    background: rgb(235, 235, 235);
    border: 1px solid rgb(204, 204, 204);
    top: 0;
    margin-top: 0;
    &::after {
      font-size: 12px;
    }
  }
}
</style>