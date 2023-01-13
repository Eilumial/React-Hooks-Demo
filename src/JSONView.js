import { useEffect, useState } from "react";
//import "./App.css";

function JSONView() {
  const [data, setData] = useState([]);

  const fetchData = () => {
    fetch(`http://localhost:8080/allBooks`)
      .then((response) => response.json())
      .then((data) => {
      //   console.log(actualData);
        setData(data);
      //   console.log(data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="App">
      <table border="5" cellPadding="10">
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Author</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td>{item.id}</td>
              <td>{item.title}</td>
              {/* <td>
              <img src={item.thumbnail} alt="" height={100} />
            </td> */}
              <td>{item.author}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default JSONView;
