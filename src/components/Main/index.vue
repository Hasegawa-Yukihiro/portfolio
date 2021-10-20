<template>
  <div>
    <div class="mainImg">
      <img :src="pc_img" alt="pc" />
    </div>
    <div class="wrapper">
      <Profile />
      <Skills />
      <Works />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Profile from "../Profile/index.vue";
import Skills from "../Skills/index.vue";
import Works from "../Works/index.vue";

export default Vue.extend({
  name: "Main",
  components: {
    Profile,
    Skills,
    Works,
  },
  data() {
    return {
      pc_img: require("../../assets/images/pc.jpg"),
    };
  },
});
</script>

<style scoped src="./styles.css" />
