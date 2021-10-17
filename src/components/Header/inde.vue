<template>
  <header>
    <h1><img :src="logo_img" alt="logo" /></h1>
    <!-- <nav>
      <ul class="header__nav">
        <li><a class="header__nav__btn" href="#profile">Profile</a></li>
        <li><a class="header__nav__btn" href="#skills">Skills</a></li>
        <li><a class="header__nav__btn" href="#works">Works</a></li>
        <li><a class="header__nav__btn" href="#contact">Contact</a></li>
      </ul>
    </nav>
    <ul class="header__social">
      <li>
        <a
          href="http://twitter.com/share?text=Hasegawa's Portfolio&url=https://Hasegawa-Yukihiro.github.io/profile/"
          ><i class="fab fa-2x fa-twitter" aria-hidden="true"></i
        ></a>
      </li>
      <li>
        <a
          href="http://www.facebook.com/share.php?u=https://Hasegawa-Yukihiro.github.io/profile/"
          ><i class="fab fa-2x fa-facebook-f" aria-hidden="true"></i
        ></a>
      </li>
    </ul> -->
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
