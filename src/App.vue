<template>
    <div id="app">
        <!--      常规        -->
        <div class="row">
            <zButton>默认按钮</zButton>
            <zButton autofocus type="primary" >主要按钮</zButton>
            <zButton type="success">成功按钮</zButton>
            <zButton type="info">信息按钮</zButton>
            <zButton type="warning">警告按钮</zButton>
            <zButton type="danger">危险按钮</zButton>
        </div>
      <!--      简单        -->
      <div class="row">
            <zButton plain>朴素按钮</zButton>
            <zButton type="primary" plain>主要按钮</zButton>
            <zButton type="success" plain>成功按钮</zButton>
            <zButton type="info" plain>信息按钮</zButton>
            <zButton type="warning" plain>警告按钮</zButton>
            <zButton type="danger" plain>危险按钮</zButton>
        </div>
      <!--      圆润        -->
        <div class="row">
            <zButton round>默认按钮</zButton>
            <zButton type="primary" round>主要按钮</zButton>
            <zButton type="success" round>成功按钮</zButton>
            <zButton type="info" round>信息按钮</zButton>
            <zButton type="warning" round>警告按钮</zButton>
            <zButton type="danger" round>危险按钮</zButton>
        </div>
      <!--      圆形        -->
        <div class="row">
            <zButton icon="search" circle></zButton>
            <zButton type="primary" icon="thumbs-up" circle></zButton>
            <zButton type="success" icon="email" circle></zButton>
            <zButton type="info" icon="shangchuan" circle></zButton>
            <zButton type="warning" icon="star" circle></zButton>
            <zButton type="danger" icon="success" circle></zButton>
        </div>
      <!--      禁用        -->
        <div class="row">
            <zButton disabled>默认按钮</zButton>
            <zButton type="primary" disabled>主要按钮</zButton>
            <zButton type="success" disabled>成功按钮</zButton>
            <zButton type="info" disabled>信息按钮</zButton>
            <zButton type="warning" disabled>警告按钮</zButton>
            <zButton type="danger" disabled>危险按钮</zButton>
        </div>
      <!--        混合双打        -->
        <div class="row">
            <zButton plain disabled>朴素按钮</zButton>
            <zButton type="primary" plain disabled>主要按钮</zButton>
            <zButton type="success" plain disabled>成功按钮</zButton>
            <zButton type="info" plain disabled>信息按钮</zButton>
            <zButton type="warning" plain disabled>警告按钮</zButton>
            <zButton type="danger" plain disabled>危险按钮</zButton>
        </div>
      <div class="row">
        <zButton round disabled>朴素按钮</zButton>
        <zButton type="primary" round disabled>主要按钮</zButton>
        <zButton type="success" round disabled>成功按钮</zButton>
        <zButton type="info" round disabled>信息按钮</zButton>
        <zButton type="warning" round disabled>警告按钮</zButton>
        <zButton type="danger" round disabled>危险按钮</zButton>
      </div>
      <div class="row">
        <zButton icon="search" disabled circle></zButton>
        <zButton type="primary" icon="thumbs-up" disabled circle></zButton>
        <zButton type="success" icon="email" disabled circle></zButton>
        <zButton type="info" icon="shangchuan" disabled circle></zButton>
        <zButton type="warning" icon="star" disabled circle></zButton>
        <zButton type="danger" icon="success" disabled circle></zButton>
      </div>
      <div class="row">
        <zButton type="primary" icon="search" ></zButton>
        <zButton type="primary" icon="thumbs-up" ></zButton>
        <zButton type="primary" icon="email" ></zButton>
        <zButton type="primary" icon="shangchuan" >上传</zButton>
        <zButton type="primary" icon="star" >收藏</zButton>
        <zButton type="primary" icon="success" ></zButton>
      </div>

      <zButton type="text">文字按钮</zButton>
      <zButton type="text" disabled>文字按钮</zButton>

      <zButton type="primary" :loading="true">加载中</zButton>

      <div class="row">
        <zButton>默认按钮</zButton>
        <zButton size="medium">中等按钮</zButton>
        <zButton size="small">小型按钮</zButton>
        <zButton size="mini">超小按钮</zButton>
      </div>
      <div class="row">
        <zButton round>默认按钮</zButton>
        <zButton size="medium" round>中等按钮</zButton>
        <zButton size="small" round>小型按钮</zButton>
        <zButton size="mini" round>超小按钮</zButton>
      </div>
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

    html {
      font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
    }
</style>
