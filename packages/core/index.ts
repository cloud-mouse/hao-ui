import { makeInstaller } from '@hao-ui/utils'
import components from './components'
import '@hao-ui/theme/index.css'

const installer = makeInstaller(components)

export * from '@hao-ui/components'
export default installer