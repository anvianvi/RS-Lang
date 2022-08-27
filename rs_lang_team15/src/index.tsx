import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { GoogleOAuthProvider } from "@react-oauth/google";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
       <GoogleOAuthProvider
    clientId='1041551134370-uaa0knavh9lmn0sc8cgev975hg29f9fj.apps.googleusercontent.com'
    >
    <App />
    </GoogleOAuthProvider>
  </React.StrictMode>
);

reportWebVitals();
