<!--
@author ZXX
@create 2019-08-09-11:18
-->
<template>
    <div class="z-tabs-body">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: 'z-tabs-body',
        inject:['eventBus'],
    }
</script>

<style lang='scss' scoped>
    .z-tabs-body {
        margin: 1.2em 0;
    }
</style>