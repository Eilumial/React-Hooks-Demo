import React, { useContext } from "react";
import colorContext from "./ColorContext";

const SetRed = () => {
    const context = useContext(colorContext);

    return(
        <>
        <button onClick={context.setRedHandler}>Set to Red</button>
        </>
    );
}

export default SetRed;