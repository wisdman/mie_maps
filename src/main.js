import Vue from 'vue'
import App from './App.vue'
import Element from 'element-ui'
//import { VueHammer } from 'vue2-hammer'
import 'pinch-zoom-element/dist/pinch-zoom.js'

import 'element-ui/lib/theme-chalk/index.css'
import 'element-ui/lib/theme-chalk/reset.css'

Vue.config.productionTip = false

Vue.use(Element)
//Vue.use(VueHammer)
//Vue.use(PinchZoom)

new Vue({
  render: h => h(App),
}).$mount('#app')
