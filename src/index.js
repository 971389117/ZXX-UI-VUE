import Vue from 'vue'
import icon from './components/icon';
import button from './components/button';
import input from './components/input';
import tabs from './components/tabs';
import popover from './components/popover';
import toast from './components/toast';
import collapse from './components/collapse';


import './scss/settings.scss'

const components = [
    icon,
    button,
    input,
    ...tabs,
    popover,
    ...collapse,
    toast
]

// 一次性
const install = (Vue) => {
    components.forEach(component => {
        Vue.component(component.name, component)
    })
}

export default {install}
// 单个
export {
    icon,
    button,
    input,
    tabs,
    popover,
    collapse,
    toast
}