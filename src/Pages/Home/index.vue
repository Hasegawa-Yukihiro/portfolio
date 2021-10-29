<template>
  <div>
    <Header />
    <Main />
    <Footer />
  </div>
</template>

<script lang="ts">
import Header from "../../components/Header/index.vue";
import Main from "../../components/Main/index.vue";
import Footer from "../../components/Footer/index.vue";

export default {
  name: "App",
  components: {
    Header,
    Main,
    Footer,
  },
};
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
  font-weight: normal;
}

h4 {
  font-size: 25px;
  font-weight: normal;
}

@media only screen and (max-width: 760px) {
  h2 {
    font-size: 40px;
  }

  h3 {
    font-size: 22px;
  }

  h4 {
    font-size: 18px;
  }
}
</style>
