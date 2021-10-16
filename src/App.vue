<template>
  <Header />
</template>

<script lang="ts">
import Vue from "vue";
import Header from "./components/Header/inde.vue";

export default Vue.extend({
  name: "App",
  components: {
    Header,
  },
});
</script>
