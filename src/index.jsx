import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
//Redux Provider
import { Provider } from 'react-redux';
import store from './store/store';
//React Router
import { BrowserRouter } from 'react-router-dom';
//========================================================//

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </StrictMode>
);
