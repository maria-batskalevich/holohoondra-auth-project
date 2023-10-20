import {applyMiddleware, combineReducers, legacy_createStore} from "redux";
import thunkMiddleware from 'redux-thunk'
import {authReducer} from "./auth.reducer";

const rootReducer = combineReducers({
    auth: authReducer
})

export const store = legacy_createStore(rootReducer, applyMiddleware(thunkMiddleware))
export type RootStateType = ReturnType<typeof rootReducer>