import {Dispatch} from 'redux'

import {toast} from "react-toastify";
import {UserInfoResponse} from "../dal/auth-api";
import {setAppError} from "../bll/app.reducer";

export const handleServerAppError = <D>(data: UserInfoResponse, dispatch: Dispatch<ReturnType<typeof setAppError>>) => {
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
