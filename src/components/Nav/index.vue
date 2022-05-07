<!--
 * @Author: 顾清曦
 * @Date: 2022-05-04 17:34:52
 * @LastEditors: 顾清曦
 * @LastEditTime: 2022-05-06 12:03:36
 * @FilePath: \gshop-client\src\components\Nav\index.vue
 * @Description: 
 * 要加油
 * 归属于顾清曦
-->
<template>
  <!-- 商品分类导航 -->
  <div class="type-nav">
    <div class="container">
      <div @mouseleave="hideFirst" @mouseenter="showFirst">
        <h2 class="all">全部商品分类</h2>
        <transition name="slide">
          <div class="sort" v-show="isShow">
            <div class="all-sort-list2" @click="toSearch">
              <div
                class="item"
                v-for="(c1, index) in categoryList"
                :key="c1.categoryId"
                :class="{ active: currentIndex === index }"
                @mouseenter="showSubList(index)"
              >
                <h3>
                  <a
                    href="javascript:;"
                    :data-categoryName="c1.categoryName"
                    :data-category1Id="c1.categoryId"
                    >{{ c1.categoryName }}</a
                  >
                  <!-- <router-link
                :to="`/search?categoryName=${c1.categoryName}&categoryId=${c1.categoryId}`"
                >{{ c1.categoryName }}</router-link
              > -->
                </h3>
                <div class="item-list clearfix">
                  <div class="subitem">
                    <dl
                      class="fore"
                      v-for="c2 in c1.categoryChild"
                      :key="c2.categoryId"
                    >
                      <dt>
                        <a
                          href="javascript:;"
                          :data-categoryName="c2.categoryName"
                          :data-category2Id="c2.categoryId"
                          >{{ c2.categoryName }}</a
                        >
                      </dt>
                      <dd>
                        <em v-for="c3 in c2.categoryChild" :key="c3.categoryId">
                          <a
                            href="javascript:;"
                            :data-categoryName="c3.categoryName"
                            :data-category3Id="c3.categoryId"
                            >{{ c3.categoryName }}</a
                          >
                        </em>
                      </dd>
                    </dl>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </transition>
      </div>
      <nav class="nav">
        <a href="###">服装城</a>
        <a href="###">美妆馆</a>
        <a href="###">尚品汇超市</a>
        <a href="###">全球购</a>
        <a href="###">闪购</a>
        <a href="###">团购</a>
        <a href="###">有趣</a>
        <a href="###">秒杀</a>
      </nav>
    </div>
  </div>
</template>

<script>
/*
 1.dispatch()触发发请求的异步action调用===>数据从后台接口请求到Vuex的state
 2.store.state/mapState()读取vuex的state数据 ==>数据从state到组件的computed
 3.在模板中动态显示
*/
import { mapState } from "vuex";
import throttle from "lodash/throttle"; //只引入需要的模块

export default {
  name: "isNav",
  data() {
    return {
      currentIndex: -1, //需要显示子列表的分类项下标
      isShow: false, //是否显示一级列表
    };
  },
  created() {
    // 判断当前请求的是否为首页
    if (this.$route.path === "/") {
      this.isShow = true;
    }
  },

  computed: {
    // categoryList() {
    //   return this.$store.state.home.categoryList;
    // },
    ...mapState({
      categoryList: (state) => state.home.categoryList, //函数接收的是总装态，返回值为计算属性值
    }),
  },
  methods: {
    // 隐藏一级列表
    hideFirst() {
      this.currentIndex = -2; //当前已经离开整个div
      // 如果当前不是首页，隐藏一级列表
      if (this.$route.path !== "/") {
        this.isShow = false;
      }
    },
    // 显示一级列表
    showFirst() {
      // 标识当前已经进入包含分类的div了
      this.currentIndex = -1;
      // 保证显示一级列表
      this.isShow = true;
    },
    toSearch(event) {
      const target = event.target;
      const { categoryname, category1id, category2id, category3id } =
        target.dataset;
      if (categoryname) {
        const query = {
          categoryName: categoryname,
        };
        if (category1id) {
          query.category1Id = category1id;
        } else if (category2id) {
          query.category2Id = category2id;
        } else if (category3id) {
          query.category3Id = category3id;
        }
        this.$router.push({
          name: "search",
          query,
          params: this.$route.params, //需要携带上当前已有的params参数
        });
      }
    },
    // 显示指定下标的子分类列表 并用lodash节流
    showSubList: throttle(
      function (index) {
        if (this.currentIndex !== -2) {
          // 只有当还没有离开整个分类的div时才更新下标
          this.currentIndex = index;
        }
      },
      200
      // {
      //   trailing: false, //最后一次事件不处理
      // }
    ),
  },
};
</script>

<style lang="less" scoped>
.type-nav {
  border-bottom: 2px solid #e1251b;

  .container {
    width: 1200px;
    margin: 0 auto;
    display: flex;
    position: relative;

    .all {
      width: 210px;
      height: 45px;
      background-color: #e1251b;
      line-height: 45px;
      text-align: center;
      color: #fff;
      font-size: 14px;
      font-weight: bold;
    }

    .nav {
      a {
        height: 45px;
        margin: 0 22px;
        line-height: 45px;
        font-size: 16px;
        color: #333;
      }
    }

    .sort {
      position: absolute;
      left: 0;
      top: 45px;
      width: 210px;
      height: 461px;
      position: absolute;
      background: #fafafa;
      z-index: 999;

      // 指定过渡的样式
      &.slide-enter-active,
      .slide-leave-active {
        transition: all 0.5s;
      }
      // 指定隐藏的样式
      &.slide-enter,
      .slide-leave-to {
        opacity: 0;
        height: 0;
      }

      .all-sort-list2 {
        .item {
          h3 {
            line-height: 30px;
            font-size: 14px;
            font-weight: 400;
            overflow: hidden;
            padding: 0 20px;
            margin: 0;

            a {
              color: #333;
            }
          }

          .item-list {
            display: none;
            position: absolute;
            width: 734px;
            min-height: 460px;
            background: #f7f7f7;
            left: 210px;
            border: 1px solid #ddd;
            top: 0;
            z-index: 9999 !important;

            .subitem {
              float: left;
              width: 650px;
              padding: 0 4px 0 8px;

              dl {
                border-top: 1px solid #eee;
                padding: 6px 0;
                overflow: hidden;
                zoom: 1;

                &.fore {
                  border-top: 0;
                }

                dt {
                  float: left;
                  width: 54px;
                  line-height: 22px;
                  text-align: right;
                  padding: 3px 6px 0 0;
                  font-weight: 700;
                }

                dd {
                  float: left;
                  width: 415px;
                  padding: 3px 0 0;
                  overflow: hidden;

                  em {
                    float: left;
                    height: 14px;
                    line-height: 14px;
                    padding: 0 8px;
                    margin-top: 5px;
                    border-left: 1px solid #ccc;
                  }
                }
              }
            }
          }
          // 实现鼠标移入加一个active的类
          &.active {
            background: #ccc;
            .item-list {
              display: block;
            }
          }
        }
      }
    }
  }
}
</style>