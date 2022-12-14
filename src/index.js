import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Auth0Provider } from '@auth0/auth0-react';
import configData from "./config.json";
import "./static/styles/button.css";
import "./static/styles/images.css";
import "./static/styles/container.css";
import "./static/styles/icons.css";
import "./static/styles/review.css";
import "./static/styles/menu.css";
import "./static/styles/form.css";
import "./static/styles/profile.css";


const providerConfig = {
  domain: configData.domain,
  clientId: configData.clientId,
  audience: configData.audience,
  redirectUri: window.location.origin,
  useRefreshTokens: true,
  cacheLocation: "memory"
};


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Auth0Provider {...providerConfig}>
      <App />
    </Auth0Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
