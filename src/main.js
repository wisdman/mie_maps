import Vue from 'vue'
import App from './App.vue'
import Element from 'element-ui'
import { VueHammer } from 'vue2-hammer'

import 'element-ui/lib/theme-chalk/index.css'
import 'element-ui/lib/theme-chalk/reset.css'

Vue.config.productionTip = false

Vue.use(Element)
Vue.use(VueHammer)

new Vue({
  render: h => h(App),
}).$mount('#app')
