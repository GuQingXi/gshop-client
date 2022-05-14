<!--
 * @Author: 顾清曦
 * @Date: 2022-05-04 12:18:03
 * @LastEditors: 顾清曦
 * @LastEditTime: 2022-05-12 20:47:02
 * @FilePath: \gshop-client\src\components\Header\index.vue
 * @Description: 
 * 要加油
 * 归属于顾清曦
-->
<template>
  <header class="header">
    <!-- 头部的第一行 -->
    <div class="top">
      <div class="container">
        <div class="loginList">
          <p>尚品汇欢迎您！</p>
          <p v-if="$store.state.user.userInfo.name">
            <!-- <a href="javascript:;">用户名：</a> -->
            <a href="javascript:;" @click="toRegister">
              {{ $store.state.user.userInfo.name }}
            </a>
            <a href="javascript:;" class="register" @click="logout">退出登录</a>
          </p>
          <p v-else>
            <span>请</span>
            <a href="javascript:;" @click="toLogin">登录</a>
            <a href="javascript:;" class="register" @click="toRegister"
              >免费注册</a
            >
          </p>
        </div>
        <div class="typeList">
          <a href="###">我的订单</a>
          <!-- <a href="###">我的购物车</a> -->
          <router-link to="/shopcart">我的购物车</router-link>
          <!-- <a href="###">我的尚品汇</a> -->
          <router-link to="/">我的尚品汇</router-link>
          <a href="###">尚品汇会员</a>
          <a href="###">企业采购</a>
          <a href="###">关注尚品汇</a>
          <a href="###">合作招商</a>
          <a href="###">商家后台</a>
        </div>
      </div>
    </div>
    <!--头部第二行 搜索区域-->
    <div class="bottom">
      <h1 class="logoArea">
        <router-link to="/">
          <img src="./images/logo.png" alt="" />
        </router-link>
      </h1>
      <div class="searchArea">
        <form action="###" class="searchForm">
          <input
            type="text"
            id="autocomplete"
            class="input-error input-xxlarge"
            v-model.trim="keyword"
          />
          <button
            class="sui-btn btn-xlarge btn-danger"
            type="button"
            @click="Search"
          >
            搜索
          </button>
        </form>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "isHeader",
  data() {
    return {
      keyword: "",
    };
  },
  mounted() {
    // 在header中绑定自定义事件监听，在回调中清除数据
    this.$bus.$on("removeKeyword", () => {
      this.keyword = "";
    });
  },
  methods: {
    async logout() {
      try {
        await this.$store.dispatch("getUserLogout");
        alert("退出成功");
        this.$router.push("/");
      } catch (error) {
        alert(error);
      }
    },
    Search() {
      const location = {
        name: "search",
        query: this.$route.query, //将当前就有的query鞋带上
      };
      // 只有有数据时才携带params参数
      if (this.keyword) {
        location.params = {
          keyword: this.keyword,
        };
      }
      // this.$router.push(location).catch(() => {});
      if (this.$route.name === "search") {
        this.$router.replace(location);
      } else {
        this.$router.push(location);
      }
    },
    toLogin() {
      this.$router.push("/login");
    },
    toRegister() {
      this.$router.push("/register");
    },
  },
  beforeDestroy() {
    // 解绑事件监听
    this.$bus.$off("removeKeyword");
  },
};
</script>

<style lang="less" scoped>
.header {
  & > .top {
    background-color: #eaeaea;
    height: 30px;
    line-height: 30px;

    .container {
      width: 1200px;
      margin: 0 auto;
      overflow: hidden;

      .loginList {
        float: left;

        p {
          float: left;
          margin-right: 10px;

          .register {
            border-left: 1px solid #b3aeae;
            padding: 0 5px;
            margin-left: 5px;
          }
        }
      }

      .typeList {
        float: right;

        a {
          padding: 0 10px;

          & + a {
            border-left: 1px solid #b3aeae;
          }
        }
      }
    }
  }

  & > .bottom {
    width: 1200px;
    margin: 0 auto;
    overflow: hidden;

    .logoArea {
      float: left;

      .logo {
        img {
          width: 175px;
          margin: 25px 45px;
        }
      }
    }

    .searchArea {
      float: right;
      margin-top: 35px;

      .searchForm {
        overflow: hidden;

        input {
          box-sizing: border-box;
          width: 490px;
          height: 32px;
          padding: 0px 4px;
          border: 2px solid #ea4a36;
          float: left;

          &:focus {
            outline: none;
          }
        }

        button {
          height: 32px;
          width: 68px;
          background-color: #ea4a36;
          border: none;
          color: #fff;
          float: left;
          cursor: pointer;

          &:focus {
            outline: none;
          }
        }
      }
    }
  }
}
</style>