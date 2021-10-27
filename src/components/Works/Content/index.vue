<template>
  <div class="content">
    <a :href="href" target="_">
      <img :src="img" />
    </a>
    <h4 class="title">{{ title }}</h4>
    <p class="explanation">{{ explanation }}</p>
  </div>
</template>

<script lang="ts">
export default {
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
};
</script>

<style scoped src="./styles.css" />
