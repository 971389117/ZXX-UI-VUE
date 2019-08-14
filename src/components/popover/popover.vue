<!--
@author ZXX
@create 2019-08-14-14:37
-->
<template>
    <div class="popover">
        <div class="content-wrapper" v-if="visible">
            <slot name="content"></slot>
        </div>

        <div class="default-slot"  @click="xxx">
        <slot ></slot>
        </div>
    </div>
</template>
<!--
1.普通插槽
2.命名插槽
-->
<script>
    export default {
        name: 'popover',
        data() {
            return {visible: false}
        },
        methods: {
            xxx() {
                console.log(123)
                this.visible = !this.visible
            }
        },
    }
</script>

<style lang='scss' scoped>
    .popover {
        display: inline-block;
        vertical-align: top;
        position: relative;

        .content-wrapper {
            position: absolute;
            bottom: 100%;
            left: 0;
            border: 1px solid red;
            box-shadow: 0 0 3px rgba(0, 0, 0, .5);
        }
    }
</style>