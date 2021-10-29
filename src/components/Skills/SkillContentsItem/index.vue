<template>
  <div class="skillContentsItem">
    <font-awesome-icon :icon="findIcon()" size="8x" />
    <h4>{{ title }}</h4>
  </div>
</template>

<script lang="ts">
import { findIconDefinition } from "@fortawesome/fontawesome-svg-core";

export default {
  name: "SkillContentsItem",
  props: {
    icon: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      default: "fas",
    },
    title: {
      type: String,
      required: true,
    },
  },
  methods: {
    findIcon() {
      const findIcon = findIconDefinition({
        prefix: this.type,
        iconName: this.icon,
      });

      return findIcon;
    },
  },
};
</script>
