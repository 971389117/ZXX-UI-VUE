<!--
@author ZXX
@create 2019-08-09-12:14
-->
<template>
    <ClientOnly>
    <div class="z-collapse">
        <slot></slot>
    </div>
    </ClientOnly>
</template>

<script>
    import Vue from 'vue'
    export default {
        name: 'z-collapse',
        props: {
            single: {
                type: Boolean,
                default: false
            },
            selected: {
                type: Array,
            },
        },
        data() {
            return {
                eventBus: new Vue()
            }
        },
        provide(){
                return {
                    eventBus:this.eventBus
                }
        },
        mounted() {
            this.eventBus.$emit('update:selected', this.selected)
            this.eventBus.$on('update:addSelected', (name) => {
                let selectedCopy = JSON.parse(JSON.stringify(this.selected))
                if (this.single) {
                    selectedCopy = [name]
                } else {
                    console.log(selectedCopy,'===',name)
                    selectedCopy.push(name)
                }
                this.eventBus.$emit('update:selected', selectedCopy)
                this.$emit('update:selected', selectedCopy)
            })
            this.eventBus.$on('update:removeSelected', (name) => {
                let selectedCopy = JSON.parse(JSON.stringify(this.selected))
                let index = selectedCopy.indexOf(name)
                selectedCopy.splice(index, 1)
                this.eventBus.$emit('update:selected', selectedCopy)
                this.$emit('update:selected', selectedCopy)
            })
        }
    }
</script>

<style lang='scss' scoped>
    $grey:#ddd;
    $border-radius:4px;
    .z-collapse {
        border: 1px solid $grey;
        border-radius: $border-radius;
    }
</style>