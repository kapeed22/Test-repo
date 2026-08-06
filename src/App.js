import React from "react";
import "./App.css";

function App() {

  const login = (e) => {
    e.preventDefault();
    alert("Login button clicked");
  };

  return (
    <div className="container">
      <div className="card">

        <h2>Corporate Login</h2>

        <form onSubmit={login}>

          <input
            type="text"
            placeholder="User Name"
          />

          <input
            type="password"
            placeholder="Password"
          />

          <button type="submit">
            Login
          </button>

        </form>

      </div>
    </div>
  );
}

export default App;
