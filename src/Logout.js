import React, {useContext} from "react";
import authContext from "./AuthContext";

const Logout = () => {
    const context = useContext(authContext);

    return(
        <>
        <button onClick={context.logout}>Logout</button>
        </>
    );
}


export default Logout;