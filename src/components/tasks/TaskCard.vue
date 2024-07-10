<template lang="pug">
.task-card.is-clickable
  .task-card-grid.is-size-65
    .task-card-grid-title {{ task.title }}
    .task-card-grid-description {{ task.description }}
    .task-card-grid-state {{ task.completed ? 'Выполнено' : 'Не выполнено' }}
</template>

<script lang="ts">
import {defineComponent, PropType} from 'vue'
import Task from '@/types/tasks/Task'

export default defineComponent({
  props: {
    task: {
      type: Object as PropType<Task>,
      required: true
    }
  },
  setup() {
    return
  }
})

</script>

<style lang="scss" scoped>
.task-card {
  &-grid {
    display: grid;
    grid-template-columns: 5fr 5fr 2fr;
    grid-template-rows: auto;
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