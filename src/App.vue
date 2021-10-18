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
@import url("https://fonts.googleapis.com/css2?family=Lato:wght@100&display=swap");

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

img {
  max-width: 100%;
  height: auto;
}

h2 {
  font-size: 50px;
  font-family: "Lato", sans-serif;
}

h3 {
  font-size: 35px;
}

h4 {
  font-size: 25px;
}
</style>
