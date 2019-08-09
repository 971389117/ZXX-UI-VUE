import Vue from 'vue'
import App from './App.vue'
import C from './index'


import TabsBaody from './components/tabs/z-tabs-body'
import TabsHead from './components/tabs/z-tabs-head'
import TabsItem from './components/tabs/z-tabs-item'
import TabsPane from './components/tabs/z-tabs-pane'
import Tabs from './components/tabs/z-tabs'

Vue.component('z-tabs',Tabs)
Vue.component('z-tabs-pane',TabsPane)
Vue.component('z-tabs-item',TabsItem)
Vue.component('z-tabs-head',TabsHead)
Vue.component('z-tabs-body',TabsBaody)


import plugin from './components/toast/plugin'
Vue.use(plugin)


Vue.config.productionTip = false
Vue.use(C)

new Vue({
  render: h => h(App),
}).$mount('#app')
