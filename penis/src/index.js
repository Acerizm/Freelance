import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {Style, Container} from "./css/penis.jsx";
import Jisoo from "./photo/Jisoo.jpg";
import {About} from "./about.js"
import
{
    BrowserRouter as Router,
    Link,
    Switch,
    Route
} from "react-router-dom"

const Home = () => {
  return (
    <div>
        <div style={{...Container,zIndex: "2"}}>
          <div style={{...Style}}>
          Home
          </div>
          <div style={{...Style}}>
          <Link to={"/About"} > About </Link>
          </div>
          <div style={{...Style}}>
          Contact
          </div>
          <div style={{...Style}}>
          Log In
          </div>
        </div>
        <div style={{zIndex: "1"}}>
        <img src={Jisoo} style={{height: "100%", width: "100%", paddingTop: "50px"}}/>
        </div>
      </div>
  )
}

const Stacia = () => {
  return (
    <Router>
      <Switch>
        <Route exact path = {"/"} component = {Home}/>
        <Route exact path = {"/About"} component = {About}/>
      </Switch>
    </Router>
  )
}

ReactDOM.render(<Stacia/>  , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
