<template>
  <div>
    <Nav></Nav>
    <div class="main">
      <div class="py-container">
        <!--面包屑-->
        <div class="bread">
          <ul class="fl sui-breadcrumb">
            <li>
              <a href="#">全部结果</a>
            </li>
          </ul>
          <ul class="fl sui-tag">
            <li class="with-x" v-show="options.categoryName">
              {{ options.categoryName }}<i @click="removeCategory">×</i>
            </li>
            <li class="with-x" v-show="options.keyword">
              {{ options.keyword }}<i @click="removeKeyword">×</i>
            </li>
            <li class="with-x" v-show="options.trademark">
              {{ options.trademark }}<i @click="removeTrademark">×</i>
            </li>
            <li
              class="with-x"
              v-for="(prop, index) in options.props"
              :key="prop"
            >
              {{ prop }}<i @click="removeProp(index)">×</i>
            </li>
          </ul>
        </div>

        <!--筛选组件-->
        <SearchSelector :setTrademark="setTrademark" @addProp="addProp" />

        <div class="details clearfix">
          <!--排序选项列表-->
          <div class="sui-navbar">
            <div class="navbar-inner filter">
              <ul class="sui-nav">
                <!-- 红色选中背景 判断order中的第一个值是否为1 为1显示综合排序 -->
                <li
                  :class="{ active: orderArr[0] === '1' }"
                  @click="setOrder('1')"
                >
                  <a href="javascript:;">
                    综合
                    <i
                      class="iconfont"
                      :class="orderArr[1] === 'desc' ? 'icon-down' : 'icon-up'"
                      v-if="orderArr[0] === '1'"
                    ></i>
                  </a>
                </li>
                <li
                  :class="{ active: orderArr[0] === '3' }"
                  @click="setOrder('3')"
                >
                  <a href="javascript:;"
                    >销量
                    <i
                      class="iconfont"
                      :class="orderArr[1] === 'desc' ? 'icon-down' : 'icon-up'"
                      v-if="orderArr[0] === '3'"
                    ></i>
                  </a>
                </li>
                <li>
                  <a href="#">新品</a>
                </li>
                <li>
                  <a href="#">评价</a>
                </li>
                <li
                  :class="{ active: orderArr[0] === '2' }"
                  @click="setOrder('2')"
                >
                  <a href="javascript:;">
                    价格
                    <i
                      class="iconfont"
                      :class="orderArr[1] === 'desc' ? 'icon-down' : 'icon-up'"
                      v-if="orderArr[0] === '2'"
                    ></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <!-- 手机数据信息 -->
          <div class="goods-list">
            <ul class="yui3-g">
              <li class="yui3-u-1-5" v-for="item in goodsList" :key="item.id">
                <div class="list-wrap">
                  <div class="p-img">
                    <!-- <router-link :to="'/detail/' + item.id"> -->
                    <a href="javascript:;" @click="toDetail(item.id)">
                      <img :src="item.defaultImg" />
                    </a>
                    <!-- </router-link> -->
                  </div>
                  <div class="price">
                    <strong>
                      <em>¥</em>
                      <i>{{ item.price }}</i>
                    </strong>
                  </div>
                  <div class="attr">
                    <a href="javascript:;" @click="toDetail(item.id)">
                      <!-- <router-link :to="'/detail/' + item.id"> -->
                      {{ item.title }}
                    </a>
                    <!-- </router-link> -->
                  </div>
                  <div class="commit">
                    <i class="command">已有<span>2000</span>人评价</i>
                  </div>
                  <div class="operate">
                    <a
                      href="success-cart.html"
                      target="_blank"
                      class="sui-btn btn-bordered btn-danger"
                      >加入购物车</a
                    >
                    <a href="javascript:void(0);" class="sui-btn btn-bordered"
                      >收藏</a
                    >
                  </div>
                </div>
              </li>
            </ul>
          </div>
          <!-- 分页 -->
          <Pagination
            :currentPage="options.pageNo"
            :pageSize="options.pageSize"
            :total="total"
            :showPageNo="5"
            @currentChange="getGoodsList"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import SearchSelector from "./SearchSelector/SearchSelector";
