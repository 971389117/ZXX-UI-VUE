<!--
@author ZXX
@create 2019-08-16-12:19
-->
<template>
    <div>
        <div class="z-input">
            <input ref='input'
                   v-model="value"
                   :class="[icP,classObj]"
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
            <Icon v-if="clear" icon="clear" @click="handleClearInput">X</Icon>
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
                // console.log(newValue, oldValue)
            }
        },
        computed: {
            icP() {
                let icon = null
                if (this.password || this.clear) {
                    icon = 'right'
                } else {
                    icon = this.icon ? this.iconPosition : ''
                }
                return icon
            },
            classObj(){
                let _classes=(this.disabled?'disabled':'')+' '+(this.readonly?'readonly':'')
                console.log(this.readonly,'---',_classes,'===',this.readonly?'readonly':'')
                return _classes
            },
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
            handleClearInput(e){
                this.value=''
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
        box-sizing: border-box;
        align-items: center;
        /*border: 1px solid black;*/
        position: relative;

        .input-self {
            display: block;
            color: $--input-font-color;
            background-color: $--input-background-color;
            font-size: 14px;
            border-radius: $--input-border-radius;
            box-sizing: border-box;
            width: $--input-width;
            line-height: 40px;
            height: 40px;
            padding: 0 1em;
            /*box-sizing: border-box;*/
        }

        > .icon {
            /*height: 40px;*/
            display: block;
            fill: $--input-font-color;
            color: $--input-font-color;
            position: absolute;
        }

        > .input-self.right + .icon {
            right: .5em;
        }

        > .input-self.left + .icon {
            left: .5em;
        }

        > .input-self.left {
            padding-left: 2em;
        }

        > .input-self.right {
            padding-right: 2em;
        }
        >.disabled{
            cursor:not-allowed;
            color:$--input-disabled-color;
            background-color:$--input-disabled-fill;
            border: $--input-disabled-border;
        }
        >.readonly{
            cursor: not-allowed;
            color:$--input-disabled-color;
        }
        > .icon:hover, .icon:focus {
            color: mix(#fff, $--input-font-color, 20%);
            fill: mix(#fff, $--input-font-color, 20%);
        }

        > .icon:active {
            color: mix(#fff, $--input-font-color, 40%);
            fill: mix(#fff, $--input-font-color, 40%);
        }
    }
</style>