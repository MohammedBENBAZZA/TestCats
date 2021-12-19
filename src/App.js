import React, { useState, useEffect } from "react";
import axios from "./cats";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import Form from "./Components/Form";
import Post from "./Components/Post";
function App() {
  let [query, setQuery] = useState({
    weight: "",
    child_friendly: "",
    intelligence: "",
    hypoallergenic: "",
  });
  let [cats, setCats] = useState([]);
  let [search, setSearch] = useState(0);

  useEffect(() => {
    let condition =
      query.weight === "" &&
      query.child_friendly === "" &&
      query.intelligence === "" &&
      query.hypoallergenic === "";
    async function fetchData() {
      const request = await axios.get("/breeds");
      if (condition) setCats({});
      if (search === 1) {
        let queryCats = request.data.filter((cat) => {
          return (
            !condition &&
            (query.intelligence
              ? cat.intelligence === Number(query.intelligence)
              : true) &&
            (query.child_friendly
              ? cat.child_friendly === Number(query.child_friendly)
              : true) &&
            (query.hypoallergenic
              ? cat.hypoallergenic === Number(query.hypoallergenic)
              : true) &&
            (query.weight
              ? Number(cat.weight.metric[0]) <= Number(query.weight) &&
                Number(query.weight) <= Number(cat.weight.metric[4])
              : true)
          );
        });
        setCats(queryCats);
        setSearch(0);
      }
    }
    fetchData();
    setQuery({});
  }, [search]);

  return (
    <div className="App">
      <Form
        setQuery={setQuery}
        query={query}
        setSearch={setSearch}
        search={search}
      ></Form>
      <div>
        {cats.length > 0
          ? cats.map((row, index) => <Post key={index} cat={row} />)
          : "Sorry! no cat founded. "}
      </div>
    </div>
  );
}

export default App;
