import React from 'react'
import {Link} from "react-router-dom";
import {PATH} from "../Content/Content";

export const Login = () => {

    return(
        <div>
            <h1>Login</h1>
            <Link to={PATH.SIGNUP}> Sign up</Link>
        </div>
    )
}