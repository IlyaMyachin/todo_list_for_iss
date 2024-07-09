import {defineStore} from 'pinia'
import TasksStore, {defaultTasksStore} from '@/types/tasks/TasksStore'

const defineTasksStore = defineStore('tasks', () => {
    const store: TasksStore = defaultTasksStore()

    return {
        ...store
    }
}, {
    persist: {
        afterRestore: (ctx) => {
            ctx.store.state.ready = true
        }
    }
})

const useTasksStore = (): TasksStore => defineTasksStore()

export default useTasksStore