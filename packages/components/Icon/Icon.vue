<script setup lang="ts">
import type { IconProps } from './types'
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome"
import { omit } from "lodash-es" // 引入lodash-es中的omit方法，omit用于去除对象中的某些属性
import { computed } from "vue"

defineOptions({
  name: "HaoIcon",
  inheritAttrs: false // 关闭默认的属性继承，避免将所有属性都绑定到根元素上
})

const props = defineProps<IconProps>()
const filterProps = computed(() => omit(props, ["type", "color"]))
const customStyles = computed(() => ({ color: props.color ?? void 0 }))
</script>

<template>
  <i
    class="hao-icon"
    :class="{ [`hao-icon--${type}`]: type }"
    :style="customStyles"
    v-bind="$attrs"
  >
    <font-awesome-icon v-bind="filterProps" />
  </i>
</template>

<style scoped>
@import "./style.css";
</style>