<template>
  <div>
    <app-header />
    <Nuxt />
  </div>
</template>

<script>
import AppHeader from '~/components/AppHeader.vue'

export default {
  name: 'Default',
  components: {
    AppHeader
  }
}
</script>

<style scoped>

</style>
