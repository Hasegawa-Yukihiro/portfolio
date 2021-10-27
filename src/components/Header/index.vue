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
        <li><a class="headerNavLink" href="#profile">Profile</a></li>
        <li><a class="headerNavLink" href="#skills">Skills</a></li>
        <li><a class="headerNavLink" href="#works">Works</a></li>
        <li><a class="headerNavLink" href="#contact">Contact</a></li>
      </ul>
    </nav>
  </header>
</template>

<script src="./hooks.ts" />

<style scoped src="./styles.css" />
