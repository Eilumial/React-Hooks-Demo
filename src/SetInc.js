import React, { useContext } from "react";
import countContext from "./CountContext";

const SetInc = () => {
    const context = useContext(countContext);

    return(
        <>
        <button onClick={context.setIncHandler}>Increment</button>
        </>
    );
}

export default SetInc;