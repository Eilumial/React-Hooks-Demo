import React, { useState } from "react";
// import {useEffect, useRef, useMemo, useReducer} from "react";

//CRUD
//Create
//Read
//Update
//Delete
const App = () => {
  const dummy_arr = [
    "Andrew Garfield",
    "Brad Pitt",
    "Jude Law",
    "Robert Downery Jr.",
    "Chris Pratt",
    "Chirs Hamsworth",
    "Scarlett Johnson",
  ];

  const numArr = [11, 23, 41, 55, 88];

  const [actorInput, setActorInput] = useState("");
  const [actorArr, setActorArr] = useState(dummy_arr);
  const [errorMsg, setErrorMsg] = useState("");
  //   const [searchRes, setSearchRes] = useState("");
  const [searchStr, setSearchStr] = useState("");

  const isValid = (txt) => {
    //const specialCharRegex = /^([A-Z]{1}[a-zA-Z]{2,})+$/;

    //var NamRgxVar = /[A-Z][a-z]{2,}(?: [A-Z][a-z]*)*/;
    var testRgx = /^[A-Z]{1}([A-Za-z]+)(?: [A-Z]{1}[A-Za-z]*)*$/;
    return txt.match(testRgx);
  };

  // const isCap = (txt) => {
  //   let regex = /^[A-Z]$/;
  //   //let regex = /\b[^A-Z ]/;
  //   let arr = txt.split(" ");
  //   //let valid = true;
  //   for (let x in arr) {
  //     if (!arr[x].charAt(0).match(regex)) {
  //       //if (arr[x].match(regex)) {
  //       //valid = false;
  //       return false;
  //     }
  //   }
  //   return true;
  // };

  const addHandler = () => {
    //console.log(isCap(actorInput));
    if (!isValid(actorInput)) {
      //if (!isCap(actorInput)) {
      // alert(
      //   "Please enter a valid name. (At least 2 letters, can only contains alphabets, first letter of each word must be Capitalized"
      // );
      setErrorMsg(
        "Please enter a valid name. (At least 2 letters, can only contains alphabets, first letter of each word must be Capitalized"
      );
    }
    // else if (actorInput === "") {
    //   alert("Please enter a name.");
    // }
    // else if (actorInput.length < 3) {
    //   alert("Please enter a name longer than 2 letters");
    //   return;
    // }
    else {
      setActorArr([...actorArr, actorInput]);
      setErrorMsg("");
    }
    setActorInput("");
  };

  const searchHandler = () => {
    // //let i = actorArr.filter(element => element.includes(searchStr));
    // if(i!==-1){
    // 	setSearchRes(searchStr);
    // }
    //     if (actorArr.includes(searchStr)) {
    // 	setSearchRes(searchStr);
    //     } else {
    //       setSearchRes("Result not found");
    //     }
  };

  return (
    <>
      {/* <h1>My favorite Actors</h1> */}
      <form>
        <input
          type="text"
          placeholder="Enter actor"
          value={actorInput}
          onChange={(e) => setActorInput(e.target.value)}
        />
        {/* Button inside of form will be treated as the submit button if type is not stated 
                set to type button to prevent form from submitting and refreshing*/}
        <button type="button" onClick={addHandler}>
          Add
        </button>
        <p style={{ color: "red" }}>{errorMsg}</p>
        <p>{actorInput}</p>
      </form>
      <form>
        <input
          type="search"
          value={searchStr}
          placerholder="Search Actor"
          onChange={(e) => setSearchStr(e.target.value)}
        />
        <button type="button" onClick={searchHandler}>
          Search
        </button>
      </form>
      {/* {searchRes} */}
      <ul>
        {/* {actorArr.map((actor) => {
                  return <li>{actor}</li>;
                })} */}
        {actorArr
          .filter((actor) =>
            actor.toLowerCase().includes(searchStr.toLowerCase())
          )
          .sort()
          //For Desc, Sort first then Reverse
          // .sort().reverse()
          .map((actor, index) => (
            <li>
              {index + 1}. {actor}
            </li>
          ))}
      </ul>
      {/* 999 is the starting value, defaults to 0 */}
      <p>sum999={numArr.reduce((sum, item)=>sum+item,999)}</p>
      <p>sum={numArr.reduce((sum, item)=>sum+item)}</p>
      <p>sub={numArr.reduce((sub, item)=>sub-item,0)}</p>
      <p>mul={numArr.reduce((mul, item)=>mul*item)}</p>
      <p>div={numArr.reduce((div, item)=>div/item)}</p>
    </>
  );
};
export default App;
