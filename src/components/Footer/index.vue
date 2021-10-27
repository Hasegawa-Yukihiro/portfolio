<template>
  <footer class="footer">
    <font-awesome-icon class="toTop" :icon="['fas', 'chevron-up']" size="3x" />
    <div class="copyright">
      <p>&copy; Copyright 2020 Hasegawa All Rights Reserved.</p>
    </div>
  </footer>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "Footer",
});
</script>

<style scoped src="./styles.css" />
