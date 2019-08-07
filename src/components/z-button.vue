<!--
@author ZXX
@create 2019-08-07-15:40
-->
<template>
    <button class="z-button" @click="handleClick"
            :class="type">
        <slot></slot>
    </button>
</template>

<script>
    export default {
        name: 'z-button',
        props: {
            type: {
                type: String,
                default: 'default'
            },
            size:String,
            icon:{
                type:String,
                default:'',
            },
            loading:Boolean,
            disabled:Boolean,
            plain:Boolean,
            autofocus:Boolean,
            round:Boolean,
            circle:Boolean
        },
    }
</script>

<style lang='scss' scoped>
    .z-button {
        &.primary{
            background-color: $color-primary;
        }
        &.success{
            background-color: $color-success;
        }
        &.info{
            background-color: $color-info;
        }
        &.warning{
            background-color: $color-warning;
        }
        &.danger{
            background-color: $color-danger;
        }
    }
</style>