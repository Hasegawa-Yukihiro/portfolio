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
        <li>
          <span
            class="headerNavLink"
            @click="handleScrollIntoContent('profile')"
          >
            Profile
          </span>
        </li>
        <li>
          <span
            class="headerNavLink"
            @click="handleScrollIntoContent('skills')"
          >
            Skills
          </span>
        </li>
        <li>
          <span class="headerNavLink" @click="handleScrollIntoContent('works')">
            Works
          </span>
        </li>
        <li>
          <span
            class="headerNavLink"
            @click="handleScrollIntoContent('contact')"
          >
            Contact
          </span>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script src="./hooks.ts" />

<style scoped src="./styles.css" />
