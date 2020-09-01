import React from 'react';

import IndexPage from "./pages/index/index";
import AboutPage from "./pages/about";
import UserPage from "./pages/user";
import ContactPage from "./pages/contact";

import { Switch, Route } from "react-router-dom";


import "./App.css";

function App() {
  return (
    <Switch>
      <Route path='/about'>
        <AboutPage />
      </Route>
      <Route path='/user'>
        <UserPage />
      </Route>
      <Route path='/contact'>
        <ContactPage />
      </Route>
      <Route path='/'>
        <IndexPage />
      </Route>
    </Switch>
  );
}

export default App;
