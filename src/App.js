import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Services from './components/Services/Services';
import Coaching from './components/Coaching/Coaching';
import About from './components/About/About';
import Footer from './components/Footer/Footer';

import NotFound from './components/NotFound/NotFound';
import Country from './components/Country/Country';
import { useEffect, useState } from 'react';


function App() {
  

  return (
    <div>
      <Router>
        <Header></Header>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/home">
            <Home />
          </Route>
          <Route exact path="/coaching">
            <Coaching />
          </Route>
          <Route exact path="/service">
            <Services />
          </Route>
          <Route exact path="/country">
            <Country />
          </Route>
          <Route exact path="/about">
            <About />
          </Route>

          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;
