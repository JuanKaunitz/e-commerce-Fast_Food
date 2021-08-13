import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import store from "./Redux/store/store";
import axios from "axios";
import { Provider } from "react-redux";
import { Auth0Provider } from "@auth0/auth0-react";
import { domain, clientId } from "../src/components/Authentication/octavio";
import dotenv from "dotenv";
dotenv.config();

axios.defaults.baseURL = process.env.REACT_APP_API || "http://localhost:5001";

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>      
      <App />      
    </React.StrictMode>
  </Provider>,
  document.getElementById("root")
);
