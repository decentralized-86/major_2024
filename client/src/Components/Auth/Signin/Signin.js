import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Signin() {
  const navigate = useNavigate();
  const [loginFailed, setLoginFailed] = useState(false);

  function handleLogin() {
    // Replace this with your actual login logic
    const loginSuccessful = true;

    if (loginSuccessful) {
      navigate("/home/dashboard");
    } else {
      setLoginFailed(true);
      alert("Login failed");
    }
  }
  return (
    <div>
      <button className="btn-primary p-1 m-1" onClick={handleLogin}>
        Log in
      </button>
      <Link to="/signup/studentdetails">
        <button className="btn-primary p-1 m-1">
          Don't have an account? Sign up
        </button>
      </Link>
      {!loginFailed ? null : (
        <div style={{ color: "red", fontWeight: "bold" }}>Try Again!!!!</div>
      )}
    </div>
  );
}

export default Signin;
