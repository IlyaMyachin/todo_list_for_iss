import Task from '@/types/tasks/Task'

export interface TasksFilter {
    context: {
        page?: number
        sort?: {
            property?: string
            direction?: 'desc' | 'asc'
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
}

export default interface TasksStore extends TasksStateActions {
    filter: TasksFilter
}