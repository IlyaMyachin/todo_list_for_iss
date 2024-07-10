<template lang="pug">
section.section.tasks
  template(v-if="app_store.state.modal.active")
    TaskModalComponent(:modal_task="modal_task")
  .container.is-fullhd
    h1.title {{ t('app.title') }}
    .columns
      .column
        .context.block
          form(@submit.prevent="addTask")
            .columns
              .column.is-one-third
                .field
                  .control
                    input.input(v-model="new_task.title" placeholder="Название")
              .column
                .field
                  .control
                    button.button.is-primary.is-outlined(@click="" type="submit") {{ t('app.actions.add') }}
        .block(v-if="task_store.filter.content.tasks_list.length")
          TaskCardComponent(v-for="task in task_store.filter.content.tasks_list" :task="task" :key="task.id" @click="openTaskModal(task)" :class="{'is-success': task.completed}")
        .block(v-else) Заданий нет
      .column.tasks-filter-column
        .context.block
          TasksFilterComponent
</template>

<script lang="ts">
import {defineComponent, ref} from 'vue'
import useAppStore from '@/pinia/app'
import useTasksStore from '@/pinia/tasks'
import Task, {defaultTask} from '@/types/tasks/Task'
import {useI18n} from 'vue-i18n'
import TaskModalComponent from '@/components/tasks/TaskModal.vue'
import TaskCardComponent from '@/components/tasks/TaskCard.vue'
import TasksFilterComponent from '@/components/tasks/TasksFilter.vue'

export default defineComponent({
  components: {
    TaskCardComponent,
    TaskModalComponent,
    TasksFilterComponent
  },
  setup() {
    const {t} = useI18n()
    const app_store = useAppStore()
    const task_store = useTasksStore()
    const new_task = ref<Task>(defaultTask())

    const modal_task = ref<Task>(defaultTask())
    const openTaskModal = (task: Task) => {
      modal_task.value = task
      app_store.showAppModal()
    }

    const addTask = () => {
      task_store.addTask(new_task.value)
      new_task.value = defaultTask()
    }

    return {
      t,
      app_store,
      task_store,
      new_task,
      modal_task,
      addTask,
      openTaskModal
    }
  }
})

</script>

<style lang="scss" scoped>
.tasks {
  &-filter-column{
    max-width: 360px;
  }
}
</style>