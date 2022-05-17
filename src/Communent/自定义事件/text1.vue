<template>
  <div>
    <button @click="text1">isText1</button>
  </div>
</template>

<script>
export default {
  name: "isText",
  methods: {
    text1() {
      this.$emit("hahaha", "hahaa");
    },
  },
};
</script>

<style>
</style>