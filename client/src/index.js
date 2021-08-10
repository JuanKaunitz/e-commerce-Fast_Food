import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import store from "./Redux/store/store";
import { Provider } from "react-redux";
import { Auth0Provider } from "@auth0/auth0-react";
import { domain, clientId } from "../src/components/Authentication/octavio";
import Log from '../src/components/Authentication/Log';

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <Auth0Provider
        domain={domain}
        clientId={clientId}
        redirectUri={window.location.origin}
      >
      <App />
      </Auth0Provider>
    </React.StrictMode>
  </Provider>,
  document.getElementById("root")
);
