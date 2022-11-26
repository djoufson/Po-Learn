import React from 'react';
import store from './app/store';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom/client';
import NotFound from './views/NotFound';
import {
  BrowserRouter,
  Route,
  Switch
} from "react-router-dom";
import './css/index.css';
import Home from './views/Home';
import Login from './views/Login';
import SignUp from './views/SignUp';
import Teach from './views/Teach';
import Profile from './views/Profile';
import Course from './views/Course';
import Categories from './views/Categories';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
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
        path='/teach-on-polearn'>
        <Teach/>
      </Route>
      <Route
        exact
        path='/profile'>
        <Profile/>
      </Route>
      <Route 
        exact 
        path='/'>
        <Home/>
      </Route>
      <Route 
        exact
        path='/courses/categories/:slug'>
        <Categories/>
      </Route>
      <Route 
        exact
        path='/courses/:slug'>
        <Course/>
      </Route>
      <Route 
        exact
        path='/courses/:slug/:id'>
        <Course/>
      </Route>
      <Route
        path="*">
        <NotFound/>
      </Route>
    </Switch>
  </BrowserRouter>
);
