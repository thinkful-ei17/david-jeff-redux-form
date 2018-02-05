import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import './index.css';
import store from './store';
import ReduxForm from './redux-form';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <Provider store={store}>
    <ReduxForm />
  </Provider>, 
  document.getElementById('root')
);
registerServiceWorker();
