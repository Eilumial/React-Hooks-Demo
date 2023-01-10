import React, { useContext } from "react";
import colorContext from "./ColorContext";

const SetBlue = () => {
    const context = useContext(colorContext);

    return(
        <>
        <button onClick={context.setBlueHandler}>Set to Blue</button>
        </>
    );
}

export default SetBlue;