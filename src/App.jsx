import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import  Home from './Home';
import  About  from './About';
import  Tournament  from './Tournament';
import  Gallery  from './Gallery';
import  Team  from './Team';
import  Login  from './Login';
import Contact from './Contact';
const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
        <Route path="/tournament" component={Tournament} />
        <Route path="/gallery" component={Gallery} />
        <Route path="/team" component={Team} />
        <Route path="/Contact" component={Contact} />
        <Route path="/login" component={Login} />
      </Switch>
    </Router>
  );
};

export default App;;