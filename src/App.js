import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Services from './components/pages/Services';
import SignUp from './components/pages/SignUp';
import BecomeSitter from "./components/pages/BecomeSitter";
import HelpCenter from "./components/pages/HelpCenter";
import AboutTheApp from "./components/pages/AboutTheApp";
import Contact from "./components/pages/Contact";
import Author from "./components/pages/Author";
import FAQs from "./components/pages/FAQs";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/services' component={Services} />
          <Route path='/sign-up' component={SignUp} />
          <Route path='/help-center' component={HelpCenter} />
          <Route path='/become-sitter' component={BecomeSitter} />
          <Route path='/about-the-app' component={AboutTheApp} />
          <Route path='/contact' component={Contact} />
          <Route path='/author' component={Author} />
          <Route path='/faqs' component={FAQs} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
