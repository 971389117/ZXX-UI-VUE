import icon from './components/icon/z-icon';
import button from './components/button/z-button';



const components = [
    icon,
    button,
]
const com = {}
com.install = (Vue) => {
    components.forEach(component => {
        Vue.component(component.name, component)
    })
}
export default com