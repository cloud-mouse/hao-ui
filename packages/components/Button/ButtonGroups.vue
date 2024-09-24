<script setup lang="ts">
import type { ButtonSize, ButtonType } from "./types";
import { provide, reactive, toRef } from "vue";
import { BUTTON_GROUP_CTX_KEY } from "./constants";

defineOptions({
  name: "HaoButtonGroup",
});
const props = defineProps<{
  size?: ButtonSize;
  type?: ButtonType;
  disabled?: boolean;
}>();

provide(
  BUTTON_GROUP_CTX_KEY,
  reactive({
    size: toRef(props, "size"),
    type: toRef(props, "type"),
    disabled: toRef(props, "disabled"),
  })
);
</script>

<template>
  <div class="hao-button-group">
    <slot></slot>
  </div>
</template>

<style scoped>
@import "./style.css";
</style>
