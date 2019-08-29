// @author ZXX
// @create 2019-08-29-13:57
import collapse from './z-collapse'
import collapseItem from './collapse-item'

const components=[
    collapse,collapseItem
]
components.install=(Vue)=>{
    components.forEach(component=>{
        Vue.component(component.name,component)
    })
}
export default components

