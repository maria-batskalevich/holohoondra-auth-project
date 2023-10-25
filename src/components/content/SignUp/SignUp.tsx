import React, {useState} from 'react';
import s from './SignUp.module.scss'
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {getIsAuth} from "../../../bll/auth.selector";
import {useFormik} from "formik";
import 'react-toastify/dist/ReactToastify.css';
import {RegistrationsData} from "../../../dal/auth-api";
import {signUpTC} from "../../../bll/auth.reducer";
import {CustomInputField} from "../CustomFields/CustomInputField/CustomInputFiels";
import {PATH} from "../Content/Content";

export const SignUp = () => {
    const dispatch = useDispatch()
    const isAuth = useSelector(getIsAuth)
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const formik = useFormik({
        initialValues: {
            username: '',
            password: '',
            email: '',
        },

        validate: (values) => {
            const errors: Partial<RegistrationsData> = {};
            if (!values.email) {
                errors.email = 'Required';
            } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
                errors.email = 'Invalid email address';
            }

            if (!values.password) {
                errors.password = 'Required'
            } else if (values.password.length < 3) {
                errors.password = 'Password length should be more than 3'
            }
            if (!values.username) {
                errors.username = 'Required';
            }
            return errors;
        },
        onSubmit: values => {
            setIsLoading(true);
            // @ts-ignore
            dispatch(signUpTC(values));
            setIsLoading(false);
        }
    })

    return (
        <div className={s.loginWrapper}>
            <form onSubmit={formik.handleSubmit}>
                <div className={s.loginHeader}>
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
                    <CustomInputField
                        label={'Email'}
                        touched={formik.touched.email}
                        error={formik.errors.email}
                        {...formik.getFieldProps('email')}
                    />
                </div>
                <div className={s.loginFooter}>
                    <button
                        type={'submit'}
                        className={s.completeSignupButton}
                        disabled={isLoading}
                    >Login
                    </button>
                    <div className={s.loginFooterRedirect}>
                        <p>Don't have an account?
                            <Link to={PATH.LOGIN}>Login</Link>
                        </p>
                    </div>
                </div>
            </form>
        </div>

    )
        ;
};
