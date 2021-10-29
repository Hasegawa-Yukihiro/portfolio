<template>
  <header class="header">
    <div class="wrapper">
      <h1><img :src="logoImg" alt="logo" /></h1>
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
        <NavListItem
          text="Profile"
          class="navListItem"
          @click.native="handleScrollIntoContent('profile')"
        />
        <NavListItem
          text="Skills"
          class="navListItem"
          @click.native="handleScrollIntoContent('skills')"
        />
        <NavListItem
          text="Works"
          class="navListItem"
          @click.native="handleScrollIntoContent('works')"
        />
        <NavListItem
          text="Contact"
          class="navListItem"
          @click.native="handleScrollIntoContent('contact')"
        />
      </ul>
    </nav>
  </header>
</template>

<script lang="ts" src="./hooks.ts">
import NavListItem from "./NavListItem/index.vue";

export default {
  name: "Header",
  components: {
    NavListItem,
  }
}
</script>

<style scoped src="./styles.css" />
