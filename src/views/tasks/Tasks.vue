<template lang="pug">
pre {{ store.tasks_list }}
section.section.tasks
  .container
    h1.title Список дел
    .columns
      .column.is-one-third
        .field
          .control
            input.input(v-model="new_task.title" placeholder="Название")
      .column.is-one-third
        .field
          .control
            input.input(v-model="new_task.description" placeholder="Описание")
      .column
        .field
          .control
            button.button(@click="addTask") Добавить

</template>

<script lang="ts">
import {defineComponent, ref} from 'vue'
import useTasksStore from '@/pinia/tasks'
import Task, {defaultTask} from '@/types/tasks/Task'

export default defineComponent({
  setup() {
    const store = useTasksStore()
    const new_task = ref<Task>(defaultTask())

    const addTask = () => {
      store.state.tasks_count++
      new_task.value.id = store.state.tasks_count

      store.tasks_list.push(new_task.value)
      new_task.value = defaultTask()
    }
    return {
      store,
      new_task,
      addTask
    }
  }
})

</script>

<style lang="scss" scoped>

</style>