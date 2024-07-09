<template lang="pug">
section.section.tasks
  .container
    h1.title {{ t('app.title') }}
    .context.block
      form(@submit.prevent="addTask")
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
                button.button.is-info(@click="" type="submit") {{ t('app.actions.add') }}
</template>

<script lang="ts">
import {computed, defineComponent, ref, onBeforeMount, onBeforeUnmount, watch} from 'vue'
import useTasksStore from '@/pinia/tasks'
import useWatchers from '@/composables/useWatchers'
import Task, {defaultTask} from '@/types/tasks/Task'
import {useI18n} from 'vue-i18n'

export default defineComponent({
  setup() {
    const {t} = useI18n()
    const store = useTasksStore()
    const new_task = ref<Task>(defaultTask())

    const addTask = () => {
      store.addTask(new_task.value)
      new_task.value = defaultTask()
    }

    return {
      t,
      store,
      new_task,
      addTask,
    }
  }
})

</script>

<style lang="scss" scoped>

</style>