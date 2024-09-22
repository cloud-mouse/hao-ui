import type { App, Plugin } from 'vue'
import { each } from 'lodash-es'

type SFCWithInstall<T> = T & Plugin

// 创建install函数，给组件添加install方法
export function makeInstaller(components: Plugin[]) {
  // 遍历所有的组件，使用app.use()进行注册
  const installer = (app: App) => { each(components, (c) => app.use(c)) }
  return installer as Plugin
}

// 创建withInstall函数 给组件添加install方法
export const withInstall = <T>(component: T) => {
  (component as SFCWithInstall<T>).install = (app: App) => {
    const name = (component as any).name
    app.component(name, component as Plugin)
  }
  return component as SFCWithInstall<T>
}
