import TabsBaody from './z-tabs-body'
import TabsHead from './z-tabs-head'
import TabsItem from './z-tabs-item'
import TabsPane from './z-tabs-pane'
import Tabs from './z-tabs'

const components = [
    TabsBaody, TabsHead, TabsItem, TabsPane, Tabs
];

// 单独使用 Vue.use
components.install=(Vue)=>{
    components.forEach(component=>{
                Vue.component(component.name,component)
    })
}

// components.forEach((component) => {
//     component.install=(Vue)=>{
//         Vue.component(component.name,component)
//     }
// })

export default components