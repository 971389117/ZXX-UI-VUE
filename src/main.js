import Vue from 'vue'
import App from './App.vue'
import ZxxUi from './index'

import plugin from './components/toast/plugin'
Vue.use(plugin)

import Popover from './components/popover/popover'
Vue.component('z-popover',Popover)
import collapse from './components/collapse/z-collapse'
import collapseItem from './components/collapse/collapse-item'
Vue.component('z-collapse',collapse)
Vue.component('z-collapse-item',collapseItem)

Vue.use(ZxxUi)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
