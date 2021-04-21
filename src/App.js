// import logo from './logo.svg';
import { Route } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import UsersContainer from './components/Users/UsersContainer';

function App(props) {

  return (
    <BrowserRouter>

      <div className="container">
        <div className="app-wrapper">
          <Header />
          <Navbar />
          <div className="app-wrapper-content">
            <Route path="/dialogs"
              render={() => <DialogsContainer />} />
            <Route path="/profile"
              render={() => <Profile />} />
            <Route path="/users"
              render={() => <UsersContainer />} />
          </div>
        </div>
      </div>
    </BrowserRouter>
  );

}


export default App;