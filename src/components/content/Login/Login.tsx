import React, {useState} from 'react';
import s from '../SignUp/SignUp.module.scss'
import {Link} from "react-router-dom";
import {useFormik} from "formik";
import 'react-toastify/dist/ReactToastify.css';
import {CustomInputField} from "../CustomFields/CustomInputField/CustomInputFiels";
import {PATH} from "../Content/Content";
import {SignInRequestDataType} from "../../../models/requests/auth.request";
import {requiredValidator} from "../../../utills/validators/required.validator";


export const Login = () => {
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const initialValues: SignInRequestDataType = {
        username: '',
        password: '',
    }

    const validate = (values: SignInRequestDataType) => {
        const errors: Partial<SignInRequestDataType> = {}

        const usernameError = requiredValidator(values.username)
        if (usernameError) errors.username = usernameError

        const passwordError = requiredValidator(values.password)
        if(passwordError) errors.password = passwordError

        return errors
    }

    const onSubmit = (values: SignInRequestDataType) => {

    }


    const formik = useFormik({
        initialValues,
        validate,
        onSubmit,
    })

    return (
        <div className={s.mainWrapper}>
            <form onSubmit={formik.handleSubmit}>
                <div className={s.mainHeader}>
                    <h3>Sign in</h3>
                    <CustomInputField
                        label={'Username'}
                        touched={formik.touched.username}
                        error={formik.errors.username}
                        {...formik.getFieldProps('username')}
                    />
                    <CustomInputField
                        label={'Password'}
                        touched={formik.touched.password}
                        error={formik.errors.password}
                        {...formik.getFieldProps('password')}
                    />

                </div>
                <div className={s.mainFooter}>
                    <button
                        type={'submit'}
                        className={s.completeButton}
                        disabled={isLoading}
                    >Login
                    </button>
                    <div className={s.mainFooterRedirect}>
                        <p>Don't have an account?
                            <Link to={PATH.SIGNUP}> Sign up</Link>
                        </p>
                    </div>
                </div>
            </form>
        </div>

    )
        ;
};
