import React from 'react';
import ReactDOM from 'react-dom/client';
import './css/index.css';
import NotFound from './views/NotFound';
import {
  BrowserRouter,
  Route,
  Switch,
  Redirect
} from "react-router-dom";
import Home from './views/Home';
import Navbar from './views/components/Navbar';
import About from './views/About';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Navbar/>
    <Switch>
      <Route 
        exact 
        path='/'>
        <Home/>
      </Route>
      <Route 
        exact
        path='/about'>
        <About/>
      </Route>
      <Route
        exact
        path='/404'
      >
        <NotFound/>
      </Route>
      <Redirect
        path='/404'/>
    </Switch>
  </BrowserRouter>
);
