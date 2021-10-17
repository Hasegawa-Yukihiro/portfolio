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

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
</style>
