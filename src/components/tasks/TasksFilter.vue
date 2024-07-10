<template lang="pug">
.block
  h3.mb-0.title Фильтр
.block
  .field
    .control
      input.switch.is-rounded.is-outlined#delete_mode(v-model="task_store.filter.context.delete_mode.on" type="checkbox")
      label.label(for="delete_mode") Режим удаления
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