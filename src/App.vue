<template>
  <div>
    <Header />
    <Main />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Header from "./components/Header/index.vue";
import Main from "./components/Main/index.vue";

export default Vue.extend({
  name: "App",
  components: {
    Header,
    Main,
  },
});
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-size: 14px;
  color: #333;
  font-family: Helvetica, "游ゴシック", "Yu Gothic", YuGothic, HiraKakuProN-W3,
    "メイリオ", Meiryo, sans-serif;
  line-height: 1.9;
}
</style>
