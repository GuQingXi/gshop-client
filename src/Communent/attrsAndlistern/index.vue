<!--
 * @Author: 顾清曦
 * @Date: 2022-05-15 11:42:49
 * @LastEditors: 顾清曦
 * @LastEditTime: 2022-05-15 14:59:34
 * @FilePath: \gshop-client\src\Communent\attrsAndlistern\index.vue
 * @Description: 
 * 要加油
 * 归属于顾清曦
-->
<template>
  <div>
    <el-button type="primary" round icon="el-icon-plus"></el-button>
    <HidButton
      type="success"
      icon="el-icon-plus"
      @HidButt="HidButt"
      title="添加"
      size="mini"
      @Cab="Cab"
    ></HidButton>
  </div>
</template>

<script>
import HidButton from "./HidButton.vue";
export default {
  methods: {
    HidButt() {
      console.log("Hid");
    },
    Cab() {
      console.log("Cab");
    },
  },
  components: {
    HidButton,
  },
};
</script>

<style>
</style>