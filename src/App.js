import React, { Component } from 'react';
import { Switch, Route } from "react-router-dom";

import './App.css';
import api from './api';
import HomePage from './components/HomePage';
import NotFound from './components/NotFound';
import Navigation from './components/Navigation';
import PhoneList from './components/PhoneList';
import PhoneDetails from './components/PhoneDetails';
import PhoneEdit from './components/PhoneEdit';
import SignUp from './components/SignUp';
import Login from './components/Login';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentUser: null
    };
  }

  componentDidMount() {
    // check with the backend to see if we are already logged in
    api.get("/checklogin")
      .then(response => {
        console.log("Check LOG IN 🤔", response.data);
        this.updateUser(response.data.userDoc);
      })
      .catch(err => {
        console.log(err);
        alert("Sorry! There was a problem. 💩");
      });
  }

  updateUser(userDoc) {
    this.setState({ currentUser: userDoc });
  }

  logoutClick() {
    api.delete("/logout")
      .then(() => {
        this.updateUser(null);
      })
      .catch(err => {
        console.log(err);
        alert("Sorry! Something went wrong. 💩");
      });
  }

  render() {
    const { currentUser } = this.state;
    return (
      <main>
        <header>
          <h1>Ironphones</h1>
          <Navigation currentUser={currentUser} />

          {currentUser && (
            <span>
              <b>{currentUser.email}</b>
              <button onClick={() => this.logoutClick()}>
                Log Out
              </button>
            </span>
          )}
        </header>

        <Switch>
          {/* use Route's "render" instead of "component" to pass props */}
          <Route exact path="/" render={() =>
            <HomePage currentUser={currentUser} />
          }/>
          <Route path="/phone-list" component={PhoneList} />
          <Route exact path="/phone-details/:phoneId" component={PhoneDetails} />
          <Route path="/phone-details/:phoneId/edit" component={PhoneEdit} />
          <Route path="/signup" render={() =>
            <SignUp currentUser={currentUser}
              onSignUp={userDoc => this.updateUser(userDoc)} />
          }/>
          <Route path="/login" render={() =>
            <Login currentUser={currentUser}
              onLogin={userDoc => this.updateUser(userDoc)} />
          }/>
          <Route component={NotFound} />
        </Switch>

        <footer>
          <p>Made with 📱 at Ironhack</p>
        </footer>
      </main>
    );
  }
}

export default App;
