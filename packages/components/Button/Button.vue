
<script setup lang="ts">
import type { ButtonProps,  ButtonInstance } from "./types";
import { ref } from 'vue'
import { throttle } from 'lodash-es'
/** 
 * 组件约束
 * Button.vue
 * Button.test.tsc
 * types.ts
 * style.css
 * constants.ts
 */

defineOptions({
  name: 'HaoButton'
})
const props = withDefaults(defineProps<ButtonProps>(), {
  tag: 'button',
  nativeType: 'button',
  useThrottle: true,
  throttleDuration: 500
})
const emits = defineEmits<{
  (e: "click", value: MouseEvent): void;
}>()

const slots = defineSlots()

const _ref = ref<HTMLButtonElement>()
const handleButtonClick = (e: MouseEvent) => emits('click', e)
const handleButtonClickThrottled = throttle(handleButtonClick, props.throttleDuration)

defineExpose<ButtonInstance>({
  ref: _ref
})
</script>

<template>
  <component 
    :is="props.tag"
    ref="_ref"
    class="hao-button"
    :type="tag === 'button' ? nativeType : undefined"
    :disabled="disabled || loading?true : void 0"
    :class="{
      [`hao-button--${type}`]: type,
      [`hao-button--${size}`]: size,
      'is-plain': plain,
      'is-round': round,
      'is-circle': circle,
      'is-disabled': disabled,
      'is-loading': loading
    }"
    @click="(e: MouseEvent)=> useThrottle?handleButtonClickThrottled(e): handleButtonClick(e)"
  >
  <slot> </slot>
  </component>
</template>

<style scoped>
@import './style.css';
</style>