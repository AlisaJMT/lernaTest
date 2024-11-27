import Vue from 'vue'
import App from './App.vue'

import component from '@htyh/components'
Vue.use(component)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
