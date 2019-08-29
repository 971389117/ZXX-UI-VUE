<!--
@author ZXX
@create 2019-08-07-15:40
-->
<template>
    <button class="z-button"
            @click="handleClick"
            :disabled="disabled"
            :class="[
      type ? 'z-button--' + type : '',
      size ?'z-button--'+size:'',
      {
        'is-disabled': disabled,
        'is-loading': loading,
        'is-plain': plain,
        'is-round': round,
        'is-circle': circle
      }
    ]">
        <icon v-if="icon" :icon="icon"></icon>
        <icon v-if="loading" class="loading" icon="loading"></icon>
        <slot></slot>
    </button>
</template>

<script>
    import icon from '../icon/z-icon';

    export default {
        name: 'z-button',
        components: {
            icon
        },
        props: {
            type: {
                type: String,
                default: 'default'
            },
            size: {
                type: String,
                validator(value) {
                    return ['medium', 'small', 'mini'].indexOf(value) > -1
                }
            },
            icon: {
                type: String,
                default: '',
            },
            loading: Boolean,
            disabled: Boolean,
            plain: Boolean,
            round: Boolean,
            circle: Boolean,
        },
        methods: {
            handleClick(evt) {
                this.$emit('click', evt)
            }
        }
    }
</script>
<style lang="scss" >
    @import "../icon/icon.css";
    .z-button{
        color:black;
    }
</style>