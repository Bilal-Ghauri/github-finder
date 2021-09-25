import React from 'react';
import './App.css';
import Navbar from './components/layouts/Navbar';
import User from './components/users/User';
import { BrowserRouter as Router , Switch , Route } from 'react-router-dom';
import GithubState from './context/GithubState'
import About from './components/links/About';
import Home from './components/links/Home';
import Error from './components/links/Error';
const App = ()=>{
    return (
      <GithubState>
        <Router>
          <div className="App">
            <Navbar/>
            <div className="container">
              <Switch>
                <Route exact path="/" component={Home}></Route>
                <Route exact path='/about' component={About}/>
                <Route exact path='/user/:login' component={User}/>
                <Route component = { Error}/>
              </Switch>
            </div>
          </div>
        </Router>
      </GithubState>
    );
} 
export default App;


