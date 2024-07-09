export default interface Task {
    id?: number,
    title?: string,
    description?: string,
    completed?: boolean,
}

export const defaultTask = (): Task => {
    return {}
}