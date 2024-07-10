import {defineStore} from 'pinia'
import useStoreFilter from '@/composables/useStoreFilter'
import Task from '@/types/tasks/Task'
import TasksStore, {TasksFilter, defaultTasksFilter} from '@/types/tasks/TasksStore'

const defineTasksStore = defineStore('tasks', () => {
    const store = useStoreFilter<TasksFilter>(defaultTasksFilter)

    const addTask = (task: Task) => {
        store.filter.value.content.tasks_count++
        task.id = store.filter.value.content.tasks_count
        store.filter.value.content.tasks_list.push(task)
    }

    const saveTask = (task: Task) => store.filter.value.content.tasks_list[store.filter.value.content.tasks_list.findIndex(item => item.id === task.id)] = task
    const deleteTask = (task: Task) => store.filter.value.content.tasks_list = store.filter.value.content.tasks_list.filter(item => item.id !== task.id)

    return {
        ...store,
        ...{
            addTask,
            saveTask,
            deleteTask
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