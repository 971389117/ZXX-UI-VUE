import Vue from 'vue'
import icon from './components/icon';
import button from './components/button';
import './scss/settings.scss'
const components = [
    icon,
    button,
]

const install = (Vue) => {
    components.forEach(component => {
        Vue.component(component.name, component)
    })
}

export default {install}
export {
    icon,
    button
}