import { useState } from "react";
import "./App.css";
import Feature from "./components/Feature";
import Preview from "./components/Preview";
import Search from "./components/Search";
import Title from "./components/Title";

function App() {
  const BASE_URL = "https://api.harvardartmuseums.org";
  const KEY = "3ec479a5-c557-422d-9c63-b57f2c489059";

  const [queryParams, setQueryParams] = useState("");
  const [featuredID, setFeaturedID] = useState(null);

  return (
    <div className="App">
      <Title />
      <Search
        BASE_URL={BASE_URL}
        KEY={KEY}
        queryParams={queryParams}
        setQueryParams={setQueryParams}
      />
      <Preview
        BASE_URL={BASE_URL}
        KEY={KEY}
        queryParams={queryParams}
        setFeaturedID={setFeaturedID}
      />
      <Feature BASE_URL={BASE_URL} KEY={KEY} featuredID={featuredID} />
    </div>
  );
}

export default App;
