<template>
  <footer class="footer">
    <font-awesome-icon
      class="toTop"
      :icon="['fas', 'chevron-up']"
      size="3x"
      @click="handleScrollTop"
    />
    <div class="copyright">
      <p>&copy; Copyright 2020 Hasegawa All Rights Reserved.</p>
    </div>
  </footer>
</template>

<script src="./hooks.ts" />

<style scoped src="./styles.css" />
