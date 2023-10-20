enum AuthActions {
    SET_IS_AUTH = 'SET_IS_AUTH',
}

export const AuthInitState: AuthStateType = {
    isAuth: true,
}
export type AuthStateType = {
    isAuth: boolean,
}
export type ActionStateType = ReturnType<typeof setIsAuth>

export const authReducer = (state: AuthStateType = AuthInitState, action: ActionStateType): AuthStateType => {
    switch (action.type) {
        case AuthActions.SET_IS_AUTH:
            return {...state, ...action.payload}
        default:
            return state
    }
}

export const setIsAuth = (isAuth: boolean) => ({
    type: AuthActions.SET_IS_AUTH, payload: {isAuth}
} as const)
