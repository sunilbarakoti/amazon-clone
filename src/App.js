/*
  - This is child component to the main component index.js
  - This component handles routes in the application.'react-router-dom' has been used for the same.
  - There are basically three pages: home, login and checkout and routes for them are "/", "/login", "/checkout"
  - Apart from the routing, even the user login status is being checked and 
    the user status is updated on the global state variable user.
*/


import React, { useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Home/Home';
import Checkout from './Components/Checkout/Checkout';
import Login from './Components/Login/Login';
import { useStateValue } from './Components/StateProvider';
import { auth } from './Firebase';
import './App.css';



function App() {

  const [{ user }, dispatch] = useStateValue();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {

      if (authUser) {
        dispatch({
          type: "SET_USER",
          user: authUser
        })
      } else {
        dispatch({
          type: "SET_USER",
          user: null
        })
      }
    })

    return () => {
      unsubscribe();
    }
  }, [])
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/checkout">
            <Navbar />
            <Checkout />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/">
            <Navbar />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
