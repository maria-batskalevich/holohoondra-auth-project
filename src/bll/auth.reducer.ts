import {authAPI, UserType} from "../dal/auth-api";
import {ThunkDispatchType} from "../utills/hooks";
import {handleServerNetworkError} from "../utills/error-utils";
import {setAppIsLoading} from "./app.reducer";
import {SignUpRequestDataType} from "../models/requests/auth.request";

enum AuthActions {
    SET_REGISTRATION_SUCCESS = 'SET_REGISTRATION_SUCCESS',
    SET_IS_ACTIVATED = 'SET_IS_ACTIVATED',
    SET_I_USER = 'SET_I_USER',
    SET_IS_AUTH = 'SET_IS_AUTH',
    SET_REG_DATA = 'SET_REG_DATA',
    SET_APP_ERROR = 'SET_APP_ERROR',
}

export const AuthInitState: AuthStateType = {
    registrationSuccess: false,
    isActivated: false,
    isAuth: false,
    iUser: null,
    // username: '',
    // password: '',
    // email: '',
}
export type AuthStateType = {
    registrationSuccess: boolean,
    isActivated: boolean
    isAuth: boolean,
    iUser: null | UserType,
    // username: string,
    // password: string,
    // email: string
}
export type AuthActionsType =
    ReturnType<typeof setIsAuth> |
    ReturnType<typeof setRegData> |
    ReturnType<typeof setRegistrationSuccess> |
    ReturnType<typeof setAppIsLoading> |
    ReturnType<typeof setIsActivated> |
    ReturnType<typeof setIUser>

export const authReducer = (state: AuthStateType = AuthInitState, action: AuthActionsType): AuthStateType => {
    switch (action.type) {
        case AuthActions.SET_REGISTRATION_SUCCESS:
        case AuthActions.SET_REG_DATA:
        case AuthActions.SET_IS_AUTH:
        case AuthActions.SET_IS_ACTIVATED:
        case AuthActions.SET_I_USER:
            return {...state, ...action.payload}
        default:
            return state
    }
}

export const setRegistrationSuccess = (registrationSuccess: boolean) => ({
    type: AuthActions.SET_REGISTRATION_SUCCESS, payload: {registrationSuccess}
} as const)
export const setIsActivated = (isActivated: boolean) => ({
    type: AuthActions.SET_IS_ACTIVATED, payload: {isActivated}
} as const)

export const setIUser = (iUser: UserType) => ({
    type: AuthActions.SET_I_USER, payload: {iUser}
} as const)
export const setIsAuth = (isAuth: boolean) => ({
    type: AuthActions.SET_IS_AUTH, payload: {isAuth}
} as const)

export const setRegData = (data: SignUpRequestDataType) => ({
    type: AuthActions.SET_REG_DATA, payload: {data}
} as const)


export const signUpTC = (data: SignUpRequestDataType) => async (dispatch: ThunkDispatchType) => {
    try {
        setAppIsLoading(true)
        const {user, tokens} = await authAPI.registration(data)
        // setIUser({user, tokens})
    } catch (error: any) {
        handleServerNetworkError(error.message, dispatch)
    } finally {
        dispatch(setRegistrationSuccess(false))
        dispatch(setAppIsLoading(false))
    }


}
