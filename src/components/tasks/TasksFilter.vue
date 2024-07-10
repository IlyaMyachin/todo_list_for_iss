<template lang="pug">
h3.mb-0.title Фильтр
.block
  .field
    .control
      //input.switch.is-rounded.is-outlined#days_visible(v-model="store.filter.content.days_visible" type="checkbox")
      //label.label(for="days_visible") {{ t('fraud.filter.label.days_visible') }}
</template>

<script lang="ts">
import {defineComponent} from 'vue'
import useTasksStore from '@/pinia/tasks'

export default defineComponent({
  setup() {
    const task_store = useTasksStore()

    return {
      task_store
    }
  }
})
</script>

<style scoped lang="scss">

</style>