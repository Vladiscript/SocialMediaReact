import React from 'react';
import Header from './Header';
import { setUserData, toggleFetching, setAuthThunk, logoutThunk } from '../../redux/auth-reducer'
import { connect } from 'react-redux';

class HeaderContainer extends React.Component {

    render() {
        return <Header {...this.props} logout={this.props.logoutThunk} />
    }
}

const mapStateToProps = state => {
    return {
        isAuth: state.auth.isAuth,
        login: state.auth.login
    }


}

export default connect(mapStateToProps, { setUserData, toggleFetching, setAuthThunk, logoutThunk })(HeaderContainer);