export default {
  name: "SearchList",
  data() {
    return {
      options: {
        category1Id: "",
        category2Id: "",
        category3Id: "",
        categoryName: "",

        keyword: "",
        props: [], //属性数据
        // trademark: "", //品牌数据

        order: "1:desc", //条件数据 排序方式 1：综合，2：价格 asc：升序， desc：降序
        pageNo: 1, //页码
        pageSize: 5, //每页数量
      },
    };
  },
  components: {
    SearchSelector,
  },
  // created() {
  //   this.updateParams();
  //   this.getGoodsList();
  // },
  computed: {
    ...mapGetters(["goodsList", "total"]),
    orderArr() {
      // 得到包含当前分类项标识(orderFlag)和排序(orderType)方式的数组
      return this.options.order.split(":");
    },
  },
  methods: {
    toDetail(id) {
      this.$router.push("/detail/" + id);
      this.$store.dispatch("getSkuDetailInfo", id);
    },
    // 更新请求数据
    updateParams() {
      const { keyword } = this.$route.params;
      const { category1Id, category2Id, category3Id, categoryName } =
        this.$route.query;
      this.options = {
        //将数据更新
        ...this.options,
        keyword,
        category1Id,
        category2Id,
        category3Id,
        categoryName,
      };
    },
    // 异步发送请求
    getGoodsList(page = 1) {
      this.options.pageNo = page;
      this.$store.dispatch("getProductList", this.options);
    },
    // 删除query参数跳转路由更新面包屑
    removeCategory() {
      this.options.category1Id = "";
      this.options.category2Id = "";
      this.options.category3Id = "";
      this.options.categoryName = "";
      this.$router.replace({
        name: "search",
        params: this.$route.params,
      });
    },
    // 删除params参数更新面包屑
    removeKeyword() {
      this.options.keyword = "";
      this.$router.replace({
        //路由跳转会自动发请求
        name: "search",
        query: this.$route.query,
      });
      // 清除header组件中的keyword
      this.$bus.$emit("removeKeyword");
    },
    // 添加品牌数据
    setTrademark(trade) {
      // 如果当前品牌已经在条件中了，直接结束
      if (trade === this.options.trademark) return;
      // 将数据传入options中
      // this.options.trademark = trade;

      this.$set(this.options, "trademark", trade);
      // 发送请求
      this.getGoodsList();
    },
    // 删除品牌面包屑
    removeTrademark() {
      // 重置品牌条件数据
      // this.options.trademark = "";
      this.$delete(this.options, "trademark");
      this.getGoodsList();
    },
    // 添加一个属性条件
    addProp(prop) {
      const { props } = this.options;
      if (props.includes(prop)) return; //includes方法用来判断一个数组是否包含一个指定的值 如果为true代表包含
      props.push(prop);
      this.getGoodsList();
    },
    // 删除一个属性条件
    removeProp(index) {
      // 删除props 中index的元素
      this.options.props.splice(index, 1);
      this.getGoodsList();
    },
    // 设置新的排序搜索方式
    setOrder(orderFlag) {
      // 得到当前的排序项和排序方式 flag:1 type:desc
      let [flag, type] = this.orderArr;
      // 点击当前排序项只需要改变orderType的值
      if (orderFlag === flag) {
        type = type === "desc" ? "asc" : "desc";
      } else {
        flag = orderFlag;
        type = "desc";
      }
      this.options.order = flag + ":" + type;
      this.getGoodsList();
    },
    // 当前的页码发生改变的事件回调
    // currentChange(page) {
    //   this.options.pageNo = page;
    //   this.getGoodsList();
    // },
  },
  watch: {
    /*$route() {
      //监视路由状态变化
      this.updateParams();
      this.getGoodsList();
    },*/
    $route: {
      handler() {
        this.updateParams();
        this.getGoodsList();
      },
      immediate: true, //初始化立即执行第一次
    },
  },
};
</script>

