// import logo from './logo.svg';
import { Route } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import Navbar from './components/Navbar/Navbar';
import ProfileContainer from './components/Profile/ProfileContainer';
import UsersContainer from './components/Users/UsersContainer';

function App(props) {

  return (
    <BrowserRouter>

      <div className="container">
        <div className="app-wrapper">
          <HeaderContainer />
          <Navbar />
          <div className="app-wrapper-content">
            <Route path="/dialogs"
              render={() => <DialogsContainer />} />
            <Route path="/profile/:userId"
              render={() => <ProfileContainer />} />
            <Route path="/users"
              render={() => <UsersContainer />} />
          </div>
        </div>
      </div>
    </BrowserRouter>
  );

}


export default App;