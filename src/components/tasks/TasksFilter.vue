<template lang="pug">
.block
  h3.mb-0.title {{ t('app.filter.title') }}
.block
  .field
    .control
      input.switch.is-rounded.is-outlined#delete_mode(v-model="tasks_store.filter.context.delete_mode.on" type="checkbox")
      label.label(for="delete_mode") {{ t('app.filter.delete_mode') }}
.block
  .field
    .control
      .select
        select(v-model="tasks_store.filter.context.sort.property")
          option(v-for="(option, alias) in sort_options" :value="alias") {{ option }}
</template>

<script lang="ts">
import {defineComponent, computed} from 'vue'
import {useI18n} from 'vue-i18n'
import useTasksStore from '@/pinia/tasks'

export default defineComponent({
  setup() {
    const {t,tm} = useI18n()
    const tasks_store = useTasksStore()

    const sort_options = computed((): object => tm('tasks.filter.sort.options'))

    return {
      t,tm,
      tasks_store,
      sort_options
    }
  }
})
</script>

<style scoped lang="scss">

</style>