# 最新 Vue3 + TS 高仿 ElementPlus 打造自己的组件库

## 安装

use npm

```bash
npm i z-zimo-ui --save
```

use pnpm

```bash
pnpm i z-zimo-ui --save
```

## 开始使用

**全局使用**

```js
// 引入所有组件
import ZZimoUI from 'z-zimo-ui'
// 引入样式
import 'z-zimo-ui/dist/index.css'

import App from './App.vue'
// 全局使用
createApp(App).use(ZZimoUI).mount('#app')
```

```vue
<template>
  <hao-button>我是 Button</hao-button>
</template>
```

**单个导入**

Z-Zimo-UI 提供了基于 ES Module 的开箱即用的 Tree Shaking 功能。

```vue
<template>
  <hao-button>我是 Button</hao-button>
</template>
<script>
import { HaoButton } from 'z-zimo-ui'
export default {
  components: { HaoButton },
}
</script>
```
