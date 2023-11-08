enum AppActions {
    SET_IS_LOADING = 'SET_IS_LOADING',
    SET_IS_INITIALIZED = 'SET_IS_INITIALIZED',
    SET_ERROR = 'SET_ERROR'
}

const AppInitialState = {
    isLoading: false,
    isInitialized: false,
    error: ''
}
export type AppInitialStateType = {
    isLoading: boolean,
    isInitialized: boolean,
    error: string
}

export type AppActionsType =
    ReturnType<typeof setAppIsLoading> |
    ReturnType<typeof setIsInitialized> |
    ReturnType<typeof setAppError>;

export const appReducer = (state: AppInitialStateType = AppInitialState, action: AppActionsType): AppInitialStateType => {
    switch (action.type) {
        case AppActions.SET_IS_LOADING:
        case AppActions.SET_IS_INITIALIZED:
        case AppActions.SET_ERROR:
            return {...state, ...action.payload}
        default:
            return state
    }
}

export const setAppIsLoading = (isLoading: boolean) => ({
    type: AppActions.SET_IS_LOADING, payload: {isLoading}
} as const)

export const setIsInitialized = (isInitialized: boolean) => ({
    type: AppActions.SET_IS_INITIALIZED, payload: {isInitialized}
} as const)

export const setAppError = (error: string) => ({
    type: AppActions.SET_ERROR, payload: {error}
} as const)
