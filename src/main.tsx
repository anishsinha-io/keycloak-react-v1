import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import UserService from "./services/UserService";

const renderApp = () =>
  ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );

UserService.initKeycloak(renderApp);
