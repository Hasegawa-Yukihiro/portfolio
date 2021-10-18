<template>
  <header class="header">
    <div class="wrapper">
      <h1><img :src="logo_img" alt="logo" /></h1>
      <ul class="headerSocial">
        <li>
          <a href="https://twitter.com/hsgw_dot">
            <font-awesome-icon :icon="['fab', 'twitter']" size="2x" />
          </a>
        </li>
        <li>
          <a href="https://github.com/Hasegawa-Yukihiro">
            <font-awesome-icon :icon="['fab', 'github']" size="2x" />
          </a>
        </li>
      </ul>
    </div>
    <nav>
      <ul class="headerNav">
        <li><a class="headerNavLink" href="#profile">Profile</a></li>
        <li><a class="headerNavLink" href="#skills">Skills</a></li>
        <li><a class="headerNavLink" href="#works">Works</a></li>
        <li><a class="headerNavLink" href="#contact">Contact</a></li>
      </ul>
    </nav>
  </header>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "Header",
  data() {
    return {
      logo_img: require("../../assets/images/logo_ad.png"),
    };
  },
});
</script>

<style scoped src="./styles.css" />
