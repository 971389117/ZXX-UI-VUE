<template>
  <div id="app">
    <zButton>默认按钮</zButton>
    <zButton type="primary">主要按钮</zButton>
    <zButton type="success">成功按钮</zButton>
    <zButton type="info">信息按钮</zButton>
    <zButton type="warning">警告按钮</zButton>
    <zButton type="danger">危险按钮</zButton>

    <zIcon></zIcon>
  </div>
</template>

<script>
import zButton from './components/z-button.vue'
import zIcon from './components/z-icon.vue'

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
</style>
