import { setPublicPath } from 'systemjs-webpack-interop'
import singleSpaVue from 'single-spa-vue'
import Vue from 'vue'

import App from '@/App.vue'
import '@/assets/css/main.css'

Vue.config.productionTip = false

// eslint-disable-next-line no-undef
const microApp = require('../micro.config')
setPublicPath(microApp.name)

const vueLifecycles = singleSpaVue({
  Vue,
  appOptions: {
    el: microApp.containerId,
    name: microApp.name,
    render(h: any) {
      return h(App, {
        props: {
          // single-spa props are available on the "this" object. Forward them to your component as needed.
          // https://single-spa.js.org/docs/building-applications#lifecyle-props
          name: this.name,
          mountParcel: this.mountParcel,
          singleSpa: this.singleSpa,
        },
      })
    },
  },
})
export const bootstrap = vueLifecycles.bootstrap
export const mount = vueLifecycles.mount
export const unmount = vueLifecycles.unmount
