<template>
    <z-collapse single :selected.sync="selectedCop">
        <z-collapse-item name="1" title="标题1">内容1</z-collapse-item>
        <z-collapse-item name="2" title="标题2">内容2</z-collapse-item>
        <z-collapse-item name="3" title="标题3">内容3</z-collapse-item>
    </z-collapse>
</template>

<script>
    import {collapse} from '../../../src/index'
    import Vue from 'vue'
    Vue.use(collapse)
    export default {
        name: 'zx-collapse',

    }
</script>

<style lang='scss' scoped>
    .Input {

    }
</style>