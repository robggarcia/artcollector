import { useState } from "react";
import "./App.css";
import Feature from "./components/Feature";
import Loading from "./components/Loading";
import Preview from "./components/Preview";
import Search from "./components/Search";
import Suggest from "./components/Suggest";
import Title from "./components/Title";

function App() {
  const BASE_URL = "https://api.harvardartmuseums.org";

  const [queryParams, setQueryParams] = useState("");
  const [featured, setFeatured] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [suggestions, setSuggestions] = useState([]);
  const [keyword, setKeyword] = useState("");

  return (
    <div className="App">
      <Title />
      <Search
        BASE_URL={BASE_URL}
        KEY={process.env.REACT_APP_API_KEY}
        queryParams={queryParams}
        setQueryParams={setQueryParams}
        isLoading={isLoading}
        setSuggestions={setSuggestions}
        keyword={keyword}
        setKeyword={setKeyword}
      />
      <Suggest
        suggestions={suggestions}
        setSuggestions={setSuggestions}
        setFeatured={setFeatured}
        setKeyword={setKeyword}
      />
      <Preview
        BASE_URL={BASE_URL}
        KEY={process.env.REACT_APP_API_KEY}
        queryParams={queryParams}
        setFeatured={setFeatured}
        isLoading={isLoading}
        setIsLoading={setIsLoading}
      />
      <Feature featured={featured} setQueryParams={setQueryParams} />
      {isLoading && <Loading />}
    </div>
  );
}

export default App;
