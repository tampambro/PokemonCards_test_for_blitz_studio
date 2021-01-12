import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import store from './redux/store';
import { BrowserRouter as Router } from 'react-router-dom';

ReactDOM.render(
  <Router>
    <Fragment>
      <Provider store={store}>
        <App />
      </Provider>
    </Fragment>
  </Router>,
  document.getElementById('root')
);

serviceWorker.unregister();
