import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {Style, Container} from "./css/penis.jsx";
import Jisoo from "./photo/Jisoo.jpg";

const Element = () => {
  return (
    <div>
        <div style={{...Container,zIndex: "2"}}>
          <div style={{...Style}}>
          Home
          </div>
          <div style={{...Style}}>
          About
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

ReactDOM.render(<Element/>  , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
