import React from 'react'
import {Routes, Route, Navigate} from "react-router-dom";
import {Login} from "../Login/Login";
import {Home} from "../Home/Home";
import {useSelector} from "react-redux";
import {getIsAuth} from "../../../bll/auth.selector";
import {Profile} from "../Profile/Profile";
import {SignUp} from "../SignUp/SignUp";

export enum PATH {
    ROOT = '/',
    HOME = '/home',
    LOGIN = '/login',
    SIGNUP = '/sign-up',
    PROFILE = '/profile',
}

export const Content = () => {
    const isAuth = useSelector(getIsAuth)

    return (
        <Routes>
            <Route path={PATH.ROOT} element={<Home/>}/>
            <Route path={PATH.LOGIN} element={!isAuth ? <Login/> : <Navigate to={PATH.PROFILE}/>}/>
            <Route path={PATH.SIGNUP} element={<SignUp/>}/>
            <Route path={PATH.PROFILE} element={<Profile/>}/>
        </Routes>

    )
}