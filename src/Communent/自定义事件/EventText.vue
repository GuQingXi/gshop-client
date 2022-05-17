<!--
 * @Author: 顾清曦
 * @Date: 2022-05-14 19:14:21
 * @LastEditors: 顾清曦
 * @LastEditTime: 2022-05-14 19:47:23
 * @FilePath: \gshop-client\src\Communent\自定义事件\EventText.vue
 * @Description: 
 * 要加油
 * 归属于顾清曦
-->
<template>
  <div>
    <h1>自定义事件</h1>
    <button @click="test1">test1</button>
    <Tes @click.native="eventProm($event)"></Tes>
  </div>
</template>

<script>
import Tes from "./text1.vue";
export default {
  components: {
    Tes,
  },
  methods: {
    test1(event) {
      console.log(event.target.innerHTML);
    },
    isText1(haha) {
      console.log(haha);
    },
    eventProm(event) {
      console.log(event.target.innerHTML);
    },
  },
};
</script>

<style>
</style>