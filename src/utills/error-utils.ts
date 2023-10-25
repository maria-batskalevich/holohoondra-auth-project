import {Dispatch} from 'redux'
import {setAppError} from "../bll/auth.reducer";
import {toast} from "react-toastify";
import {UsersInfoResponse} from "../dal/auth-api";

export const handleServerAppError = <D>(data: UsersInfoResponse, dispatch: Dispatch<ReturnType<typeof setAppError>>) => {
	if (data.message.length) {
		dispatch(setAppError(data.message[0]))
		toast.error(data.message[0])
	} else {
		dispatch(setAppError('Some error occurred'))
	}
}

export const handleServerNetworkError = (error: { message: string }, dispatch: Dispatch<ReturnType<typeof setAppError>>) => {
	dispatch(setAppError(error.message ? error.message : 'Some error occurred'))
	toast(error.message ? error.message : 'Some error occurred')
}
