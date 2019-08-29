<template>
    <div>
    <h4>只有一个展开标签</h4>
    <z-collapse single :selected.sync="selectedCop">
        <z-collapse-item name="1" title="标题1">内容超级多,随便写1</z-collapse-item>
        <z-collapse-item name="2" title="标题2">内容超级多,随便写2</z-collapse-item>
        <z-collapse-item name="3" title="标题3">内容超级多,随便写3</z-collapse-item>
    </z-collapse>
    <h4>可以多个展开标签</h4>
    <z-collapse :selected.sync="selectedCop">
        <z-collapse-item name="1" title="标题1">内容超级多,随便写1</z-collapse-item>
        <z-collapse-item name="2" title="标题2">内容超级多,随便写2</z-collapse-item>
        <z-collapse-item name="3" title="标题3">内容超级多,随便写3</z-collapse-item>
    </z-collapse>
    </div>
</template>

<script>
    import {collapse} from '../../../src/index'
    import Vue from 'vue'
    Vue.use(collapse)
    export default {
        name: 'zx-collapse',
        data(){
            return{
                selectedCop:['1']
            }
        }
    }
</script>

<style lang='scss' scoped>

</style>