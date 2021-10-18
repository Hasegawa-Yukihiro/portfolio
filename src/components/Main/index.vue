<template>
  <div>
    <div class="mainImg">
      <img :src="pc_img" alt="pc" />
    </div>
    <Profile />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Profile from "../Profile/index.vue";

export default Vue.extend({
  name: "Main",
  components: {
    Profile,
  },
  data() {
    return {
      pc_img: require("../../assets/images/pc.jpg"),
    };
  },
});
</script>

<style scoped src="./styles.css" />
