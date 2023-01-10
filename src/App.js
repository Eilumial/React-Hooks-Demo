import React, { useState, useEffect, useRef, useMemo, useReducer } from "react";
import Login from "./Login";
import Logout from "./Logout";
import authContext from "./AuthContext";
import colorContext from "./ColorContext";
import CountContext from "./CountContext";
import SetRed from "./SetRed";
import SetBlue from "./SetBlue";
import SetInc from "./SetInc";
import SetDec from "./SetDec";
import TableRows from "./TableRows";
import "./stuff.css";

//useReducer Demo
// const initialState = 0;
// const reducer = (state, action) => {
//   switch (action) {
//     case 1:
//       return state + 1;
//     case 2:
//       return state + 2;
//     case 3:
//       return state + 3;
//     case "Reset":
//       return 0;
//     default:
//       throw new Error('Error');
//       //return state;
//   }
// };

const DUMMY_CART = [
  {
    id: "Item1",
    title: "Test Item1",
    price: 100,
  },
];

const COLOR_LIST = ["SlateBlue", "Red"];

const reducer = (state, action) => {
  switch (action) {
    case "Item 1":
      for (let x of state) {
        console.log(x);
        let y = false;
        if (x.id === "Item1") {
          if (x["quantity"] == undefined) {
            x["quantity"] = 1;
          } else {
            x["quantity"] = x["quantity"] + 1;
          }
          y = true;
        }
        if (y) {
          return state;
        } else {
          return [
            {
              id: "Item1",
              title: "Test Item1",
              price: 100,
            },
            ...state,
          ];
        }
      }
      return state;

    case "Panasonic TV":
      return [
        {
          id: "Pan1",
          title: "Panasonic 32 HDTV",
          price: 800,
        },
        ...state,
      ];
    // case "Playstation 4":
    //   return [
    //     {
    //       id: "PS4",
    //       title: "Playstation 5",
    //       price: 500,
    //     },
    //     ...state,
    //   ];
    case "Playstation 5":
      return [
        {
          id: "PS5",
          title: "Playstation 5",
          price: 500,
        },
        ...state,
      ];
    //console.log(state);
    //return state;
  }
};
//React Fragment DEMO
// class App extends React.Component {
//   render() {
//     return (
//       <React.Fragment>
//         <h2>Without React Fragments</h2>
//         <p>Happy Learning</p>
//       </React.Fragment>
//     );
//   }
// }

