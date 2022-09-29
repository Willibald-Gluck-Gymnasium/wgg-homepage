// app/router.options.ts
import type { RouterOptions } from '@nuxt/schema'

export default <RouterOptions> {
  scrollBehavior() {
    return { top: 0 }
  }
}