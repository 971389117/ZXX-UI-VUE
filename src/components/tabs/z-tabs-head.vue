<!--
@author ZXX
@create 2019-08-09-11:17
-->
<template>
    <div class="z-tabs-head">
        <slot></slot>
        <div class="actions-wrapper">
            <slot name="actions"></slot>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'z-tabs-head',
        inject:['eventBus'],
        created(){
            this.$emit('update:selected','tabs-head 抛出的数据')
        },
    }
</script>

<style lang='scss' scoped>
    $tab-height:40px;
    .z-tabs-head {
        display: flex;
        height: $tab-height;
        justify-content: flex-start;
        align-items: center;
        border: 1px;
        >.actions-wrapper{
            margin-left: auto;
        }
    }
</style>