import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store/store';
import { ScrollTop } from './components/ScrollTop';

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <ScrollTop />
      <App />
    </Provider>
  </BrowserRouter>,
  document.getElementById('root')
);
// создать приложение npx create-react-app (название)
// yarn add react-router-dom redux react-redux react-hook-form axios node-sass@4.14
reportWebVitals();
