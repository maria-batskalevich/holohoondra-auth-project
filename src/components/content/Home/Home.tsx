import React from 'react'
import {PATH} from "../Content/Content";
import {Link} from "react-router-dom";

export const Home = () => {

    return(
        <div>
            <h1>Home</h1>
            <Link to={PATH.SIGNUP}> Sign up</Link>
        </div>
    )
}