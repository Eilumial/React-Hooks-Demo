import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { ContextHook } from "../Router";
function Dashboard() {
  let contextData = useContext(ContextHook);

  let navigate = useNavigate();
  let logoutFnc = () => {
    localStorage.setItem("login", false);
    contextData.loginAction(false);
    navigate("/login");
  };

  let gotoUserPage = () => {
    navigate("/user/123");
  };

  return (
    <div>
      <h1>Dashboard</h1>
      <button onClick={gotoUserPage}>Go to User</button>
      <button onClick={logoutFnc}>Logout</button>
    </div>
  );
}

export default Dashboard;
