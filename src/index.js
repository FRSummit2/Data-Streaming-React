import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "./assets/css/style.css";
import "./helper";

import { createStore, compose, applyMiddleware } from "redux";
import allReducer from "./reducer";
import { Provider } from "react-redux";
import thunk from "redux-thunk";

// const store = createStore(
//   allReducer,
//   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
// )

const reduxDevTools = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

function configureStore() {
  return createStore(allReducer, reduxDevTools(applyMiddleware(thunk)));
}

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
reportWebVitals();
