<template>
  <div id="app">
    <zButton></zButton>
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
