import React from "react";
import ReactDOM from "react-dom";
import "./semantic.darkly.css";
import "./index.css";
import "./components.scss";
import { App } from "./App";
import * as serviceWorker from "./serviceWorker";
import { Provider } from "react-redux";
import store from "./store";
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);


let gameServerUrl = 'http://ha-game.herokuapp.com'
if(window.location.hostname.indexOf('localhost') >= 0) {
  gameServerUrl = 'http://localhost:4000'
}
window.HAGameServerUrl = gameServerUrl

let gameClientUrl = 'http://ha-game.herokuapp.com'
if(window.location.hostname.indexOf('localhost') >= 0) {
  gameClientUrl = 'http://localhost:8080'
}
window.HAGameClientUrl = gameClientUrl

let socialClientUrl = 'http://ha-social.herokuapp.com'
if(window.location.hostname.indexOf('localhost') >= 0) {
  socialClientUrl = 'http://localhost:3005'
}
window.HASocialClientUrl = socialClientUrl

let socialServerUrl = 'http://ha-social.herokuapp.com'
if(window.location.hostname.indexOf('localhost') >= 0) {
  socialServerUrl = 'http://localhost:5000'
}
window.HASocialServerUrl = socialServerUrl

let landingUrl = 'http://ha-landing.herokuapp.com'
if(window.location.hostname.indexOf('localhost') >= 0) {
  landingUrl = 'http://localhost:3000'
}
window.HALandingUrl = landingUrl

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
