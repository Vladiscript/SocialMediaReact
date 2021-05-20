import React from 'react'
import { Form, Field } from 'react-final-form'
import { connect } from 'react-redux'
import { required } from '../../utilities/validators'
import { Input } from '../common/Preloader/FormControl/FormControl'
import { loginThunk } from '../../redux/auth-reducer'
import { Redirect } from 'react-router'

const LoginForm = (props) => {

    const onSubmit = (FormData) => {
        props.loginThunk(FormData.email, FormData.password, FormData.rememberMe)
    }
    if (props.isAuth) { return <Redirect to='/profile' /> }
    // const maxLength16 = maxLengthCreator(16)
    // const composeValidators = (...validators) => value =>
    //     validators.reduce((error, validator) => error || validator(value), undefined)
    return (
        <Form
            onSubmit={onSubmit}
            render={({ handleSubmit }) => (
                <form onSubmit={handleSubmit}>
                    <div>
                        <Field validate={required} placeholder={'placeholder'} component={Input} name={'email'} />
                    </div>
                    <div>
                        <Field validate={required} component={Input} type={'password'} placeholder={'password'} name={'password'} />
                    </div>
                    <div>
                        <Field component='input' type='checkbox' name={'rememberMe'} />remember me
                    </div>
                    <div>
                        <button type="submit">Log in</button>
                    </div>
                </form>
            )}
        />)
}



export default LoginForm