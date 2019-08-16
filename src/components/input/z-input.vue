<!--
@author ZXX
@create 2019-08-16-12:19
-->
<template>
    <div>
        <div class="z-input">
            <input ref='input'
                   v-model="value"
                   :class="iconPosition"
                   :type="types"
                   class="input-self" :placeholder="placeholder"
                   :disabled="disabled"
                   :readonly="readonly"
                   @input="handleInput"
                   @focus="handleFocus"
                   @blur="handleBlur"
                   @change="handleChange"
            >
            <span class="icon">
            <i v-if="clear">X</i>
            <Icon v-else-if="password" icon="eye" @click="handleShowPassword"></Icon>
            <Icon v-else-if="icon" :icon="icon"></Icon>
        </span>
        </div>
    </div>
</template>

<script>
    import Icon from '../icon/z-icon'

    export default {
        name: 'z-input',
        components: {
            Icon,
        },
        data() {
            return {
                value: '',
                initType: this.type,
                clear: false,
                password: false,
            }
        },
        props: {
            type: {
                type: String,
                default: 'text',
                validator(value) {
                    return ['text', 'password', 'clear'].indexOf(value) > -1
                }
            },
            placeholder: {
                type: String,
                default: '请输入内容'
            },
            disabled: {
                type: Boolean,
                default: false
            },
            readonly: {
                type: Boolean,
                default: false
            },
            icon: {
                type: String,
                default: ''
            },
            iconPosition: {
                type: String,
                default: 'left'
            },
        },
        watch: {
            initType(newValue, oldValue) {
                console.log(newValue, oldValue)
            }
        },
        computed: {
            types() {
                let type = this.type;
                switch (this.type) {
                    case 'clear':
                        type = 'text'
                        this.clear = this.type
                        break;
                    case 'password':
                        this.password = this.type
                        break;
                }
                console.log(type)
                return type
            }
        },
        methods: {
            handleInput(e) {

            },
            handleFocus(e) {

            },
            handleBlur(e) {

            },
            handleChange(e) {

            },
            handleShowPassword(e) {
                if (this.types === 'password') {
                    this.type = 'text'
                } else {
                    this.type = 'password'
                }
                this.$refs['input'].type = this.type
            }
        }
    }
</script>

<style lang='scss' scoped>
.z-input {
    display: inline-flex;
    align-items: center;
    /*border: 1px solid black;*/
    position: relative;

    .input-self {
        display: block;
        color: $--input-font-color;
        background-color: $--input-background-color;
        font-size: 14px;
        border-radius: $--input-border-radius;
        width: $--input-width;
        line-height: 40px;
        height: 40px;
        padding: 0 1em;

    }

    .icon {
        height: 40px;
        display: block;
        fill: $--input-font-color;
        color: $--input-font-color;
        position: absolute;
        right:5px;
    }
    .input-self.left+.icon{
        left:5px;
    }

    .icon:hover, .icon:focus {
        color: mix(#fff, $--input-font-color, 20%);
        fill: mix(#fff, $--input-font-color, 20%);
    }

    .icon:active {
        color: mix(#fff, $--input-font-color, 40%);
        fill: mix(#fff, $--input-font-color, 40%);
    }
}
</style>