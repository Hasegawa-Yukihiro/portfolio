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
          @click.native="handleScrollIntoContent('profile')"
        />
        <NavListItem
          text="Skills"
          @click.native="handleScrollIntoContent('skills')"
        />
        <NavListItem
          text="Works"
          @click.native="handleScrollIntoContent('works')"
        />
        <NavListItem
          text="Contact"
          @click.native="handleScrollIntoContent('contact')"
        />
      </ul>
    </nav>
  </header>
</template>

<script src="./hooks.ts" />

<style scoped src="./styles.css" />
