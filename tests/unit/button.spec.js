// import {shallowMount} from '@vue/test-utils';
// import ZButton from  '../../src/components/button'
//
// describe("Button",()=>{
//     it(' create',()=>{
//         const wrapper=shallowMount(ZButton,{
//             propsData:{
//                 type:'primary'
//             }
//         })
//         expect(wrapper.classes()).toContain('z-button--primary')
//     })
//     it('可以附加 icon',()=>{
//         // const wrapper=shallowMount(ZButton,{
//         //     propsData:{
//         //         icon:'success'
//         //     }
//         // })
//         // expect(wrapper.find('i').classes()).toContain('icon-success')
//     })
//
//     it('可以设置 loading 状态',()=>{
//         // const wrapper=shallowMount(ZButton,{
//         //     propsData:{
//         //         loading:true
//         //     }
//         // })
//         // expect(wrapper.classes()).toContain('is-loading')
//     })
//     it('可以设置 disabled 状态',()=>{
//         const wrapper=shallowMount(ZButton,{
//             propsData:{
//                 disabled:true
//             }
//         })
//         expect(wrapper.classes()).toContain('is-disabled')
//     })
//
//     it('可以设置几种 size ',()=>{
//         const size=['medium','small','mini']
//         size.forEach(value=>{
//             const wrapper=shallowMount(ZButton,{
//                 propsData:{
//                     size:value
//                 }
//             })
//             const className=`z-button--${wrapper.props('size')}`
//             expect(wrapper.classes()).toContain(className)
//         })
//     })
//
//     it('可以设置 plain',()=>{
//         const wrapper=shallowMount(ZButton,{
//             propsData:{
//                 plain:true
//             }
//         })
//         expect(wrapper.classes()).toContain('is-plain')
//     })
//     it('可以设置 round',()=>{
//         const wrapper=shallowMount(ZButton,{
//             propsData:{
//                 round:true
//             }
//         })
//         expect(wrapper.classes()).toContain('is-round')
//     })
//     it('circle',()=>{
//         const wrapper=shallowMount(ZButton,{
//             propsData:{
//                 circle:true
//             }
//         })
//         expect(wrapper.classes()).toContain('is-circle')
//     })
//     it('点击按钮 触发  事件 click',()=>{
//         const wrapper=shallowMount(ZButton)
//         wrapper.trigger('click')
//         expect(wrapper.emitted('click')).toBeTruthy()
//     })
//
//     it('loading implies disabled',()=>{
//         const wrapper=shallowMount(ZButton,{
//             propsData:{
//                 disabled:true
//             }
//         })
//         expect(wrapper.classes()).toContain('is-disabled')
//     })
// })