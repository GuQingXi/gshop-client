<!--
 * @Author: 顾清曦
 * @Date: 2022-05-14 19:12:47
 * @LastEditors: 顾清曦
 * @LastEditTime: 2022-05-15 11:45:04
 * @FilePath: \gshop-client\src\Communent\index.vue
 * @Description: 
 * 要加油
 * 归属于顾清曦
-->
<template>
  <div>
    <h1>组件间通信</h1>
    <router-link to="/shijian/scopeslot">scopeslot</router-link> <br />

    <router-link to="/shijian/event">自定义事件</router-link><br />
    <router-link to="/shijian/model">v-model</router-link><br />
    <router-link to="/shijian/sync">Sync</router-link><br />
    <router-link to="/shijian/button">attrs和listen</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>