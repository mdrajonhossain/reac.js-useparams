import React from 'react';
import {BrowserRouter as Router,Switch,Route, Link} from 'react-router-dom';
import Home from './Home';
import About from './About';
import Contact from './Contact';



import Login from './Login';


import Private from './Private';






const App = (props) => {
 
var name = "12547891adfasdfasdf455";


  return (
    <div className="container" >
      <h1 >React Route</h1>


        <Router>
        <p align="center">
        <Link to="/">Home</Link>
        | <Link to="/about">About</Link> |
         <Link to={`/contact/${name}`}>Login</Link></p>

        <Switch>
            <Route exact path="/">
              <Home/>
            </Route>
            

            <Route  exact path="/about">
              <About/>
            </Route>

            <Route  exact path="/Login">
              <Login/>
            </Route>


            <Private exact path="/contact/:name">
              <Contact/>
            </Private>
        </Switch>
      </Router>

    </div >
  )
}

export default App;
