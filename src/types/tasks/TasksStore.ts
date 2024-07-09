import TasksFilter, {defaultTasksFilter} from '@/types/tasks/TasksFilter'
import Task from '@/types/tasks/Task'

export interface TasksStateActions {
    //createTask: (task: Task) => Task[],
    //updateTask: (task: Task) => Task
}

export default interface TasksStore {
    state: {
        ready: boolean,
        tasks_count: number,
    },
    tasks_list: Task[]
    filter: TasksFilter
}

export const defaultTasksStore = (): TasksStore => {
    return {
        state: {
            ready: false,
            tasks_count: 0,
        },
        tasks_list: [],
        filter: defaultTasksFilter()
    }
}
