import React, { useState } from "react";

var initWishJryVar = [
  {
    title: "Laptop",
    cost: 1000,
    date: "1 Aug 2023",
  },
  {
    title: "Tesla Mobile",
    cost: 1200,
    date: "1 Apr 2023",
  },
  {
    title: "Tesla Car",
    cost: 5000,
    date: "1 Jan 2024",
  },
  {
    title: "Camera",
    cost: 500,
    date: "1 Dec 2023",
  },
];

function TableCrudFnc() {
  let [wishJryVar, setWishJryVar] = useState(initWishJryVar);
  // let [titleVal, setTitleVal] = useState("");
  // let [costVal, setCostVal] = useState("");
  // let [dateVal, setDateVal] = useState("");

  let [wishInputs, setWishInputs] = useState({
    title: "",
    cost: "",
    date: "",
  });
  let [searchInput, setSearchInput] = useState("");
  let [indx, setIndx] = useState(-1);

  const addToTableHandler = () => {
    setWishJryVar([...wishJryVar, wishInputs]);
    clearInput();
    // setWishJryVar([
    //   ...wishJryVar,
    //   { title: titleVal, cost: costVal, date: dateVal },
    // ]);
    // reset();
  };

  const editHandler = (item, index) => {
    setWishInputs(item);

    // setTitleVal(item.title);
    // setCostVal(item.cost);
    // setDateVal(item.date);
    setIndx(index);
  };

  const editTableHandler = () => {
    const newArr = [...wishJryVar];
    newArr[indx] = wishInputs;
    setWishJryVar(newArr);
    setIndx(-1);
    clearInput();
  };

  const delHandler = (index) => {
    var item = wishJryVar[index];
    if (window.confirm(`Are you sure you want to delete ${item.title}?`)) {
      wishJryVar.splice(index, 1);
      setWishJryVar([...wishJryVar]);
    }
    clearInput();
  };

  const clearInput = () => {
    setWishInputs({
      title: "",
      cost: "",
      date: "",
    });
    // setTitleVal("");
    // setCostVal("");
    // setDateVal("");
  };

  return (
    <>
      <form>
        <label>Title</label>
        <input
          type="text"
          name="title"
          value={wishInputs.title}
          onChange={(e) => {
            //setTitleVal(e.target.value);
            setWishInputs({ ...wishInputs, title: e.target.value });
          }}
          placeholder="Enter title"
        ></input>
        <br />
        <label>Cost</label>
        <input
          type="number"
          name="cost"
          value={wishInputs.cost}
          onChange={(e) => {
            //setCostVal(e.target.value);
            setWishInputs({ ...wishInputs, cost: e.target.value });
          }}
          placeholder="Enter cost"
        ></input>
        <br />
        <label>Date</label>
        <input
          type="text"
          name="date"
          value={wishInputs.date}
          onChange={(e) => {
            //setDateVal(e.target.value);
            setWishInputs({ ...wishInputs, date: e.target.value });
          }}
          placeholder="Enter date"
        ></input>
        <br />
        {indx < 0 ? (
          <button type="button" onClick={() => addToTableHandler()}>
            Add to Wishlist
          </button>
        ) : (
          <button type="button" onClick={() => editTableHandler()}>
            Edit Wishlist
          </button>
        )}
      </form>

      <form>
        <input
          type="search"
          placeholder="search"
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
        ></input>
      </form>
      <h1>Wish List</h1>
      <table border="5" cellPadding="10">
        <thead>
          <tr>
            <th>Title</th>
            <th>Cost</th>
            <th>Date</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {wishJryVar
            //Sort by title String (title) accending order
            //.sort((a,b)=> a.title.localeCompare(b.title))
            //Sort by number (cost) accending order
            //.sort((a,b)=> a.cost - b.cost)
            //Sort by number (cost) decending order
            .sort((a, b) => b.cost - a.cost)
            //Sort by Date (date) accending order
            //.sort((a,b)=> new Date(a.date) - new Date(b.date))
            //Sort by Date (date) descending order
            //.sort((a,b)=> new Date(b.date) - new Date(a.date))

            //Filter based on searchInput (search field)
            .filter((item) =>
              item.title.toLowerCase().includes(searchInput.toLowerCase())
            )
            .map((item, index) => (
              <tr key={index}>
                <td>{item.title}</td>
                <td>{item.cost}</td>
                <td>{item.date}</td>
                <td>
                  <button
                    type="button"
                    onClick={() => editHandler(item, index)}
                  >
                    Edit
                  </button>
                </td>
                <td>
                  <button type="button" onClick={() => delHandler(index)}>
                    Delete
                  </button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </>
  );
}

export default TableCrudFnc;
