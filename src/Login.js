import React, { useContext } from "react";
import authContext from "./AuthContext";

const Login = () => {
    const context = useContext(authContext);

    return(
        <>
        <button onClick={context.loginHandler}>Login</button>
        </>
    );
}

export default Login;