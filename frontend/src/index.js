import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import Routes from './routes'
import store from './components/Store';

ReactDOM.render(

  <Provider store={store}>
    <React.StrictMode>
      < Routes />
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);
