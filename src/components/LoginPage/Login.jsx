import React from 'react'
import { loginSchema } from '../../utilities/validators'
import { Redirect } from 'react-router'
import { Formik, Form, Field } from 'formik';


const LoginForm = (props) => {

    if (props.isAuth) { return <Redirect to='/profile' /> }

    return (
        <div>
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
                                <Field type='email' name='email' placeholder='Your email' />
                                {errors.email && touched.email ? <div>{errors.email}</div> : null}
                            </div>
                            <div>
                                <Field type="password" name="password" placeholder='Your password' />
                                {errors.password && touched.password ? <div>{errors.password}</div> : null}
                            </div>
                            <div>
                                <b>Remember me:</b>
                                <Field type="checkbox" name="rememberMe" />
                            </div>
                            {props.captchaURL && <img src={props.captchaURL} />}
                            {props.captchaURL && <Field name='captcha' />}
                            {props.error ? <div>{props.error}</div> : null}
                            <button type="submit" disabled={isSubmitting}>
                                Login
                            </button>
                        </Form>
                    )
                }}
            </Formik>
        </div>


    )
}



export default LoginForm

