<template>
  <section class="mainWorks" id="works">
    <h2>Works</h2>
    <div class="wrapper">
      <Content
        title="digsmile"
        :img="digsmile_img"
        explanation="クリスタ提供のデザインカンプ（XD）からのコーディング。"
        href="https://Hasegawa-Yukihiro.github.io/digsmile/index.html"
      />
      <Content title="Portfolio" :img="portfolio_img" />
      <Content title="digsmile" :img="digsmile_img" />
      <Content title="digsmile" :img="digsmile_img" />
    </div>
  </section>
</template>

<script lang="ts">
import Vue from "vue";
import Content from "./Content/index.vue";

export default Vue.extend({
  name: "Works",
  components: {
    Content,
  },
  data() {
    return {
      digsmile_img: require("../../assets/images/digsmile.png"),
      portfolio_img: require("../../assets/images/portfolio.png"),
    };
  },
});
</script>

<style scoped src="./styles.css" />
