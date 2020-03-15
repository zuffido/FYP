import React from 'react';
import './App.css';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import SignIn from './components/signIn.js'
import NavigBar from './components/NavBar.js'
import NotFound from './components/notFound.js'
import HomePage from './components/homePage.js'
import SignUp from './components/signUp.js'
import CreditCard from './components/creditCard.js'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavigBar />
        <Switch>
        {/*Bc homepage for some reason nai render hora */}

          <Route path="/" exact components={HomePage} />
          <Route path='/signIn' component = {SignIn} />
          <Route path="/signUp" component={SignUp} />
          <Route path="/creditCard" component={CreditCard} />
          <Route component={NotFound} />
        </Switch>
      </div>
    </BrowserRouter>

  );
}
export default App;
