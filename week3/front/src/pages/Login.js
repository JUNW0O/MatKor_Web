import "./Login.css";
import { useState } from "react";
import { useSearchParams } from "react-router-dom";

function Login(props) {
  var id = "";
  var password = "";
  return (
    <div className="Login">
      <h1>Login</h1>
      <h2>{props.time}</h2>
      <input type="text" placeholder="Username" />
      <input type="password" placeholder="Password" />
      <button
        onClick={() => {
          window.location.href = `/login?id=${id}&passowrd=${password}`;
        }}>
        Login
      </button>
    </div>
  );
}

export default Login;
