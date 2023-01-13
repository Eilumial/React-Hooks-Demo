import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { ContextHook } from "../Router";
function Login() {
  const navigate = useNavigate();
  let contextData = useContext(ContextHook);

  let gotoDashboard = () => {
    console.log("Go to Dash");
    localStorage.setItem("login",true);
    contextData.loginAction(true);
    navigate("/dashboard");
  };

  return (
    <div>
      <h1>Login form</h1>
      <form>
        <input type="text" name="Username" placeholder="Username" />
        <br />
        <br />
        <input type="text" name="Password" placeholder="password" />
        <br />
        <br />
        <button type="button" onClick={gotoDashboard}>
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;
