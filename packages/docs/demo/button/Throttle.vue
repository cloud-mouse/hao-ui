<script setup>
function handleBtnClick() {
  console.log('click')
}
</script>

<template>
  <p>
    <hao-button @click="handleBtnClick"> with throttle</hao-button>
    <hao-button :use-throttle="false" @click="handleBtnClick">
      without throttle
    </hao-button>
  </p>
</template>
