<template>
  <div>
    <hao-button type="primary" loading>Loading</hao-button>
    <hao-button type="primary" loading-icon="circle-notch" loading
      >Loading</hao-button
    >
    <hao-button type="primary" loading>
      <template #loading>
        <hao-icon style="margin-right: 6px" icon="star" spin />
      </template>
      Loading
    </hao-button>
  </div>
</template>
