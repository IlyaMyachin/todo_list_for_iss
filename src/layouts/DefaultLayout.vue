<template lang="pug">
ModalComponent
main
  router-view
</template>

<script lang="ts">
import {defineComponent} from 'vue'
import useAppStore from '@/pinia/app'
import ModalComponent from '@/components/app/Modal.vue'

export default defineComponent({
  components: {
    ModalComponent
  },
  setup() {
    const appStore = useAppStore()

    return {
      appStore,
    }
  },
})

</script>

<style scoped lang="scss">

</style>