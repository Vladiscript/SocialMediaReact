// import logo from './logo.svg';
import { Route } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Dialogs from './components/Dialogs/Dialogs';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';

function App(props) {

  return (
    <BrowserRouter>

      <div className="container">
        <div className="app-wrapper">
          <Header />
          <Navbar />
          <div className="app-wrapper-content">
            <Route path="/dialogs"
              render={() => <Dialogs
                messagesPage={props.state.messagesPage} dispatch={props.dispatch} />} />
            <Route path="/profile"
              render={() => <Profile dispatch={props.dispatch}
                profilePage={props.state.profilePage} />} />
          </div>
        </div>
      </div>
    </BrowserRouter>
  );

}


export default App;