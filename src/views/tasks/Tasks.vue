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
        .context.block(v-if="tasks_store.filter.context.delete_mode.on && !!tasks_store.filter.context.delete_mode.selected_tasks?.length")
          .columns.is-align-items-center
            .column {{ t('tasks.selected.title', {tasks: t('tasks.selected.count', tasks_store.filter.context.delete_mode.selected_tasks?.length), from: tasks_store.filter.content.tasks_list?.length}) }}
            .column.is-narrow
              .field.is-grouped
                .control
                  button.button.is-outlined(@click="tasks_store.unselectTasks") {{ t('app.actions.unselect') }}
                .control
                  button.button.is-warning.is-outlined(@click="tasks_store.deleteSelectedTasks") {{ t('app.actions.delete') }}
        .block(v-if="sorted_tasks.length")
          .tasks-grid.has-text-weight-medium
            .tasks-grid-cell
            .tasks-grid-cell {{ t('tasks.props.title') }}
            .tasks-grid-cell {{ t('tasks.props.description') }}
            .tasks-grid-cell {{ t('tasks.props.status') }}
            .tasks-grid-cell
          TaskCardComponent(v-for="task in sorted_tasks" :task="task" :key="task.id" @click="openTaskModal(task)")
        .block(v-else) {{ t('tasks.not_found') }}
      .column.tasks-filter-column
        .context.block
          TasksFilterComponent
</template>

<script lang="ts">
import {defineComponent, onBeforeMount, onBeforeUnmount, ref, watch} from 'vue'
import {useI18n} from 'vue-i18n'
import useAppStore from '@/pinia/app'
import useTasksStore from '@/pinia/tasks'
import useWatchers from '@/composables/useWatchers'
import Task, {defaultTask} from '@/types/tasks/Task'
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
    const tasks_store = useTasksStore()

    const {
      watchers,
      unwatchAll,
    } = useWatchers([
      'tasks_list',
      'task_store_filter_sorting',
    ])

    const modal_task = ref<Task>(defaultTask())
    const openTaskModal = (task: Task) => {
      modal_task.value = task
      app_store.showAppModal()
    }

    const new_task = ref<Task>(defaultTask())
    const addTask = () => {
      tasks_store.addTask(new_task.value)
      new_task.value = defaultTask()
    }

    const sorted_tasks = ref<Task[]>([])
    const sortTasks = () => {
      switch(tasks_store.filter.context.sort.property) {
        case 'all':
          sorted_tasks.value = tasks_store.filter.content.tasks_list
          break
        case 'completed':
          sorted_tasks.value = tasks_store.filter.content.tasks_list.filter(task => task.completed)
          break
        case 'uncompleted':
          sorted_tasks.value = tasks_store.filter.content.tasks_list.filter(task => !task.completed)
          break
      }
    }

    const watchTasksList = () => watchers['tasks_list'] = watch(() => tasks_store.filter.content.tasks_list, sortTasks, {
      immediate: true,
      deep: true
    })

    const watchTasksStoreFilterSorting = () => watchers['task_store_filter_sorting'] = watch(tasks_store.filter.context.sort, sortTasks, {
      deep: true
    })


    onBeforeMount(watchTasksStoreFilterSorting)
    onBeforeMount(watchTasksList)
    onBeforeUnmount(unwatchAll)

    return {
      t,
      app_store,
      tasks_store,
      new_task,
      modal_task,
      sorted_tasks,
      addTask,
      openTaskModal,
    }
  }
})

</script>

<style lang="scss" scoped>
.tasks {
  &-grid {
    display: grid;
    grid-template-columns: 50px 25% auto 15% 50px;
    grid-template-rows: auto;
    margin-top: 0.375rem;
    border-bottom: 3px $scheme-invert solid;

    > * {
      padding: $block-spacing / 1.4;
    }
  }

  &-filter-column{
    max-width: 360px;
  }
}
</style>