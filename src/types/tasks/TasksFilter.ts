export default interface TasksFilter {
    context: {
        page?: number
        sort?: {
            property?: string
            direction?: 'desc' | 'asc'
        }
    },
    content: {
        completed: boolean
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
        }
    }
}