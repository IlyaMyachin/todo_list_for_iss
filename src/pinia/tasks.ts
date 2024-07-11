import {defineStore} from 'pinia'
import useStoreFilter from '@/composables/useStoreFilter'
import Task from '@/types/tasks/Task'
import TasksStore, {TasksFilter, defaultTasksFilter} from '@/types/tasks/TasksStore'

const defineTasksStore = defineStore('tasks', () => {
    const store = useStoreFilter<TasksFilter>(defaultTasksFilter)

    const addTask = (task: Task) => {
        store.filter.value.content.tasks_ids_count++
        task.id = store.filter.value.content.tasks_ids_count
        store.filter.value.content.tasks_list.push(task)
    }

    const saveTask = (task: Task) => store.filter.value.content.tasks_list[store.filter.value.content.tasks_list.findIndex(item => item.id === task.id)] = task
    const deleteTask = (task: Task) => store.filter.value.content.tasks_list = store.filter.value.content.tasks_list.filter(item => item.id !== task.id)
    const deleteSelectedTasks = () => {
        store.filter.value.content.tasks_list = store.filter.value.content.tasks_list.filter(item => {
            if (item.id) !store.filter.value.context.delete_mode.selected_tasks.includes(item.id)
        })
        store.filter.value.context.delete_mode.selected_tasks = []
    }

    const unselectTasks = () => store.filter.value.context.delete_mode.selected_tasks = []

    return {
        ...store,
        ...{
            addTask,
            saveTask,
            deleteTask,
            deleteSelectedTasks,
            unselectTasks
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