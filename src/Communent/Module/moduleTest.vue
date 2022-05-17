<!--
 * @Author: 顾清曦
 * @Date: 2022-05-14 22:42:15
 * @LastEditors: 顾清曦
 * @LastEditTime: 2022-05-14 23:38:38
 * @FilePath: \gshop-client\src\Communent\Module\moduleTest.vue
 * @Description: 
 * 要加油
 * 归属于顾清曦
-->
<template>
  <div>
    子组件的input
    <input
      type="text"
      name=""
      id=""
      :value="value"
      @input="$emit('input', $event.target.value)"
    />
  </div>
</template>

<script>
export default {
  props: ["value"],
};
</script>

<style>
</style>