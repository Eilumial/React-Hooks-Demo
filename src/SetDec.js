import React, { useContext } from "react";
import countContext from "./CountContext";

const SetDec = () => {
    const context = useContext(countContext);

    return(
        <>
        <button onClick={context.setDecHandler}>Decrement</button>
        </>
    );
}

export default SetDec;