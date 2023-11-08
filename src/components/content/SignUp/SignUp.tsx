import React, {useState} from 'react';
import s from './SignUp.module.scss'
import {Link, useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";
import {useFormik} from "formik";
import 'react-toastify/dist/ReactToastify.css';
import {signUpTC} from "../../../bll/auth.reducer";
import {CustomInputField} from "../CustomFields/CustomInputField/CustomInputFiels";
import {PATH} from "../Content/Content";
import {usernameValidator} from "../../../utills/validators/username.validator";
import {passwordValidator} from "../../../utills/validators/password.validator";
import {emailValidator} from "../../../utills/validators/email.validator";
import {SignUpRequestDataType} from "../../../models/requests/auth.request";

type SignUpValuesType = SignUpRequestDataType & { confirmPassword: string }

export const SignUp = () => {
    const dispatch = useDispatch()
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const navigate = useNavigate()

    const initialValues: SignUpValuesType = {
        username: '',
        password: '',
        confirmPassword: '',
        email: '',
    }

    const validate = (values: SignUpValuesType) => {
        const errors: Partial<SignUpValuesType> = {}

        const usernameError = usernameValidator(values.username)
        if (usernameError) errors.username = usernameError

        const passwordError = passwordValidator(values.password)
        if(passwordError) errors.password = passwordError

        const emailError = emailValidator(values.email)
        if (emailError) errors.email = emailError

        if (values.password !== values.confirmPassword) {
            errors.confirmPassword = 'Those passwords didn’t match. Try again.'
        }

        return errors
    }

    const onSubmit = (values: SignUpValuesType) => {
        // @ts-ignore
        dispatch(signUpTC(values));
        navigate('/info')
    }

    const formik = useFormik({
        initialValues,
        validate,
        onSubmit
    })

    return (
        <div className={s.mainWrapper}>
            <form onSubmit={formik.handleSubmit}>
                <div className={s.mainHeader}>
                    <h3>Sign up</h3>
                    <CustomInputField
                        label={'Username'}
                        touched={formik.touched.username}
                        error={formik.errors.username}
                        {...formik.getFieldProps('username')}
                    />
                    <CustomInputField
                        type='password'
                        label={'Password'}
                        touched={formik.touched.password}
                        error={formik.errors.password}
                        {...formik.getFieldProps('password')}
                    />
                    <CustomInputField
                        type='password'
                        label={'Confirm password'}
                        touched={formik.touched.confirmPassword}
                        error={formik.errors.confirmPassword}
                        {...formik.getFieldProps('confirmPassword')}
                    />
                    <CustomInputField
                        label={'Email'}
                        touched={formik.touched.email}
                        error={formik.errors.email}
                        {...formik.getFieldProps('email')}
                    />
                </div>
                <div className={s.mainFooter}>
                    <button
                        type={'submit'}
                        className={s.completeButton}
                        disabled={isLoading}
                    >SignUp
                    </button>
                    <div className={s.mainFooterRedirect}>
                        <p>Don't have an account?
                            <Link to={PATH.LOGIN}> Login</Link>
                        </p>
                    </div>
                </div>
            </form>
        </div>

    )
        ;
};
