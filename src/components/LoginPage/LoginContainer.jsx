import React from 'react'
import { connect } from 'react-redux'
import { loginThunk } from '../../redux/auth-reducer'
import LoginForm from './Login'


class LoginContainer extends React.Component {
    render() {
        return <div>
            <h1>Login</h1>
            <LoginForm {...this.props} />
        </div>
    }
}

let mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth
    }
}

export default connect(mapStateToProps, { loginThunk })(LoginContainer)