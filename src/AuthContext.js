import React from "react";

const AuthContext = React.createContext({
    auth: null,
    loginHandler: ()=>{},
    logout: ()=>{}
});

export default AuthContext;