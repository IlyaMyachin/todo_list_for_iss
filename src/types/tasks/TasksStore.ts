import Task from '@/types/tasks/Task'

export interface TasksFilter {
    context: {
        page?: number
        sort?: {
            property?: string
            direction?: 'desc' | 'asc'
        },
        delete_mode: {
            on: boolean,
            selected_tasks: number[]
        }
    },
    content: {
        completed: boolean,
        tasks_count: number,
        tasks_list: Task[]
    }
}

export const defaultTasksFilter = (): TasksFilter => {
    return {
        context: {
            page: 1,
            sort: {
                property: 'completed',
                direction: 'desc'
            },
            delete_mode: {
                on: false,
                selected_tasks: []
            }
        },
        content: {
            completed: true,
            tasks_count: 0,
            tasks_list: [],
        }
    }
}

export interface TasksStateActions {
    addTask: (task: Task) => void
    saveTask: (task: Task) => void
    deleteTask: (task: Task) => void
}

export default interface TasksStore extends TasksStateActions {
    filter: TasksFilter
}