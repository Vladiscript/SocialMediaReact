import React from "react"
import { connect } from "react-redux"
import { Redirect } from "react-router"


export const withAuthRedirect = (Component) => {

    let mapStateToProps = (state) => {
        return {
            isAuth: state.auth.isAuth
        }
    }

    class RedirectComponent extends React.Component {
        render() {

            if (!this.props.isAuth) return <Redirect to='/login' />



            return <Component {...this.props} />
        }
    }

    let connectedAuthRedirectComponent = connect(mapStateToProps)(RedirectComponent)
    return connectedAuthRedirectComponent
}