import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import './App.css'
import {store} from './store/store'
import { Provider } from 'react-redux';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<Provider store={store}>
  <App/>
</Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))

