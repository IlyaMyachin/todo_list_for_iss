export interface AppState {
    modal: {
        active: boolean
    }
}

export const defaultAppState = (): AppState => {
    return {
        modal: {
            active: false,
        }
    }
}

export interface AppStateActions {
    reset: () => void,
    hideAppModal: () => void,
    showAppModal: () => void,
}

export default interface AppStore extends AppStateActions {
    state: AppState
}