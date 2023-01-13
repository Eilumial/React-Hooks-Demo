import React, { useState } from "react";
// import ReactDOM from "react-dom/client";
let initWishList = ["Laptop", "Tesla Mobile", "Tesla Car", "DJI Camera", "SSD"];

function ListCrudFnc() {
  let [wishAryVar, setWishAryVar] = useState(initWishList);
  let [wishInput, setWishInput] = useState("");
  //   let [btnTxt, setBtnTxt] = useState("Add");
  let [indx, setIndx] = useState(-1);

  let changeBtnFnc = (item, index) => {
    //console.log(item);
    setWishInput(item);
    //setBtnTxt("Update");
    setIndx(index);
  };

  let addItmFnc = () => {
    setWishAryVar([...wishAryVar, wishInput]);
    setWishInput("");
    //     if (btnTxt === "Add") {
    //       setWishAryVar([...wishAryVar, wishInput]);
    //       setWishInput("");
    //     }
    //     else if (btnTxt === "Update") {
    //       const newArr = [...wishAryVar];
    //       newArr[indx] = wishInput;
    //       setWishAryVar(newArr);
    //       setIndx(-1);
    //       setBtnTxt("Add");
    //     }
  };

  let delItmFnc = (index) => {
    //     var newArr = [...wishAryVar];
    //     newArr = newArr.filter((_, i) => i !== index);
    //     setWishAryVar(newArr);
    if (
      window.confirm(`Are you sure you want to delete ${wishAryVar[index]}`)
    ) {
      wishAryVar.splice(index, 1);
      setWishAryVar([...wishAryVar]);
    }
  };

  let editItmFnc = (idx) => {
    const newArr = [...wishAryVar];
    newArr[indx] = wishInput;
    setWishAryVar(newArr);
    setIndx(-1);
    //setBtnTxt("Add");
  };

  //   let updItmFnc = () => {
  //     wishAryVar[editIdx] = wishInput;
  //     setWishAryVar([...wishAryVar]);
  //     setEditIdx(-1);
  //     setWishInput("");
  //   };

  return (
    <>
      <h1>WishList</h1>
      <form>
        <input
          type="text"
          placeholder="Add Items"
          onChange={(e) => setWishInput(e.target.value)}
          value={wishInput}
        />
        {/* <button type="button" onClick={() => addItmFnc()}>
          {btnTxt}
        </button> */}
        {indx < 0 ? (
          <button type="button" onClick={() => addItmFnc()}>
            Add
          </button>
        ) : (
          <button type="button" onClick={() => editItmFnc()}>
            Update
          </button>
        )}
      </form>
      <ul>
        {wishAryVar.map((item, index) => (
          <li key={index}>
            {item}{" "}
            <button type="button" onClick={() => changeBtnFnc(item, index)}>
              Edit
            </button>
            <button type="button" onClick={() => delItmFnc(index)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}

// const DevDivRutRjsVar = ReactDOM.createRoot(
//   document.getElementById("DevDivRutRjsUid")
// );
// DevDivRutRjsVar.render(<NamPejFnc />);

export default ListCrudFnc;
