<!--
@author ZXX
@create 2019-08-09-11:18
-->
<template>
    <div class="z-tabs-pane" :class="classes" v-if="active">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: 'z-tabs-pane',
        inject: ['eventBus'],
        data() {
            return {
                active: false
            }
        },
        props: {
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
                this.active = name === this.name
            })
        }
    }
</script>

<style lang='scss' scoped>
    .z-tabs-pane {
        &.active {
            background-color: red;
        }
    }
</style>