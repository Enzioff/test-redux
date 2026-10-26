import React from 'react';
import ReactDOM from 'react-dom/client';
import App from "./app/App";
import {Provider} from "react-redux";
import {store} from "./shared/store/store";
import './shared/styles/style.css';
import 'bootstrap/dist/css/bootstrap.min.css';

if (!document.cookie.includes('userKey=')) {
  document.cookie =
    'userKey=00000000-0000-0000-0000-000000000001; path=/; SameSite=Lax';
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
