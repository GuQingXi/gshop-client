<!--
 * @Author: 顾清曦
 * @Date: 2022-05-14 17:33:10
 * @LastEditors: 顾清曦
 * @LastEditTime: 2022-05-14 18:45:50
 * @FilePath: \gshop-client\src\Communent\ScopeSlote\List.vue
 * @Description: 
 * 要加油
 * 归属于顾清曦
-->
<template>
  <div>
    <ul v-for="(todo, index) in todos" :key="index">
      <slot :todo="todo" :index="index">
        <li>{{ todo.content }}</li>
      </slot>
    </ul>
  </div>
</template>

<script>
export default {
  name: "List",
  props: {
    todos: Array,
  },
};
</script>

<style>
</style>