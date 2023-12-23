import React from 'react';
import ReactDom from 'react-dom';
import { RouterProvider } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import App from './components/App';
import './index.css';

ReactDom.render(
  <Provider store={store}>
    <RouterProvider router={App} />
  </Provider>,
  document.getElementById('root'),
);
