<script setup lang="ts">
import type { ButtonProps, ButtonInstance } from './types'
import { ref, computed, inject } from 'vue'
import { throttle } from 'lodash-es'
import { BUTTON_GROUP_CTX_KEY } from "./constants";
import HaoIcon from '../Icon/Icon.vue'

defineOptions({
  name: 'HaoButton',
})
const props = withDefaults(defineProps<ButtonProps>(), {
  tag: 'button',
  nativeType: 'button',
  useThrottle: true,
  throttleDuration: 500,
})
const emits = defineEmits<{
  (e: 'click', value: MouseEvent): void
}>()

const slots = defineSlots()
const buttonGroupCtx = inject(BUTTON_GROUP_CTX_KEY, void 0);
const _ref = ref<HTMLButtonElement>()
const size = computed(() => buttonGroupCtx?.size ?? props.size ?? "");
const type = computed(() => buttonGroupCtx?.type ?? props.type ?? "");
const disabled = computed(
  () => props.disabled || buttonGroupCtx?.disabled || false
);
const iconStyle = computed(() => ({
  marginRight: slots.default ? '6px' : '0px',
}))

const handleButtonClick = (e: MouseEvent) => emits('click', e)
const handleButtonClickThrottled = throttle(
  handleButtonClick,
  props.throttleDuration,
  { trailing: false }
)

defineExpose<ButtonInstance>({
  ref: _ref,
  disabled,
  size,
  type,
})
</script>

<template>
  <component
    ref="_ref"
    class="hao-button"
    :is="tag"
    :autofocus="autofocus"
    :type="tag === 'button' ? nativeType : undefined"
    :disabled="disabled || loading ? true : void 0"
    :class="{
      [`hao-button--${type}`]: type,
      [`hao-button--${size}`]: size,
      'is-plain': plain,
      'is-round': round,
      'is-circle': circle,
      'is-disabled': disabled,
      'is-loading': loading,
    }"
    @click="
      (e: MouseEvent) =>
        useThrottle ? handleButtonClickThrottled(e) : handleButtonClick(e)
    "
  >
    <template v-if="loading">
      <slot name="loading">
        <hao-icon
          class="loading-icon"
          :icon="loadingIcon ?? 'spinner'"
          :style="iconStyle"
          size="1x"
          spin
        />
      </slot>
    </template>
    <hao-icon
      :icon="icon"
      size="1x"
      :style="iconStyle"
      v-if="icon && !loading"
    />
    <slot></slot>
  </component>
</template>

<style scoped>
@import './style.css';
</style>
