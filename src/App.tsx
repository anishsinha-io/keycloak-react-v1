import { useEffect } from "react";
import Keycloak from "keycloak-js";
import reactLogo from "./assets/react.svg";
import "./App.css";
import UserService from "./services/UserService";

function App() {
  return (
    <div className="App">
      {UserService.isLoggedIn() ? (
        <div>
          Logged in! Token: {UserService.getToken()}
          <button onClick={() => UserService.doLogout()}>Logout</button>
        </div>
      ) : (
        <button onClick={() => UserService.doLogin()}>Login</button>
      )}
    </div>
  );
}

export default App;
