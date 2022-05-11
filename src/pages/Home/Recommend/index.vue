<!--
 * @Author: 顾清曦
 * @Date: 2022-05-04 18:13:13
 * @LastEditors: 顾清曦
 * @LastEditTime: 2022-05-11 11:46:25
 * @FilePath: \gshop-client\src\pages\Home\Recommend\index.vue
 * @Description: 
 * 要加油
 * 归属于顾清曦
-->
<template>
  <div class="today-recommend">
    <div class="py-container">
      <ul class="recommend">
        <li class="clock">
          <div class="time">
            <!-- <img src="../../assets/clock.png" /> -->
            <!-- <img src="../../assets/clock.png" alt="" /> -->
            <img src="../../../assets/clock.png" alt="" />
            <h3>今日推荐</h3>
          </div>
        </li>
        <li class="banner" v-for="item in recommends" :key="item.id">
          <img :src="item.imageUrl" />
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "isRecommend",
  props: ["recommends"],
};
</script>

<style lang="less" scoped>
.today-recommend {
  .py-container {
    width: 1200px;
    margin: 0 auto;

    .recommend {
      height: 165px;
      background-color: #eaeaea;
      margin: 10px 0;
      display: flex;

      .clock {
        width: 16.67%;
        background-color: #5c5251;
        color: #fff;
        font-size: 18px;
        text-align: center;

        .time {
          padding: 30px 0;
        }

        h3 {
          margin: 9px 0;
          font-weight: 700;
          font-size: 18px;
          line-height: 30.06px;
        }
      }

      .banner {
        width: 20.83%;

        img {
          width: 100%;
          height: 100%;
          transition: all 400ms;

          &:hover {
            opacity: 0.8;
          }
        }
      }
    }
  }
}
</style>