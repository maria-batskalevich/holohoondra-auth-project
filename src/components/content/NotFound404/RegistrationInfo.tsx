import React from "react";
import s from "./RegistrationInfo.module.scss"
import {useNavigate} from "react-router-dom";

export const RegistrationInfo = () => {
    const navigate = useNavigate()
    const onClickHandler = () => {
        navigate('/login')
    }


    return (
        <div className={s.wrapper}>
            <p className={s.subtitle}>Thank you for signing up!</p>
            <p className={s.title}>Please check you email for further instructions how to complete your account
                setup) <br/> If you have already been there and something went wrong, try logging into your
                account)</p>
            <button className={s.completeButton} onClick={onClickHandler}>Login</button>
        </div>
    )
}