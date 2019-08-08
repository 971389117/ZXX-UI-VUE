<template>
    <div id="app">
        <!--      常规        -->
        <div class="row">
            <zButton>默认按钮</zButton>
            <zButton type="primary">主要按钮</zButton>
            <zButton type="success">成功按钮</zButton>
            <zButton type="info">信息按钮</zButton>
            <zButton type="warning">警告按钮</zButton>
            <zButton type="danger">危险按钮</zButton>
        </div>
<!--      &lt;!&ndash;      简单        &ndash;&gt;-->
<!--      <div class="row">-->
<!--            <zButton plain>默认按钮</zButton>-->
<!--            <zButton type="primary" plain>主要按钮</zButton>-->
<!--            <zButton type="success" plain>成功按钮</zButton>-->
<!--            <zButton type="info" plain>信息按钮</zButton>-->
<!--            <zButton type="warning" plain>警告按钮</zButton>-->
<!--            <zButton type="danger" plain>危险按钮</zButton>-->
<!--        </div>-->
<!--      &lt;!&ndash;      圆润        &ndash;&gt;-->
<!--        <div class="row">-->
<!--            <zButton round>默认按钮</zButton>-->
<!--            <zButton type="primary" round>主要按钮</zButton>-->
<!--            <zButton type="success" round>成功按钮</zButton>-->
<!--            <zButton type="info" round>信息按钮</zButton>-->
<!--            <zButton type="warning" round>警告按钮</zButton>-->
<!--            <zButton type="danger" round>危险按钮</zButton>-->
<!--        </div>-->
<!--      &lt;!&ndash;      圆形        &ndash;&gt;-->
<!--        <div class="row">-->
<!--            <zButton icon="search" circle></zButton>-->
<!--            <zButton type="primary" icon="thumbs-up" circle></zButton>-->
<!--            <zButton type="success" icon="email" circle></zButton>-->
<!--            <zButton type="info" icon="shangchuan" circle></zButton>-->
<!--            <zButton type="warning" icon="star" circle></zButton>-->
<!--            <zButton type="danger" icon="success" circle></zButton>-->
<!--        </div>-->
<!--      &lt;!&ndash;      禁用        &ndash;&gt;-->
<!--        <div class="row">-->
<!--            <zButton disabled>默认按钮</zButton>-->
<!--            <zButton type="primary" disabled>主要按钮</zButton>-->
<!--            <zButton type="success" disabled>成功按钮</zButton>-->
<!--            <zButton type="info" disabled>信息按钮</zButton>-->
<!--            <zButton type="warning" disabled>警告按钮</zButton>-->
<!--            <zButton type="danger" disabled>危险按钮</zButton>-->
<!--        </div>-->
<!--      &lt;!&ndash;        混合双打        &ndash;&gt;-->
<!--        <div class="row">-->
<!--            <zButton plain disabled>朴素按钮</zButton>-->
<!--            <zButton type="primary" plain disabled>主要按钮</zButton>-->
<!--            <zButton type="success" plain disabled>成功按钮</zButton>-->
<!--            <zButton type="info" plain disabled>信息按钮</zButton>-->
<!--            <zButton type="warning" plain disabled>警告按钮</zButton>-->
<!--            <zButton type="danger" plain disabled>危险按钮</zButton>-->
<!--        </div>-->
<!--        <zIcon></zIcon>-->
    </div>
</template>

<script>
    import zButton from './components/z-button.vue'
    import zIcon from './components/icon/z-icon.vue'

    export default {
        name: 'app',
        components: {
            zButton,
            zIcon
        }
    }
</script>

<style lang="scss">
    @import "@/scss/base.scss";
  .row{
    margin: 10px 0;
  }
</style>