const App = () => {
  //const [cart, setCart] = useState(DUMMY_CART);
  const [cart, addToCart] = useReducer(reducer, DUMMY_CART);
  const [color, setColor] = useState("SlateBlue");
  const [colorList, setColorList] = useState(COLOR_LIST);
  const setRed = () => {
    setColor("red");
  };
  const setBlue = () => {
    setColor("blue");
  };

  const [count, setCount] = useState(3);

  const setInc = () => {
    //setCount(count + 1);
    setColorList([...colorList, color]);
  };
  const setDec = () => {
    //setCount(count - 1);
    colorList.pop();
    setColorList([...colorList]);
  };
  // const forLoop = (num) => {
  //   let s = "<p style={{color:red}}>";
  //   for (let i = 0; i < num; i++) {
  //     s = s.concat("a");
  //   }
  //   return s.concat("</p>");
  // };
  return (
    <div>
      <div>
        {/* {forLoop(10)} */}
        <table>
          <tbody>
            {cart.map(function (item, index) {
              //return <li key={index}>{item.title} {(item.quantity)?item.quantity:"NONE"}</li>;
              console.log(item);
              return <TableRows it={item} />;
            })}
          </tbody>
        </table>
        <button onClick={() => addToCart("Item 1")}>Test Item 1</button>
        <button onClick={() => addToCart("Panasonic TV")}>Panasonic TV</button>
        {/* <button onClick={() => addToCart("Playstation 4")}>Playstation 4</button> */}
        <button onClick={() => addToCart("Playstation 5")}>
          Playstation 5
        </button>
      </div>
      {/* ); 
       return ( */}
      <React.Fragment>
        <colorContext.Provider
          value={{
            color: color,
            setRedHandler: setRed,
            setBlueHandler: setBlue,
          }}
        >
          <p>Current color: {color}</p>
          <p>
            <label style={{ color: color }}>SAMPLE TEXT</label>
          </p>

          <SetRed />
          <SetBlue />
        </colorContext.Provider>
      </React.Fragment>

      <React.Fragment>
        <CountContext.Provider
          value={{
            count: count,
            setIncHandler: setInc,
            setDecHandler: setDec,
          }}
        >
          <SetInc />
          <SetDec />
          <table style={{ borderCollapse: "collapse" }}>
            <tbody>
              <tr>
                {colorList.map(function (col, index) {
                  return <td className="test" style={{ backgroundColor: col }}></td>;
                })}
                {/* {(() => {
                  let td = [];
                  for (let i = 0; i < count; i++) {
                    td.push(
                      <td
                        className="test"
                        style={{ backgroundColor: color }}
                        key={i}
                      ></td>
                    );
                    
                  }
                  return td;
                })()} */}
              </tr>
            </tbody>
          </table>

          
          
        </CountContext.Provider>
      </React.Fragment>
      <></>
    </div>
  );

  //START useReducer DEMO
  // const [ans, dispatch] = useReducer(reducer, initialState);
  // return(
  //   <div>
  //     <h2>{ans}</h2>
  //     <button onClick={()=> dispatch(1)}>Add 1</button>
  //     <button onClick={()=> dispatch(2)}>Add 2</button>
  //     <button onClick={()=> dispatch(3)}>Add 3</button>
  //     <button onClick={()=> dispatch("Reset")}>Reset</button>
  //     <button onClick={()=> dispatch()}>Throw Error</button>
  //   </div>
  // );
  //END useReducer DEMO

  //START useContext DEMO
  // const [auth, setAuth] = useState(false);
  // const login = () => {
  //   setAuth(true);
  // };
  // const logout = () => {
  //   setAuth(false);
  // };
  // return (
  //   <React.Fragment>
  //     <authContext.Provider
  //       value={{ auth: auth, loginHandler: login, logout: logout }}
  //     >
  //       <p>{auth ? "You have logged in" : "You have logged out"}</p>
  //       <Login />
  //       <Logout />
  //     </authContext.Provider>
  //   </React.Fragment>
  // );
  //END useContext DEMO

  //Start Homework
  // function App() {
  //   const [str1, setStr1] = useState("");
  //   const [str2, setStr2] = useState("");
  //   const spam = (val1) => {
  //     return val1.concat(val1).concat(val1);
  //   };
  //   const print = useMemo(() => {
  //     console.log("Memo-ing");
  //     return spam(str1);
  //   }, [str1]);
  //   useEffect(() => {
  //     document.title = `{New Title: ${str2}}`;
  //   }, [str2]);
  //   const staticRef = useRef(null);
  //   const fetchStaticRef = () => {
  //     staticRef.current.value = "This does not change the title";
  //     staticRef.current.focus();
  //   };
  //   return (
  //     <div>
  //       <div>
  //       </div>
  //       <div>
  //       <label>Triple String</label>
  //       <input value={str1} onChange={(e) => setStr1(e.target.value)}></input>
  //       <div>useMemo: {print}</div>
  //       </div>
  //       <div>
  //       <label>Ref Effect String</label>
  //       <input value={str2} ref={staticRef} onChange={(e) => setStr2(e.target.value)}></input>
  //       <div>useEffect: {str2}</div>
  //       </div>
  //       <button onClick={fetchStaticRef}>Static Title</button>
  //     </div>
  //   );
  //END homework
  //START useMemo DEMO
  // const [name, setName] = useState("");
  // const [val1, setVal1] = useState(0);
  // const [val2, setVal2] = useState(0);
  // const add = (num1, num2) => {
  //   console.log("Adding");
  //   return parseInt(num1) + parseInt(num2);
  // };
  // //const answer = add(val1, val2);
  // const answer = useMemo(() => {
  //   return add(val1, val2);
  // }, [val1, val2]);
  // return (
  //   <div>
  //     <input
  //       placeholder="name"
  //       value={name}
  //       onChange={(e) => setName(e.target.value)}
  //     />
  //     <input
  //       placeholder="val1"
  //       value={val1}
  //       onChange={(e) => setVal1(e.target.value)}
  //     />
  //     <input
  //       placeholder="val2"
  //       value={val2}
  //       onChange={(e) => setVal2(e.target.value)}
  //     />
  //     <label>Answer: {answer}</label>
  //   </div>
  // );
  //END useMemo DEMO
  //START useRef() demo
  // const email = useRef(null);
  // const username = useRef(null);
  // const fetchEmail = () => {
  //   email.current.value = "tim@gmail.xyz";
  //   email.current.focus();
  // };
  // const fetchUsername = () => {
  //   username.current.value = "timsum123";
  //   username.current.focus();
  // };
  // return (
  //   <div>
  //     <div>
  //       <h1> Demonstration of Hooks</h1>
  //     </div>
  //     <div>
  //       <input placeholder="Username" ref={username}></input>
  //       <input placeholder="Email" ref={email}></input>
  //     </div>
  //     <div>
  //       <button onClick={fetchUsername}>Username</button>
  //       <button onClick={fetchEmail}>Email</button>
  //     </div>
  //   </div>
  // );
  //END useRef() demo
  //START useState/useEffect demo
  // return (
  //   <div className="App">
  //     <Comp1/>
  //   </div>
  // );
  // const [count, setCount] = useState(0);
  // useEffect(() => {
  //   document.title = `You clicked ${count} times`;
  // }, [count]);
  // return (
  //   <div>
  //     <p>Clicked {count}</p>
  //     <button onClick={() => setCount(count + 1)}>Press Me!</button>
  //   </div>
  // );
  //END useState/useEffect demo
};

// function Comp1() {
//   const [data, setData] = useState(null);
//   useEffect(() => {
//     setData("Component mounted");
//   }, []);
//   return (
//     <div>
//       <h1> Welcome to hooks Session</h1>
//       {/* Ternary can check for {var ? !null : null} as well */}
//       <h3>{data ? data : null}</h3>
//     </div>
//   );
// }

export default App;
