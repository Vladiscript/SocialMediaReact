// import logo from './logo.svg';
import { Route, withRouter } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import Navbar from './components/Navbar/Navbar';
import ProfileContainer from './components/Profile/ProfileContainer';
import UsersContainer from './components/Users/UsersContainer';
import LoginContainer from './components/LoginPage/LoginContainer';
import React from 'react';
import { initializeApp } from './redux/app-reducer';
import Preloader from './components/common/Preloader/Preloader';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { withAuthRedirect } from './HOC/withAuthRedirect';

class App extends React.Component {

  componentDidMount() {
    this.props.initializeApp()
  }

  render() {

    if (!this.props.initialized) return <Preloader />

    return (
      <BrowserRouter>

        <div className="container">
          <div className="app-wrapper">
            <HeaderContainer />
            <Navbar />
            <div className="app-wrapper-content">
              <Route path="/dialogs"
                render={() => <DialogsContainer />} />
              <Route path="/profile/:userId?"
                render={() => <ProfileContainer />} />
              <Route path="/users"
                render={() => <UsersContainer />} />
              <Route path="/login"
                render={() => <LoginContainer />} />
            </div>
          </div>
        </div>
      </BrowserRouter>)
  }

}

const mapStateToProps = (state) => {
  return {
    initialized: state.app.initialized
  }
}

export default compose(connect(mapStateToProps, { initializeApp }),
  // withRouter,
  // withAuthRedirect,

)(App)
