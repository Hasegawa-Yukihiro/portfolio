<template>
  <li class="navListItem">
    <span>{{ text }} </span>
  </li>
</template>

<script lang="ts">
export default {
  name: "NavListItem",
  props: {
    text: {
      type: String,
      required: true,
    },
  },
};
</script>

<style scoped>
.navListItem {
  cursor: pointer;
}
</style>
