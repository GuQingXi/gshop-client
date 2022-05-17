<!--
 * @Author: 顾清曦
 * @Date: 2022-05-15 10:07:48
 * @LastEditors: 顾清曦
 * @LastEditTime: 2022-05-15 10:57:59
 * @FilePath: \gshop-client\src\Communent\SyncTest\Chrild.vue
 * @Description: 
 * 要加油
 * 归属于顾清曦
-->
<template>
  <div>
    小明<button @click="moveMoney">花钱</button>100 爸爸还有多少钱{{ money }}
  </div>
</template>

<script>
export default {
  props: ["money"],
  methods: {
    moveMoney() {
      const { money } = this;
      this.$emit("update:money", money - 100);
    },
  },
};
</script>

<style>
</style>