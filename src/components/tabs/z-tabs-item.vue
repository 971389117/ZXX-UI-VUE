<!--
@author ZXX
@create 2019-08-09-11:17
-->
<template>
    <div class="z-tabs-item" @click="xxx" :class="classes">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: 'z-tabs-item',
        inject: ['eventBus'],
        data() {
            return {
                active: false
            }
        },
        props: {
            disabled: {
                type: Boolean,
                default: false,
            },
            name: {
                type: String | Number,
                required: true
            }
        },
        computed: {
            classes() {
                return {
                    active: this.active
                }
            }
        },
        created() {
            this.eventBus.$on('update:selected', (name) => {
                this.active = name === this.name;
            })
        },
        methods: {
            xxx() {
                this.eventBus.$emit('update:selected', this.name)
            }
        }
    }
</script>

<style lang='scss' scoped>
    .z-tabs-item {
        flex-shrink: 0;
        padding: 0 1em;
        display: inline-flex;
        align-items: center;
        &.active {
            /*color:*/
            border-bottom:1px solid blue;
            transform: translateY(1px);
        }
    }
</style>