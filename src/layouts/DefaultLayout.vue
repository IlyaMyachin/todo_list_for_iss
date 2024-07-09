<template lang="pug">
HeaderComponent
main
  router-view
</template>

<script lang="ts">
import {defineComponent} from 'vue'
import HeaderComponent from '@/components/app/Header.vue'

export default defineComponent({
  components: {
    HeaderComponent
  },
  setup() {
      return {

      }
  },
})

</script>

<style scoped lang="scss">

</style>