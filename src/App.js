// import logo from './logo.svg';
import { Route, withRouter } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import './scss/App.scss';
import HeaderContainer from './components/Header/HeaderContainer';
import Navbar from './components/Navbar/Navbar';
import LoginContainer from './components/LoginPage/LoginContainer';
import React from 'react';
import { initializeApp } from './redux/app-reducer';
import Preloader from './components/common/Preloader/Preloader';
import { connect } from 'react-redux';
import { Provider } from 'react-redux';
import { compose } from 'redux';
import store from './redux/redux-store';
import { withSuspense } from './HOC/withSuspense';

const DialogsContainer = React.lazy(() => import('./components/Dialogs/Dialogs'));
const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer'));
const UsersContainer = React.lazy(() => import('./components/Users/UsersContainer'));

class App extends React.Component {

  componentDidMount() {
    this.props.initializeApp()
  }

  render() {

    if (!this.props.initialized) return <Preloader />
    return (

      <div className="app__wrapper">
        <HeaderContainer />
        <div className="app__container">
          <div className="app__content">
            <Route path="/dialogs"
              render={withSuspense(DialogsContainer)} />
            <Route path="/profile/:userId?"
              render={withSuspense(ProfileContainer)} />
            <Route path="/users"
              render={withSuspense(UsersContainer)} />
            <Route path="/login"
              render={() => <LoginContainer />} />
          </div>
        </div>
      </div>
    )
  }

}

const mapStateToProps = (state) => {
  return {
    initialized: state.app.initialized,
    isAuth: state.auth.isAuth
  }
}

const AppContainer = compose(
  withRouter,
  connect(mapStateToProps, { initializeApp })
)(App)

const MaineApp = (props) => {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <AppContainer />
      </Provider>
    </BrowserRouter>
  )
}

export default MaineApp