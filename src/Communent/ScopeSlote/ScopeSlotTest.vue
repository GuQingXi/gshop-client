<!--
 * @Author: 顾清曦
 * @Date: 2022-05-14 17:33:10
 * @LastEditors: 顾清曦
 * @LastEditTime: 2022-05-14 18:50:50
 * @FilePath: \gshop-client\src\Communent\ScopeSlote\ScopeSlotTest.vue
 * @Description: 
 * 要加油
 * 归属于顾清曦
-->
<template>
  <div>
    <!-- 第一个实现 完成的数据为绿色 -->
    <!-- <List :todos="todos">
      <template slot-scope="{ todo }">
        <span :class="{ active: todo.isChecked }">
          {{ todo.content }}
        </span>
      </template>
    </List> -->

    <!-- 第二个效果 -->
    <!-- 显示todo列表时  带序号，todo的颜色为蓝绿搭配 -->
    <List :todos="todos">
      <template slot-scope="{ todo, index }">
        <span :style="{ color: index % 2 === 0 ? 'greent' : 'blue' }"
          >{{ index + 1 }}{{ todo.content }}</span
        >
      </template>
    </List>
  </div>
</template>

<script>
import List from "./List.vue";
export default {
  name: "ScopeSlot",
  components: {
    List,
  },
  data() {
    return {
      todos: [
        { content: "AAA", isChecked: false },
        { content: "BBB", isChecked: false },
        { content: "CCC", isChecked: false },
        { content: "DDD", isChecked: true },
      ],
    };
  },
};
</script>

<style scoped>
.active {
  color: red;
}
</style>