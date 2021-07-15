import React from 'react'
import { connect } from 'react-redux'
import { loginThunk } from '../../redux/auth-reducer'
import LoginForm from './Login'
import s from './Login.module.scss'


class LoginContainer extends React.Component {
    render() {
        return <div className={s.login__container}>
            <div>vlad9864gr@gmail.com <br />social20</div>
            <h1 className={s.login__title}>Login</h1>
            <LoginForm {...this.props} />
        </div>
    }
}

let mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth,
        error: state.auth.error,
        captchaURL: state.auth.captchaURL
    }
}

export default connect(mapStateToProps, { loginThunk })(LoginContainer)