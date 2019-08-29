import plugin from './plugin'
import component from './z-toast'
import Vue from 'vue'
Vue.use(plugin)
component.install=(Vue)=>{
    Vue.component(component.name,component)
}

export default component