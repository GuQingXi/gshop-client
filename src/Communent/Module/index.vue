<!--
 * @Author: 顾清曦
 * @Date: 2022-05-14 22:41:53
 * @LastEditors: 顾清曦
 * @LastEditTime: 2022-05-14 23:36:23
 * @FilePath: \gshop-client\src\Communent\Module\index.vue
 * @Description: 
 * 要加油
 * 归属于顾清曦
-->
<template>
  <div>
    <input type="text" v-model="msg" />
    <span>牛逼{{ msg }}</span>
    <br />
    <br />
    <br />
    <br />
    <br />

    <input type="text" :value="msg2" @input="msg2 = $event.target.value" />
    <h1>牛逼{{ msg2 }}</h1>
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <!-- 复杂写法 -->
    <!-- <module-test :value="msg" @input="msg = $event"></module-test> -->
    <module-test v-model="msg"></module-test>
  </div>
</template>

<script>
import moduleTest from "./moduleTest.vue";
export default {
  components: {
    moduleTest,
  },
  data() {
    return {
      msg: "顾清曦",
      msg2: "wyc",
    };
  },
};
</script>

<style>
</style>