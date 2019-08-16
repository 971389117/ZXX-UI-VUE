<!--
@author ZXX
@create 2019-08-07-19:52
-->
<template>
    <svg class="icon" aria-hidden="true" @click="handleClick">
        <use :xlink:href="'#icon-'+icon"></use>
    </svg>
</template>

<script>
    import './icon.js'
    export default {
        name: 'z-icon',
        props: {
            icon: {
                type: String,
                default: ''
            },
        },
        methods:{
            handleClick(e){
                this.$emit('click')
            }
        }
    }
</script>

<style lang='scss' scoped>
    .icon {
        width: 1em; height: 1em;
        vertical-align: -0.15em;
        fill: currentColor;
        overflow: hidden;
    }
</style>