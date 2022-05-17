<!--
 * @Author: 顾清曦
 * @Date: 2022-05-15 11:40:22
 * @LastEditors: 顾清曦
 * @LastEditTime: 2022-05-15 14:55:17
 * @FilePath: \gshop-client\src\Communent\attrsAndlistern\HidButton.vue
 * @Description: 
 * 要加油
 * 归属于顾清曦
-->
<template>
  <div>
    <a href="javascript:;" :title="title">
      <el-button v-bind="$attrs" v-on="$listeners"></el-button>
    </a>
  </div>
</template>

<script>
export default {
  props: ["title"],
  mounted() {
    console.log(this.$attrs, this.$listeners);
  },
};
</script>

<style>
</style>