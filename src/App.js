import { useState } from "react";
import "./App.css";
import Feature from "./components/Feature";
import Loading from "./components/Loading";
import Preview from "./components/Preview";
import Search from "./components/Search";
import Title from "./components/Title";

function App() {
  const BASE_URL = "https://api.harvardartmuseums.org";

  const [queryParams, setQueryParams] = useState("");
  const [featuredID, setFeaturedID] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  return (
    <div className="App">
      <Title />
      <Search
        BASE_URL={BASE_URL}
        KEY={process.env.REACT_APP_API_KEY}
        queryParams={queryParams}
        setQueryParams={setQueryParams}
        isLoading={isLoading}
      />
      <Preview
        BASE_URL={BASE_URL}
        KEY={process.env.REACT_APP_API_KEY}
        queryParams={queryParams}
        setFeaturedID={setFeaturedID}
        isLoading={isLoading}
        setIsLoading={setIsLoading}
      />
      <Feature
        BASE_URL={BASE_URL}
        KEY={process.env.REACT_APP_API_KEY}
        featuredID={featuredID}
        setIsLoading={setIsLoading}
      />
      {isLoading && <Loading />}
    </div>
  );
}

export default App;
