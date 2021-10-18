<template>
  <section class="mainProfile" id="profile">
    <div class="mainProfileImg">
      <img :src="profile_img" alt="profileImg" />
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
