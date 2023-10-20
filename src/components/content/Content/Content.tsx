import React from 'react'
import {Routes, Route} from "react-router-dom";
import {Login} from "../Login/Login";
import {SignUp} from "../SignUp/SignUp";
import {Home} from "../Home/Home";

export enum PATH {
    ROOT = '/',
    HOME = '/home',
    LOGIN = '/login',
    SIGNUP = '/sign-up',
}

export const Content = () => {
    // const isAuth = useSelector(getIsAuth)

    return (
        <div>
            <Routes>
                <Route path={PATH.ROOT} element={<Home/>}/>
                <Route path={PATH.LOGIN} element={<Login/>}/>
                {/*<Route path={PATH.LOGIN} element={isAuth ? <Login/> : <Navigate to={PATH.SIGNUP}/>}/>*/}
                <Route path={PATH.SIGNUP} element={<SignUp/>}/>
            </Routes>
        </div>
    )
}