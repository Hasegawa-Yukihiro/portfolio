<template>
  <section class="profile" id="profile">
    <div class="profileImg">
      <img :src="profileImg" alt="profileImg" />
    </div>
    <div class="profileText">
      <h2>Hasegawa Yukihiro</h2>
      <p>
        1996年生まれ。神奈川県川崎市出身。産業能率大学経営学部卒業。 <br />
        新しいWebサービスを創出するという夢の実現のため、新卒でアドバンサーに入社。
        <br />
        1年間モバイル販売業務から営業を学び、2年目には企画から開発、運営までできるPM（プロジェクトマネージャー）を目指しエンジニア職にジョブチェンジ。<br />
        LPやコーポレート作成等のWeb制作やReact・TypeScriptを用いた新規画面開発やVue.jsを用いたWebアプリの新規機能実装やバグ改修のPJに携わっています。<br />
        どうぞよろしくお願いします。
      </p>
    </div>
  </section>
</template>

<script lang="ts">
export default {
  name: "Profile",
  data() {
    return {
      profileImg: require("../../assets/images/me.png"),
    };
  },
};
</script>

<style scoped src="./styles.css" />
