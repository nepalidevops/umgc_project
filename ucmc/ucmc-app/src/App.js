import React, { useEffect } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import Patients from './components/Patients';
import './App.css';
import { useCookies } from 'react-cookie';
import { useDispatch, useSelector } from 'react-redux';
import { login, logout, selectUser } from './features/userSlice';
import axios from 'axios';

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  const [cookie, setCookie, removeCookie] = useCookies(['token']);

  const signOut = () => {
    localStorage.removeItem('user');
    removeCookie('token');
    dispatch(logout());
  }

  useEffect(() => {
    const loggedUser = localStorage.getItem('user');
    if (Object.keys(cookie).length !== 0 && loggedUser) {
      // Logged in
      dispatch(
        login(JSON.parse(loggedUser))
      );
    } else {
      // Logged out
      dispatch(logout());
    }

    return;
  }, [dispatch]);
  
  return (
    <div className="App">
      <Router>
        {(!user) ? (
          <Login />
        ) : (
          <Switch>
            <Route path="/patients" exact>
              <Patients />
            </Route>
            <Route path="/">
              <Dashboard />
            </Route>
          </Switch>
        )}
      </Router>
    </div>
  );
}

export default App;
