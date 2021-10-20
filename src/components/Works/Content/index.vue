<template>
  <div class="content">
    <a :href="href" target="_">
      <img :src="img" />
    </a>
    <h4>{{ title }}</h4>
    <p>{{ explanation }}</p>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "Content",
  props: {
    img: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    href: {
      type: String,
      required: true,
    },
    explanation: {
      type: String,
      required: true,
    },
  },
});
</script>

<style scoped src="./styles.css" />
