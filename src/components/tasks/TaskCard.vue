<template lang="pug">
.task-card.is-clickable
  .task-card-grid(:class="{'has-background-success-light': task.completed}")
    .task-card-grid-cell
      button.button.is-small.is-rounded.is-tiny-rounded(
        @click.stop="toggleTaskStatus(task)"
        :class="{'is-success': task.completed}")
        font-awesome-icon(icon="check")
    .task-card-grid-cell {{ task.id }}. {{ task.title }}
    .task-card-grid-cell {{ task.description }}
    .task-card-grid-cell {{ task.completed ? 'Выполенено' : 'Не выполнено' }}
    .task-card-grid-cell
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
    const tasks_store = useTasksStore()

    const toggleTaskStatus = (task: Task) => task.completed = !task.completed

    return {
      tasks_store,
      toggleTaskStatus
    }
  }
})

</script>

<style lang="scss" scoped>
.task-card {
  &-grid {
    display: grid;
    grid-template-columns: 50px 25% auto 15% 50px;
    grid-template-rows: auto;
    min-height: 1fr;
    background: $scheme-main;
    margin-top: 0.375rem;

    > * {
      padding: $block-spacing / 1.5;
    }

    &:hover{
      background-color: $body-background-color;
    }
  }
}

</style>