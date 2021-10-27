<template>
  <section class="works" id="works">
    <h2>Works</h2>
    <div class="wrapper">
      <Content
        title="digsmile"
        :img="digsmileImg"
        explanation="クリスタ提供のデザインカンプ（XD）からのコーディング。"
        href="https://Hasegawa-Yukihiro.github.io/digsmile/index.html"
      />
      <Content
        title="Portfolio"
        :img="portfolioImg"
        href="#"
        :explanation="portfolioExplanation"
      />
      <Content
        title="System Solution"
        :img="systemSolutionImg"
        href="https://hasegawa-yukihiro.github.io/System-Solution/"
        :explanation="systemSolutionExplanation"
      />
      <Content
        :title="takatsudoTitle"
        :img="takatsudoImg"
        href="http://www.takatsudo.co.jp/"
        :explanation="takatsudoExplanation"
      />
      <Content
        title="ECREDE蒲田EAST"
        :img="ustrustImg"
        href="https://ustrust.co.jp/lp02/"
        :explanation="ustrustExplanation"
      />
    </div>
  </section>
</template>

<script lang="ts">
import Content from "./Content/index.vue";

export default {
  name: "Works",
  components: {
    Content,
  },
  data() {
    return {
      digsmileImg: require("../../assets/images/digsmile.png"),
      portfolioImg: require("../../assets/images/portfolio.png"),
      systemSolutionImg: require("../../assets/images/ss.png"),
      takatsudoImg: require("../../assets/images/takatsudo.png"),
      ustrustImg: require("../../assets/images/ustrust.png"),
      takatsudoTitle: `株式会社高津戸電子\nティーズ・コム株式会社`,
      portfolioExplanation: `現在のページです\nVue × TypeScriptで作成しております。`,
      systemSolutionExplanation: `弊社のコーポレートサイトになります。\nBootstrap4を活用してレスポンシブ対応のサイトに仕上がっております。`,
      takatsudoExplanation: `株式会社高津戸電子/ティーズ・コム株式会社様のWebサイトを作成させていただきました。\n弊社デザイナーにて作成したUIデザインを基にHTML/Scss/jQueryを用いて実装しております。`,
      ustrustExplanation: `株式会社 USTRUST様のLPを作成させていただきました。\n弊社デザイナーにて作成したUIデザインを基にHTML/CSSを用いて実装しております。`,
    };
  },
};
</script>

<style scoped src="./styles.css" />
