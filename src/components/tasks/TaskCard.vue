<template lang="pug">
.task-card.is-clickable
  .task-grid(:class="{'has-background-success-light': task.completed}")
    .task-grid-cell
      button.button.is-rounded.is-tiny-rounded(
        @click.stop="toggleTaskStatus(task)"
        :class="{'is-success': task.completed}")
        font-awesome-icon(icon="check")
    .task-grid-cell {{ task.id }}. {{ task.title }}
    .task-grid-cell {{ task.description }}
    .task-grid-cell {{ task.completed ? t('tasks.props.completed') : t('tasks.props.uncompleted') }}
    .task-grid-cell
      .field(v-show="tasks_store.filter.context.delete_mode.on" @click.stop="")
        input.is-checkradio(
          v-model="tasks_store.filter.context.delete_mode.selected_tasks"
          type="checkbox"
          :value="task.id"
          :id="task.id"
        )
        label(:for="task.id")
</template>

<script lang="ts">
import {defineComponent, PropType} from 'vue'
import {useI18n} from 'vue-i18n'
import useTasksStore from '@/pinia/tasks'
import Task from '@/types/tasks/Task'

export default defineComponent({
  props: {
    task: {
      type: Object as PropType<Task>,
      required: true
    }
  },
  setup() {
    const {t} = useI18n()
    const tasks_store = useTasksStore()

    const toggleTaskStatus = (task: Task) => task.completed = !task.completed

    return {
      t,
      tasks_store,
      toggleTaskStatus
    }
  }
})

</script>

<style lang="scss" scoped>
.task {
  &-grid {
    display: grid;
    grid-template-columns: 50px 25% auto 15% 50px;
    grid-template-rows: auto;
    align-items: center;
    margin-top: 0.375rem;
    background: $scheme-main;

    > * {
      padding: $block-spacing / 1.5;
    }

    &:hover{
      background-color: $body-background-color;
    }
  }
}

</style>