import {shallowMount} from '@vue/test-utils';
import ZButton from  '../../src/components/button'

describe("Button",()=>{
    it('create',()=>{
        const wrapper=shallowMount(ZButton,{
            propsData:{
                type:'primary'
            }
        })

        expect(wrapper.classes()).toContain('z-button--primary')
    })
    it('icon',()=>{
        const wrapper=shallowMount(ZButton,{
            propsData:{
                icon:'success'
            }
        })
        expect(wrapper.find('i').classes()).toContain('icon-success')
    })
    it('nativeType',()=>{
        const wrapper=shallowMount(ZButton,{
            propsData:{
                disabled:true
            }
        })
        expect(wrapper.classes()).toContain('is-disabled')
    })
    it('loading',()=>{
        const wrapper=shallowMount(ZButton,{
            propsData:{
                loading:true
            }
        })
        expect(wrapper.classes()).toContain('is-loading')
    })
    it('disabled',()=>{
        const wrapper=shallowMount(ZButton,{
            propsData:{
                disabled:true
            }
        })
        expect(wrapper.classes()).toContain('is-disabled')
    })
    it('size',()=>{
        const wrapper=shallowMount(ZButton,{
            propsData:{
                disabled:true
            }
        })
        expect(wrapper.classes()).toContain('is-disabled')
    })
    it('plain',()=>{
        const wrapper=shallowMount(ZButton,{
            propsData:{
                plain:true
            }
        })
        expect(wrapper.classes()).toContain('is-plain')
    })
    it('round',()=>{
        const wrapper=shallowMount(ZButton,{
            propsData:{
                round:true
            }
        })
        expect(wrapper.classes()).toContain('is-round')
    })
    it('circle',()=>{
        const wrapper=shallowMount(ZButton,{
            propsData:{
                circle:true
            }
        })
        console.log('---',wrapper,wrapper.classes(),'---')
        expect(wrapper.classes()).toContain('is-circle')
    })
    it('click',()=>{
        const wrapper=shallowMount(ZButton,{propsData:{disabled:true}})
        wrapper.setMethods({
            increment(){console.log(1234)}
        })
        wrapper.trigger('click')
        expect(wrapper.classes()).toContain('is-disabled')
    })
    it('click inside',()=>{
        const wrapper=shallowMount(ZButton,{
            propsData:{
                disabled:true
            }
        })
        expect(wrapper.classes()).toContain('is-disabled')
    })
    it('loading implies disabled',()=>{
        const wrapper=shallowMount(ZButton,{
            propsData:{
                disabled:true
            }
        })
        expect(wrapper.classes()).toContain('is-disabled')
    })
})