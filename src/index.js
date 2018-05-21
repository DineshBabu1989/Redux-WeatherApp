import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import App from './components/App'
import rootReducer from './reducers'
import { createStore, applyMiddleware } from "redux";
import ReduxPromise from "redux-promise";
import { composeWithDevTools } from 'redux-devtools-extension';
import 'bootstrap/dist/css/bootstrap.min.css';

//setting up store with middleware and redux dev tools viewers
const store = createStore(rootReducer, composeWithDevTools(
  applyMiddleware(ReduxPromise),
  // other store enhancers if any
));
render(
  <Provider  store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
