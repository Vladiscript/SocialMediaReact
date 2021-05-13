import React from 'react';
import Header from './Header';
import { setUserData, toggleFetching, setAuthThunk } from '../../redux/auth-reducer'
import { connect } from 'react-redux';
import store from '../../redux/redux-store'

class HeaderContainer extends React.Component {

    componentDidMount() {
        this.props.setAuthThunk()
    }

    render() {
        console.log(store.getState().auth);
        return <Header {...this.props} />
    }
}

const mapStateToProps = state => {
    return {
        isAuth: state.auth.isAuth,
        login: state.auth.login
    }


}

export default connect(mapStateToProps, { setUserData, toggleFetching, setAuthThunk })(HeaderContainer);