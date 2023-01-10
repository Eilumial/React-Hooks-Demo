import React from "react";

const ColorContext = React.createContext({
    color: null,
    setRedHandler: ()=>{},
    setBlueHandler: ()=>{}
});

export default ColorContext;