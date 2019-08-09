import Vue from 'vue'
import App from './App.vue'
import C from './index'

import plugin from './components/toast/plugin'
Vue.use(plugin)


Vue.config.productionTip = false
Vue.use(C)

new Vue({
  render: h => h(App),
}).$mount('#app')
