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
    @import "../../scss/settings";

    $tab-height:40px;
    .z-tabs-head {
        display: flex;
        height: $tab-height;
        justify-content: flex-start;
        border-bottom: $--tab-border-line;

        >.actions-wrapper{
            margin-left: auto;
        }
    }
</style>