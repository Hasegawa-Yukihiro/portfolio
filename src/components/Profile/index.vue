<template>
  <section class="mainProfile" id="profile">
    <div class="mainProfileImg">
      <img :src="profile_img" alt="profileImg" />
    </div>
    <div class="mainProfileText">
      <h2>Hasegawa Yukihiro</h2>
      <p>
        1996年生まれ。神奈川県川崎市出身。産業能率大学経営学部卒業。 <br />
        新しいWebサービスを創出するという夢の実現のため、新卒でアドバンサーに入社。
        <br />
        1年間モバイル販売業務から営業を学び、2年目には企画から開発、運営までできるPM（プロジェクトマネージャー）を目指しエンジニア職にジョブチェンジ。<br />
        LPやコーポレート作成等のWeb制作やReact・TypeScriptを用いた新規画面開発のPJに携わっています。<br />
        どうぞよろしくお願いします。
      </p>
    </div>
  </section>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "Profile",
  data() {
    return {
      profile_img: require("../../assets/images/me.png"),
    };
  },
});
</script>

<style scoped src="./styles.css" />
