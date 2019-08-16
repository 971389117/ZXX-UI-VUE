import Vue from 'vue'
import icon from './components/icon';
import button from './components/button';
import input from './components/input';
import './scss/settings.scss'

const components = [
    icon,
    button,
    input,
]

const install = (Vue) => {
    components.forEach(component => {
        Vue.component(component.name, component)
    })
}

export default {install}
export {
    icon,
    button,
    input,
}