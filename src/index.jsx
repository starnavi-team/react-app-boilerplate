import React from "react";
import ReactDOM from "react-dom";
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import style from "reset-css/reset.css";
import reducer from './reducers';
import ExamplePage from './pages/ExamplePage';

const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ &&
  window.__REDUX_DEVTOOLS_EXTENSION__());


ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Switch>
        <Route path="/" component={ExamplePage} />
      </Switch>
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
