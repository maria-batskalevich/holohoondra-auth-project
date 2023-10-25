import {authAPI, RegistrationsData} from "../dal/auth-api";
import {ThunkDispatchType} from "../utills/hooks";
import {handleServerNetworkError} from "../utills/error-utils";


enum AuthActions {
    SET_REGISTRATION_SUCCESS = 'SET_REGISTRATION_SUCCESS',
    SET_IS_AUTH = 'SET_IS_AUTH',
    SET_REG_DATA = 'SET_REG_DATA',
    SET_APP_ERROR = 'SET_APP_ERROR',
}

export const AuthInitState: AuthStateType = {
    registrationSuccess: false,
    isAuth: false,
    username: '',
    password: '',
    email: '',
}
export type AuthStateType = {
    registrationSuccess: boolean,
    isAuth: boolean,
    username: string,
    password: string,
    email: string
}
export type AuthActionsType =
    ReturnType<typeof setIsAuth> |
    ReturnType<typeof setRegData> |
    ReturnType<typeof setAppError> |
    ReturnType<typeof setRegistrationSuccess>

export const authReducer = (state: AuthStateType = AuthInitState, action: AuthActionsType): AuthStateType => {
    switch (action.type) {
        case AuthActions.SET_REGISTRATION_SUCCESS:
        case AuthActions.SET_REG_DATA:
        case AuthActions.SET_IS_AUTH:
            return {...state, ...action.payload}
        default:
            return state
    }
}

export const setRegistrationSuccess = (registrationSuccess: boolean) => ({
    type: AuthActions.SET_REGISTRATION_SUCCESS, payload:{registrationSuccess}
} as const)

export const setIsAuth = (isAuth: boolean) => ({
    type: AuthActions.SET_IS_AUTH, payload: {isAuth}
} as const)

export const setRegData = (data: RegistrationsData) => ({
    type: AuthActions.SET_REG_DATA, payload: {data}
} as const)
export const setAppError = (error: null | string) => ({
    type: AuthActions.SET_APP_ERROR,
    payload: {error}
} as const)


export const signUpTC = (data: RegistrationsData): any => async (dispatch: ThunkDispatchType) => {
    try {
        await authAPI.registration(data)
        // dispatch(setRegData(response))
        alert('OK)')
    } catch (error: any) {
        handleServerNetworkError(error.message, dispatch)
    }


}
