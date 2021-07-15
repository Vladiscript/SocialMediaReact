import React from 'react'
import { loginSchema } from '../../utilities/validators'
import { Redirect } from 'react-router'
import { Formik, Form, Field } from 'formik';
import s from './Login.module.scss'


const LoginForm = (props) => {

    if (props.isAuth) { return <Redirect to='/profile' /> }

    return (
        <div>
            <div className={s.login__body}>
                <Formik
                    initialValues={{ email: '', password: '', rememberMe: false, captcha: '' }}
                    validationSchema={loginSchema}
                    onSubmit={(values, { setSubmitting }) => {
                        setSubmitting(true)
                        props.loginThunk(values.email, values.password, values.rememberMe, values.captcha, values)
                        setSubmitting(false)
                    }}
                >
                    {({ isSubmitting, errors, touched }) => {
                        return (

                            <Form>
                                <div>
                                    <Field className={s.login__input} type='email' name='email' placeholder='Your email' />
                                    {errors.email && touched.email ? <div>{errors.email}</div> : null}
                                </div>
                                <div>
                                    <Field className={s.login__input} type="password" name="password" placeholder='Your password' />
                                    {errors.password && touched.password ? <div>{errors.password}</div> : null}
                                </div>
                                {/* <div>
                                    <b>Remember me:</b>
                                    <Field className={s.login__input} type="checkbox" name="rememberMe" />
                                </div> */}
                                {props.captchaURL && <img src={props.captchaURL} />}
                                {props.captchaURL && <Field name='captcha' />}
                                {props.error ? <div>{props.error}</div> : null}
                                <button className={s.login__btn} type="submit" disabled={isSubmitting}>
                                    Login
                                </button>
                            </Form>
                        )
                    }}
                </Formik>
            </div>
        </div>



    )
}



export default LoginForm

