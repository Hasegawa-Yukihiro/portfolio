<template>
  <section class="contact" id="contact">
    <h2>Contact</h2>
    <i class="far fab fa-envelope text-center"></i>
    <font-awesome-icon :icon="['far', 'envelope']" size="8x" />
    <p>Web案件や制作の相談等のお問い合わせはこちらからお願い致します。</p>
    <p>
      <a href="mailto:y-hasegawa@advancer.co.jp">y-hasegawa@advancer.co.jp</a>
    </p>
  </section>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "Contact",
});
</script>

<style scoped src="./styles.css" />