<style lang="less" scoped>
.main {
  margin: 10px 0;

  .py-container {
    width: 1200px;
    margin: 0 auto;

    .bread {
      margin-bottom: 5px;
      overflow: hidden;

      .sui-breadcrumb {
        padding: 3px 15px;
        margin: 0;
        font-weight: 400;
        border-radius: 3px;
        float: left;

        li {
          display: inline-block;
          line-height: 18px;

          a {
            color: #666;
            text-decoration: none;

            &:hover {
              color: #4cb9fc;
            }
          }
        }
      }

      .sui-tag {
        margin-top: -5px;
        list-style: none;
        font-size: 0;
        line-height: 0;
        padding: 5px 0 0;
        margin-bottom: 18px;
        float: left;

        .with-x {
          font-size: 12px;
          margin: 0 5px 5px 0;
          display: inline-block;
          overflow: hidden;
          color: #000;
          background: #f7f7f7;
          padding: 0 7px;
          height: 20px;
          line-height: 20px;
          border: 1px solid #dedede;
          white-space: nowrap;
          transition: color 400ms;
          cursor: pointer;

          i {
            margin-left: 10px;
            cursor: pointer;
            font: 400 14px tahoma;
            display: inline-block;
            height: 100%;
            vertical-align: middle;
          }

          &:hover {
            color: #28a3ef;
          }
        }
      }
    }

    .details {
      margin-bottom: 5px;

      .sui-navbar {
        overflow: visible;
        margin-bottom: 0;

        .filter {
          min-height: 40px;
          padding-right: 20px;
          background: #fbfbfb;
          border: 1px solid #e2e2e2;
          padding-left: 0;
          border-radius: 0;
          box-shadow: 0 1px 4px rgba(0, 0, 0, 0.065);

          .sui-nav {
            position: relative;
            left: 0;
            display: block;
            float: left;
            margin: 0 10px 0 0;

            li {
              float: left;
              line-height: 18px;

              a {
                display: block;
                cursor: pointer;
                padding: 11px 15px;
                color: #777;
                text-decoration: none;
              }

              &.active {
                a {
                  background: #e1251b;
                  color: #fff;
                }
              }
            }
          }
        }
      }

      .goods-list {
        margin: 20px 0;

        ul {
          display: flex;
          flex-wrap: wrap;

          li {
            height: 100%;
            width: 20%;
            margin-top: 10px;
            line-height: 28px;

            .list-wrap {
              .p-img {
                padding-left: 15px;
                width: 215px;
                height: 255px;

                a {
                  color: #666;

                  img {
                    max-width: 100%;
                    height: auto;
                    vertical-align: middle;
                  }
                }
              }

              .price {
                padding-left: 15px;
                font-size: 18px;
                color: #c81623;

                strong {
                  font-weight: 700;

                  i {
                    margin-left: -5px;
                  }
                }
              }

              .attr {
                padding-left: 15px;
                width: 85%;
                overflow: hidden;
                margin-bottom: 8px;
                min-height: 38px;
                cursor: pointer;
                line-height: 1.8;
                display: -webkit-box;
                -webkit-box-orient: vertical;
                -webkit-line-clamp: 2;

                a {
                  color: #333;
                  text-decoration: none;
                }
              }

              .commit {
                padding-left: 15px;
                height: 22px;
                font-size: 13px;
                color: #a7a7a7;

                span {
                  font-weight: 700;
                  color: #646fb0;
                }
              }

              .operate {
                padding: 12px 15px;

                .sui-btn {
                  display: inline-block;
                  padding: 2px 14px;
                  box-sizing: border-box;
                  margin-bottom: 0;
                  font-size: 12px;
                  line-height: 18px;
                  text-align: center;
                  vertical-align: middle;
                  cursor: pointer;
                  border-radius: 0;
                  background-color: transparent;
                  margin-right: 15px;
                }

                .btn-bordered {
                  min-width: 85px;
                  background-color: transparent;
                  border: 1px solid #8c8c8c;
                  color: #8c8c8c;

                  &:hover {
                    border: 1px solid #666;
                    color: #fff !important;
                    background-color: #666;
                    text-decoration: none;
                  }
                }

                .btn-danger {
                  border: 1px solid #e1251b;
                  color: #e1251b;

                  &:hover {
                    border: 1px solid #e1251b;
                    background-color: #e1251b;
                    color: white !important;
                    text-decoration: none;
                  }
                }
              }
            }
          }
        }
      }

      .page {
        width: 733px;
        height: 66px;
        overflow: hidden;
        float: right;

        .sui-pagination {
          margin: 18px 0;

          ul {
            margin-left: 0;
            margin-bottom: 0;
            vertical-align: middle;
            width: 490px;
            float: left;

            li {
              line-height: 18px;
              display: inline-block;

              a {
                position: relative;
                float: left;
                line-height: 18px;
                text-decoration: none;
                background-color: #fff;
                border: 1px solid #e0e9ee;
                margin-left: -1px;
                font-size: 14px;
                padding: 9px 18px;
                color: #333;
              }

              &.active {
                a {
                  background-color: #fff;
                  color: #e1251b;
                  border-color: #fff;
                  cursor: default;
                }
              }

              &.prev {
                a {
                  background-color: #fafafa;
                }
              }

              &.disabled {
                a {
                  color: #999;
                  cursor: default;
                }
              }

              &.dotted {
                span {
                  margin-left: -1px;
                  position: relative;
                  float: left;
                  line-height: 18px;
                  text-decoration: none;
                  background-color: #fff;
                  font-size: 14px;
                  border: 0;
                  padding: 9px 18px;
                  color: #333;
                }
              }

              &.next {
                a {
                  background-color: #fafafa;
                }
              }
            }
          }

          div {
            color: #333;
            font-size: 14px;
            float: right;
            width: 241px;
          }
        }
      }
    }
  }
}
</style>