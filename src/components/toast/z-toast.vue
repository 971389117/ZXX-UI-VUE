<!--
@author ZXX
@create 2019-08-08-23:40
-->
<template>
<ClientOnly>
    <div class="wrapper" :class="toastClasses">
        <div class="z-toast" ref="toast">
            <div class="message">
                <div v-if="enableHtml" v-html="$slots.default[0]"></div>
                <slot v-else></slot>
            </div>
            <div class="line" ref="line"></div>
            <span v-if="closeButton" class="close" @click="onCLickClose()">
            {{closeButton.text}}
        </span>
        </div>
    </div>
    </ClientOnly>
</template>

<script>
    export default {
        name: 'z-toast',
        props: {
            autoClose: {
                type: Boolean,
                default: true
            },
            autoCloseDelay: {
                type: Number,
                default: 52000
            },
            closeButton: {
                type: Object,
                default: () => {
                    return {
                        test: '关闭',
                        // callback(toast){
                        //     toast.close()
                        // }
                        callback: undefined
                    }
                }
            },
            enableHtml: {
                type: Boolean,
                default: false
            },
            position: {
                type: String,
                default: 'top',
                validator(value) {
                    // 两者都可以
                    // const pos=['top','bottom','left','right'].includes(value)
                    const pos = ['top', 'bottom', 'middle'].indexOf(value) >= 0
                    return pos
                }
            }
        },
        computed: {
            toastClasses: function () {
                return {
                    [`position-${this.position}`]: true
                }
            }
        },
        mounted() {
            this.updateStyle()
            this.execAutoClose()
        },
        created() {
            // console.log(this.closeButton)
        },
        methods: {
            execAutoClose() {
                if (this.autoClose) {
                    setTimeout((() => {
                        this.close()
                    }), this.autoCloseDelay)
                }
            },
            updateStyle() {
                this.$nextTick(() => {
                    this.$refs.line.style.height =
                        `${this.$refs.toast.getBoundingClientRect().height}px`
                })
            },
            close() {
                this.$el.remove()
                this.$emit('close')
                this.$destroy()
            },
            log() {
                console.log('测试')
            },
            onCLickClose() {
                this.close()
                if (this.closeButton && typeof this.closeButton.callback === 'function') {
                    this.closeButton.callback(this)
                }
            },

        }
    }
</script>

<style lang='scss' scoped>
    $font-size: 14px;
    $toast-height: 40px;
    $toast-bg: rgba(0, 0, 0, .75);
    $animation-duration:.3s;
    @keyframes slide-up {
        0% {
            opacity: 0;
            transform: translateY(100%);
        }
        100% {
            opacity: 1;
            transform: translateY(0);
        }
    }
    @keyframes slide-down {
        0% {
            opacity: 0;
            transform: translateY(-100%);
        }
        100% {
            opacity: 1;
            transform: translateY(0);
        }
    }
    @keyframes fade-in {
        0% {
            opacity: 0;
        }
        100% {
            opacity: 1;
        }
    }
    .wrapper {
        position: fixed;
        left: 50%;
        transform: translateX(-50%);
        &.position-top {
            top: 0;
            .z-toast{
                border-top-left-radius: 0;
                border-top-right-radius: 0;
                animation:slide-down $animation-duration;
            }
        }

        &.position-bottom {
            bottom: 0;
            .z-toast{
                border-bottom-left-radius: 0;
                border-bottom-right-radius: 0;
                animation:slide-up $animation-duration;
            }
        }

        &.position-middle {
            top: 50%;
            transform: translate(-50%,-50%);
            .z-toast{
                animation:fade-in $animation-duration;
            }
        }

    }

    .z-toast {
        font-size: $font-size;
        line-height: 1.8;
        min-height: $toast-height;
        display: flex;
        background-color: $toast-bg;
        border-radius: 4px;
        box-shadow: 0 0 3px 0 rgba(0, 0, 0, .5);
        align-items: center;
        color: white;
        padding: 0 16px;


        .message {
            padding: 8px 0;
        }

        .close {
            padding-left: 16px;
            flex-shrink: 0;
        }

        .line {
            /*height: 100%;*/
            border-left: 1px solid #666;
            margin-left: 16px;
        }
    }
</style>
