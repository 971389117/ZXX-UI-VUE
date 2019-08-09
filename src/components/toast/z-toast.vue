<!--
@author ZXX
@create 2019-08-08-23:40
-->
<template>
    <div class="z-toast">
        <div v-html="$slots.default[0]"></div>
        <div class="line"></div>
        <span v-if="closeButton" class="close" @click="onCLickClose()">
            {{closeButton.text}}
        </span>
    </div>
</template>

<script>
    export default {
        name: 'z-toast',
        props: {
            autoClose: {
                type: Boolean,
                default: true
            },
            autoCloseDelay:{
                type:Number,
                default:50000
            },
            closeButton:{
                type:Object,
                default:()=>{
                    return {
                        test:"关闭",
                        // callback(toast){
                        //     toast.close()
                        // }
                        callback:undefined
                    }
                }
            }
        },
        mounted(){
            if(this.autoClose){
                setTimeout((()=>{
                    this.close()
                }),this.autoCloseDelay)
            }
        },
        created(){
            console.log(this.closeButton)
        },
        methods:{
            close(){
                this.$el.remove()
                this.$destroy()
            },
            log(){
                console.log('测试')
            },
            onCLickClose(){
                this.close()
                if(this.closeButton && typeof this.closeButton.callback === 'function'){
                    this.closeButton.callback(this)
                }
            }
        }
    }
</script>

<style lang='scss' scoped>
    $font-size:14px;
    $toast-height:40px;
    $toast-bg:rgba(0,0,0,.75);
    .z-toast {
        position: fixed;
        top:0;
        left:50%;
        transform: translateX(-50%);
        font-size: $font-size;
        line-height: 1.8;
        height: $toast-height;
        display: flex;
        background-color: $toast-bg;
        border-radius: 4px;
        box-shadow: 0 0 3px 0 rgba(0,0,0,.5);
        align-items: center;
        color:white;
        padding: 0 16px;
        .close{
            padding-left: 16px;
        }
        .line{
            height: 100%;
            border-left: 1px solid #666 ;
            margin-left: 16px;
        }
    }
</style>