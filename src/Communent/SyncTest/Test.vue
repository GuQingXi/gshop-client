<!--
 * @Author: 顾清曦
 * @Date: 2022-05-15 10:07:29
 * @LastEditors: 顾清曦
 * @LastEditTime: 2022-05-15 10:59:30
 * @FilePath: \gshop-client\src\Communent\SyncTest\Test.vue
 * @Description: 
 * 要加油
 * 归属于顾清曦
-->
<template>
  <div>
    <br />
    {{ money }}
    <Chrild :money="money" @update:money="money = $event"></Chrild>
    <br />
    <br />
    <Chrild :money.sync="money"></Chrild>
  </div>
</template>

<script>
import Chrild from "./Chrild.vue";
export default {
  components: {
    Chrild,
  },
  data() {
    return {
      money: 1000,
    };
  },
};
</script>

<style>
</style>