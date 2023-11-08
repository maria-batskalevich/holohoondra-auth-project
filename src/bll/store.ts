import {applyMiddleware, combineReducers, legacy_createStore} from "redux";
import thunkMiddleware from 'redux-thunk'
import {AuthActionsType, authReducer} from "./auth.reducer";
import {AppActionsType, appReducer} from "./app.reducer";

const rootReducer = combineReducers({
    auth: authReducer,
    app: appReducer,
})

export const store = legacy_createStore(rootReducer, applyMiddleware(thunkMiddleware))
export type RootStateType = ReturnType<typeof rootReducer>
export type RootActionsType = AuthActionsType | AppActionsType