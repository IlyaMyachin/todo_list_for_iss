<template lang="pug">
Teleport(to=".modal-custom-content")
  h1.title {{ t('tasks.modal.title') }}
  form(@submit.prevent="saveTask(modal_task)")
    .field
      label.label {{ t('tasks.props.title') }}
      .control
        input.input(v-model="modal_task.title")
    .field
      label.label {{ t('tasks.props.description') }}
      .control
        textarea.textarea(v-model="modal_task.description")
    .field.is-grouped.is-justify-content-space-between
      .control
        button.button.is-primary(type="submit") {{ t('app.actions.save') }}
      .control
        button.button.is-danger(@click="deleteTask(modal_task)") {{ t('app.actions.delete') }}
</template>

<script lang="ts">
import {defineComponent, PropType} from 'vue'
import {useI18n} from 'vue-i18n'
import useTasksStore from '@/pinia/tasks'
import Task from '@/types/tasks/Task'

export default defineComponent({
  props: {
    modal_task: {
      type: Object as PropType<Task>,
      required: true
    }
  },
  setup() {
    const {t} = useI18n()
    const task_store = useTasksStore()

    const saveTask = (task: Task): void => task_store.saveTask(task)
    const deleteTask = (task: Task): void => task_store.deleteTask(task)

    return {
      t,
      saveTask,
      deleteTask
    }
  }
})

</script>

<style lang="scss" scoped>

</style>