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
      size ?'z-button'+size:'',
      {
        'is-disabled': disabled,
        'is-loading': loading,
        'is-plain': plain,
        'is-round': round,
        'is-circle': circle
      }
    ]">
        <icon v-if="icon" :icon="icon"></icon>
        <slot></slot>
    </button>
</template>

<script>
    import icon from './icon/z-icon'
    export default {
        name: 'z-button',
        components:{
          icon
        },
        props: {
            type: {
                type: String,
                default: 'default'
            },
            size: String,
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
            handleClick(e) {
                this.$emit('click', e)
            }
        }
    }
</script>

<style lang='scss' scoped>
    .z-button {
        display: inline-block;
        line-height: 1;
        white-space: normal;
        cursor: pointer;
        background-color: #fff;
        border: 1px solid #dcdfe6;
        color: #606266;
        text-align: center;
        box-sizing: border-box;
        outline: none;
        margin: 0;
        transition: .1s;
        font-weight: 500;
        padding: 12px 20px;
        font-size: 14px;
        border-radius: 4px;
        margin-left: 10px;

        &.is-plain {
            background-color: rgba(0, 0, 0, .5);
        }

        &.z-button--primary {
            background-color: $--button-primary-background-color;
        }

        &.z-button--success {
            background-color: $--button-success-background-color;
        }

        &.z-button--info {
            background-color: $--button-info-background-color;
        }

        &.z-button--warning {
            background-color: $--button-warning-background-color;
        }

        &.z-button--danger {
            background-color: $--button-danger-background-color;
        }
    }
</style>