<template lang="pug">
Teleport(to=".modal-custom-content")
  h1.title Детальной описание задачи
  form(@submit.prevent="updateTask")
    .field
      label.label Название
      .control
        input.input(v-model="modal_task.title")
    .field
      label.label Описание
      .control
        textarea.textarea(v-model="modal_task.description")
    .field.is-grouped.is-justify-content-space-between
      .control
        button.button.is-primary(type="submit") Сохранить
      .control
        button.button.is-danger Удалить
</template>

<script lang="ts">
import {defineComponent, PropType} from 'vue'
import Task from '@/types/tasks/Task'
import useTasksStore from '@/pinia/tasks'

export default defineComponent({
  props: {
    modal_task: {
      type: Object as PropType<Task>,
      required: true
    }
  },
  setup() {
    const task_store = useTasksStore()

    const updateTask = (task: Task): void => {}
    const deleteTask = (task: Task): void => {}

    return {
      updateTask,
      deleteTask
    }
  }
})

</script>

<style lang="scss" scoped>

</style>