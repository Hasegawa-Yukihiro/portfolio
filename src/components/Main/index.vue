<template>
  <div>
    <div class="mainImg">
      <img :src="pcImg" alt="pc" />
    </div>
    <div class="wrapper">
      <Profile />
      <Skills />
      <Works />
      <Contact />
    </div>
  </div>
</template>

<script lang="ts">
import Profile from "../Profile/index.vue";
import Skills from "../Skills/index.vue";
import Works from "../Works/index.vue";
import Contact from "../Contact/index.vue";

export default {
  name: "Main",
  components: {
    Profile,
    Skills,
    Works,
    Contact,
  },
  data() {
    return {
      pcImg: require("../../assets/images/pc.jpg"),
    };
  },
};
</script>

<style scoped src="./styles.css" />
