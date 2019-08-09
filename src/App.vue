<template>
    <div id="app">


        <button @click="showToast">点我</button>


        <hr>


        <!--      常规        -->
        <div class="row">
            <z-button>默认按钮</z-button>
            <z-button autofocus type="primary">主要按钮</z-button>
            <z-button type="success">成功按钮</z-button>
            <z-button type="info">信息按钮</z-button>
            <z-button type="warning">警告按钮</z-button>
            <z-button type="danger">危险按钮</z-button>
        </div>
        <!--      简单        -->
        <div class="row">
            <z-button plain>朴素按钮</z-button>
            <z-button type="primary" plain>主要按钮</z-button>
            <z-button type="success" plain>成功按钮</z-button>
            <z-button type="info" plain>信息按钮</z-button>
            <z-button type="warning" plain>警告按钮</z-button>
            <z-button type="danger" plain>危险按钮</z-button>
        </div>
        <!--      圆润        -->
        <div class="row">
            <z-button round>默认按钮</z-button>
            <z-button type="primary" round>主要按钮</z-button>
            <z-button type="success" round>成功按钮</z-button>
            <z-button type="info" round>信息按钮</z-button>
            <z-button type="warning" round>警告按钮</z-button>
            <z-button type="danger" round>危险按钮</z-button>
        </div>
        <!--      圆形        -->
        <div class="row">
            <z-button icon="search" circle></z-button>
            <z-button type="primary" icon="thumbs-up" circle></z-button>
            <z-button type="success" icon="email" circle></z-button>
            <z-button type="info" icon="shangchuan" circle></z-button>
            <z-button type="warning" icon="star" circle></z-button>
            <z-button type="danger" icon="success" circle></z-button>
        </div>
        <!--      禁用        -->
        <div class="row">
            <z-button disabled>默认按钮</z-button>
            <z-button type="primary" disabled>主要按钮</z-button>
            <z-button type="success" disabled>成功按钮</z-button>
            <z-button type="info" disabled>信息按钮</z-button>
            <z-button type="warning" disabled>警告按钮</z-button>
            <z-button type="danger" disabled>危险按钮</z-button>
        </div>
        <!--        混合双打        -->
        <div class="row">
            <z-button plain disabled>朴素按钮</z-button>
            <z-button type="primary" plain disabled>主要按钮</z-button>
            <z-button type="success" plain disabled>成功按钮</z-button>
            <z-button type="info" plain disabled>信息按钮</z-button>
            <z-button type="warning" plain disabled>警告按钮</z-button>
            <z-button type="danger" plain disabled>危险按钮</z-button>
        </div>
        <div class="row">
            <z-button round disabled>朴素按钮</z-button>
            <z-button type="primary" round disabled>主要按钮</z-button>
            <z-button type="success" round disabled>成功按钮</z-button>
            <z-button type="info" round disabled>信息按钮</z-button>
            <z-button type="warning" round disabled>警告按钮</z-button>
            <z-button type="danger" round disabled>危险按钮</z-button>
        </div>
        <div class="row">
            <z-button icon="search" disabled circle></z-button>
            <z-button type="primary" icon="thumbs-up" disabled circle></z-button>
            <z-button type="success" icon="email" disabled circle></z-button>
            <z-button type="success" icon="shangchuan" disabled circle></z-button>
            <z-button type="warning" icon="star" disabled circle></z-button>
            <z-button type="danger" icon="success" disabled circle></z-button>
        </div>
        <div class="row">
            <z-button type="primary" icon="search"></z-button>
            <z-button type="primary" icon="thumbs-up"></z-button>
            <z-button type="primary" icon="email"></z-button>
            <z-button type="primary" icon="shangchuan">上传</z-button>
            <z-button type="primary" icon="star">收藏</z-button>
            <z-button type="primary" icon="success"></z-button>
        </div>

        <z-button type="text">文字按钮</z-button>
        <z-button type="text" disabled>文字按钮</z-button>

        <z-button type="primary" :loading="true">加载中</z-button>

        <div class="row">
            <z-button>默认按钮</z-button>
            <z-button size="medium">中等按钮</z-button>
            <z-button size="small">小型按钮</z-button>
            <z-button size="mini">超小按钮</z-button>
        </div>
        <div class="row">
            <z-button round>默认按钮</z-button>
            <z-button size="medium" round>中等按钮</z-button>
            <z-button size="small" round>小型按钮</z-button>
            <z-button size="mini" round>超小按钮</z-button>
        </div>
        <!--        <zIcon></zIcon>-->

    </div>
</template>

<script>

    export default {
        name: 'app',
        components: {
            // z-button,
        },
        created() {
            this.$toast('<h1>我是 </h1>哈哈', {
                enableHtml:false,
                position:"top",
                closeButton: {
                    text: '知道了',
                    callback(toast) {
                        toast.log()
                        console.log('演得不错')
                    }
                }
            })
        },
        methods: {
            showToast() {
                this.$toast('我是 DKSLJDSKAJDSKLAFLJASDKLFJLKkfjkldjKlkjkljf肯德基分开来讲故事科技开发了的撒娇法拉圣诞节福利卡积分message我是 DKSLJDSKAJDSKLAFLJASDKLFJLKkfjkldjKlkjkljf肯德基分开来讲故事科技开发了的撒娇法拉圣诞节福利卡积分message我是 DKSLJDSKAJDSKLAFLJASDKLFJLKkfjkldjKlkjkljf肯德基分开来讲故事科技开发了的撒娇法拉圣诞节福利卡积分message我是 DKSLJDSKAJDSKLAFLJASDKLFJLKkfjkldjKlkjkljf肯德基分开来讲故事科技开发了的撒娇法拉圣诞节福利卡积分message我是 DKSLJDSKAJDSKLAFLJASDKLFJLKkfjkldjKlkjkljf肯德基分开来讲故事科技开发了的撒娇法拉圣诞节福利卡积分message', {
                    closeButton: {
                        text: '知道了',
                        callback(toast) {
                            toast.log()
                            console.log('演得不错')
                        }
                    }
                })
            }
        }
    }
</script>

<style lang="scss">
    @import "@/scss/base.scss";

    .row {
        margin: 10px 0;
    }

    html {
        font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
    }
</style>
