<template>
    <div id="app">

        <br><br><br><br><br><br><br><br><br><br>
        <z-input></z-input>
        <z-input placeholder="你好,请输入内容"></z-input>
        <z-input type="text" placeholder="你好,请输入内容"></z-input>
        <z-input type='password' placeholder="你好,请输入内容"></z-input>
        <z-input  icon="search" placeholder="你好,请输入内容"></z-input>
        <z-input  icon="search" icon-position="right" placeholder="你好,图标在右边"></z-input>
<!--        <z-input suffix-icon="el-icon-date"></z-input>-->


        <hr>


        <!--            <z-collapse>-->
        <!--                <z-collapse-item title="标题1">内容1</z-collapse-item>-->
        <!--                <z-collapse-item title="标题2">内容2</z-collapse-item>-->
        <!--                <z-collapse-item title="标题3">内容3</z-collapse-item>-->
        <!--            </z-collapse>-->

        <hr>


<!--        <z-popover trigger="hover">-->
<!--            <template v-slot:content>-->
<!--                <div>哈哈哈 内容智商</div>-->
<!--            </template>-->
<!--            <z-button>点我</z-button>-->
<!--        </z-popover>-->
<!--        <z-popover position="right">-->
<!--            <template v-slot:content>哈哈哈 内容智商</template>-->
<!--            <z-button>点我</z-button>-->
<!--        </z-popover>-->
<!--        <z-popover position="bottom">-->
<!--            <template v-slot:content>哈哈哈 内容智商</template>-->
<!--            <z-button>点我</z-button>-->
<!--        </z-popover>-->
<!--        <z-popover position="left">-->
<!--            <template v-slot:content>哈哈哈 内容智商</template>-->
<!--            <z-button>点我</z-button>-->
<!--        </z-popover>-->

        <hr>


        <z-tabs :selected.sync="selectedTab" @update:selected="yyy">
            <z-tabs-head>
                <template slot="actions">
                    <button>设置</button>
                </template>
                <z-tabs-item name="woman">
                    <i name="settings"></i>美女
                </z-tabs-item>
                <z-tabs-item name="finance" disabled>
                    财经
                </z-tabs-item>
                <z-tabs-item name="sports">
                    体育
                </z-tabs-item>
            </z-tabs-head>
            <z-tabs-body>
                <z-tabs-pane name="woman">
                    美女相关资讯
                </z-tabs-pane>
                <z-tabs-pane name="finance">
                    财经相关资讯
                </z-tabs-pane>
                <z-tabs-pane name="sports">
                    体育相关资讯
                </z-tabs-pane>
            </z-tabs-body>
        </z-tabs>


        <hr>


        <z-button type="primary" @click="showToast('top')">点我 TOP</z-button>
        <z-button type="primary" @click="showToast('middle')">点我 MIDDLE</z-button>
        <z-button type="primary" @click="showToast('bottom')">点我 BOTTOM</z-button>


        <hr>

        <h3>按钮</h3>
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
        <div class="row">
            <z-button @click="onClick">点击事件</z-button>
        </div>
        <!--        <zIcon></zIcon>-->

    </div>
</template>

<script>

    export default {
        name: 'app',
        data() {
            return {
                selectedTab: 'sports'
            }
        },
        created() {
            this.$toast('<h1>我是 </h1>哈哈', {
                enableHtml: false,
                position: 'bottom',
                closeButton: {
                    text: '知道了',
                    callback(toast) {
                        toast.log()
                    }
                }
            })
        },
        methods: {
            onClick(e) {
                alert('点击事件触发')
            },
            yyy(data) {
                console.log('yyy')
                console.log(data)
            },
            showToast(position) {
                this.$toast('我是 DKSLJDSKAJDSKLAFLJASDKLFJLKkfjkldjKlkjkljf肯德基分开来讲故事科技开发了的撒娇法拉圣诞节福利卡积分message我是 DKSLJDSKAJDSKLAFLJASDKLFJLKkfjkldjKlkjkljf肯德基分开来讲故事科技开发了的撒娇法拉圣诞节福利卡积分message我是 DKSLJDSKAJDSKLAFLJASDKLFJLKkfjkldjKlkjkljf肯德基分开来讲故事科技开发了的撒娇法拉圣诞节福利卡积分message我是 DKSLJDSKAJDSKLAFLJASDKLFJLKkfjkldjKlkjkljf肯德基分开来讲故事科技开发了的撒娇法拉圣诞节福利卡积分message我是 DKSLJDSKAJDSKLAFLJASDKLFJLKkfjkldjKlkjkljf肯德基分开来讲故事科技开发了的撒娇法拉圣诞节福利卡积分message', {
                    position,
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

    .row {
        margin: 10px 0;
    }

    html {
        font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
    }

    z-popover {
        margin-left: 50px;
    }

    h3 {
        text-align: center;
    }
</style>
