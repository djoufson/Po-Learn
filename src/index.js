import React from 'react';
import ReactDOM from 'react-dom/client';
import './css/index.css';
import NotFound from './views/NotFound';
import {
  BrowserRouter,
  Redirect,
  Route,
  Switch
} from "react-router-dom";
import Home from './views/Home';
import Navbar from './views/components/Navbar';
import Login from './views/Login';
import SignUp from './views/SignUp';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Navbar/>
    <Switch>
      <Route
        path='/login'
        exact>
          <Login/>
      </Route>
      <Route
        exact
        path='/sign-up'>
          <SignUp/>
      </Route>
      <Route 
        exact 
        path='/'>
        <Home/>
      </Route>
      <Route
        exact
        path='/404'>
        <NotFound/>
      </Route>
      <Redirect
        to='/404'/>
    </Switch>
  </BrowserRouter>
);
