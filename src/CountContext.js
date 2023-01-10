import React from "react";

const CountContext = React.createContext({
    count: null,
    setIncHandler: ()=>{},
    setDecHandler: ()=>{}
});

export default CountContext;