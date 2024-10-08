import DefaultTheme from 'vitepress/theme'
import { type App } from 'vue'
import ZZimoUI from 'z-zimo-ui'
import { ElementPlusContainer } from '@vitepress-preview/component'

import '@vitepress-preview/component/style.css'
import 'z-zimo-ui/dist/index.css'

export default {
  ...DefaultTheme,
  enhanceApp({ app }: { app: App }) {
    app.component('demo-preview', ElementPlusContainer)
    app.use(ZZimoUI)
  },
}
