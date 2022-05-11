<!--
 * @Author: 顾清曦
 * @Date: 2022-05-08 17:33:51
 * @LastEditors: 顾清曦
 * @LastEditTime: 2022-05-10 10:09:19
 * @FilePath: \gshop-client\src\components\Pagination\index.vue
 * @Description: 
 * 要加油
 * 归属于顾清曦
-->
<template>
  <div class="pagination">
    <button
      :disabled="myCurrentPage === 1"
      :class="{ disabled: myCurrentPage === 1 }"
      @click="setCurrentPage(myCurrentPage - 1)"
    >
      上一页
    </button>
    <button v-if="startEnd.start !== 1" @click="setCurrentPage(1)">1</button>
    <button class="disabled" v-if="startEnd.start > 2">...</button>

    <!-- 多执行了从1到start-1的遍历和v-if的判断 -->
    <!-- <button
      v-for="item in startEnd.end"
      v-if="item >= startEnd.start"
      :class="{ active: item === myCurrentPage }"
      @click="setCurrentPage(item)"
    >
      {{ item }}
    </button> -->
    <button
      v-for="item in startEndArr"
      :key="item"
      :class="{ active: item === myCurrentPage }"
      @click="setCurrentPage(item)"
    >
      {{ item }}
    </button>

    <!-- <button>4</button>
    <button class="active">5</button>
    <button>6</button>
    <button>7</button> -->
    <button class="disabled" v-if="startEnd.end < totalPages - 1">...</button>
    <button
      v-if="startEnd.end < totalPages"
      @click="setCurrentPage(totalPages)"
    >
      {{ totalPages }}
    </button>

    <button
      :class="{ disabled: myCurrentPage === totalPages }"
      @click="setCurrentPage(myCurrentPage + 1)"
      :disabled="myCurrentPage === totalPages"
    >
      下一页
    </button>
    <button class="disabled">共 {{ total }} 条</button>
  </div>
</template>

<script>
export default {
  name: "Pagination",
  props: {
    currentPage: {
      // 当前页码
      type: Number,
      default: 1,
    },
    pageSize: {
      //每页显示数据的数量
      type: Number,
      default: 10,
    },
    total: {
      // 总数据
      type: Number,
      default: 0,
    },
    showPageNo: {
      // 最大连续页码数
      type: Number,
      default: 5,
      // 要求传入值要是奇数
      validator: function (value) {
        return value % 2 === 1;
      },
    },
  },
  data() {
    return {
      myCurrentPage: this.currentPage, //初始值由父组件来指定
    };
  },
  computed: {
    /*
    总页数
    */
    totalPages() {
      const { total, pageSize } = this;
      return Math.ceil(total / pageSize);
    },
    startEndArr() {
      // 包含从start到End的数组
      const arr = [];
      const { start, end } = this.startEnd;
      for (let i = start; i <= end; i++) {
        arr.push(i);
      }
      return arr;
    },
    /**
     start/end:连续页码数的开始页码与结束页码 {start:3,end:7}
     */
    startEnd() {
      let start, end;
      const { totalPages, myCurrentPage, showPageNo } = this;
      // 计算start
      /* 当前页码    最大连续页码   总页数
       myCurrentPage, showPageNo ,totalPages
            4            5          8       23[4]56
            start=myCurrentPage-(showPageNo-1)/2
            start=myCurrentPage-Math.floor(showPageNo/2)

            如果myCurrentPage比较小，计算出来的结果有可能小于1 start>=1
      */
      start = myCurrentPage - Math.floor(showPageNo / 2);
      if (start < 1) {
        start = 1;
      }

      // 计算end

      /*当前页码    最大连续页码   总页数
       myCurrentPage, showPageNo ,totalPages
            4            5          8       23[4]56
            end=start+showPageNo-1
         
      */
      end = start + showPageNo - 1;
      // end的最大值为totalPages

      /*
      myCurrentPage ,showPageNo,totalPages
      5                 5         5
      start=3       34[5] 按上边计算 start应为3
      end=3+5-1=7>5  大于最总页数了 修正end=总页数=5   正确显示1234[5]
      start=5-5+1=-1 start<1了需要修正为1
      */
      if (end > totalPages) {
        // 修正end的最大值为总页数 不能大于总页数
        end = totalPages;
        // 修正start
        start = end - showPageNo + 1;
        // 一旦总页码数小于最大连续页码数==》start<1
        if (start < 1) {
          start = 1;
        }
      }
      return { start, end };
    },
  },
  methods: {
    //设置新的当前页码
    setCurrentPage(page) {
      if (page === this.myCurrentPage) return;
      this.myCurrentPage = page;
      // 分发自定义事件通知父组件
      this.$emit("currentChange", page);
    },
  },
  watch: {
    currentPage(value) {
      this.myCurrentPage = value;
    },
  },
};
</script>

<style lang="less" scoped>
.pagination {
  button {
    margin: 0 5px;
    background-color: #f4f4f5;
    color: #606266;
    outline: none;
    border-radius: 2px;
    padding: 0 4px;
    vertical-align: top;
    display: inline-block;
    font-size: 13px;
    min-width: 35.5px;
    height: 28px;
    line-height: 28px;
    cursor: pointer;
    box-sizing: border-box;
    text-align: center;
    border: 0;

    &.active {
      background: skyblue;
      color: #f4f4f5;
      cursor: not-allowed;
    }
    &.disabled {
      cursor: not-allowed;
      background: #f4f4f5;
    }
  }
}
</style>