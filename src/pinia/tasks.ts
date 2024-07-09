import {defineStore} from 'pinia'
import Task from '@/types/tasks/Task'
import TasksStore, {TasksFilter, defaultTasksFilter} from '@/types/tasks/TasksStore'
import useStoreFilter from '@/composables/useStoreFilter'

const defineTasksStore = defineStore('tasks', () => {
    const store = useStoreFilter<TasksFilter>(defaultTasksFilter)

    const addTask = (task: Task) => {
        store.filter.value.content.tasks_count++
        task.id = store.filter.value.content.tasks_count
        store.filter.value.content.tasks_list.push(task)
    }

    return {
        ...store,
        ...{
            addTask,
        }
    }
}, {
    persist: {
        afterRestore: ctx => {
            ctx.store.setupFilter()
        }
    }
})

const useTasksStore = (): TasksStore => defineTasksStore()

export default useTasksStore