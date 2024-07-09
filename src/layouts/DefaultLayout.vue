<template lang="pug">
ModalComponent
HeaderComponent
main
  router-view
</template>

<script lang="ts">
import {defineComponent} from 'vue'
import useAppStore from '@/pinia/app'
import HeaderComponent from '@/components/app/Header.vue'
import ModalComponent from '@/components/app/Modal.vue'

export default defineComponent({
  components: {
    HeaderComponent,
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