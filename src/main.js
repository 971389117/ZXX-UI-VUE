import Vue from 'vue'
import App from './App.vue'
import ZxxUi from './index'

Vue.use(ZxxUi)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
