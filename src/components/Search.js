import { useEffect, useState } from "react";

import "./Search.css";

const Search = ({ BASE_URL, KEY, queryParams, setQueryParams }) => {
  const [classifications, setClassifications] = useState([]);
  const [classOption, setClassOption] = useState("any");

  const [centuries, setCenturies] = useState([]);
  const [centuryOption, setCenturyOption] = useState("any");

  const [keyword, setKeyword] = useState("");

  const fetchClassifications = async () => {
    try {
      const response = await fetch(
        `${BASE_URL}/classification?size=100&apikey=${KEY}`
      );
      const data = await response.json();
      // sort the data in alphabetical order
      let sortedClasses = sortClasses(data.records);
      setClassifications(sortedClasses);
    } catch (error) {
      console.error(error);
    }
  };

  const sortClasses = (classes) => {
    let sortArr = [...classes];
    sortArr.sort((a, b) => {
      if (a.name < b.name) return -1;
      if (a.name > b.name) return 1;
      return 0;
    });
    return sortArr;
  };

  const fetchCenturies = async () => {
    try {
      const response = await fetch(`${BASE_URL}/century?size=50&apikey=${KEY}`);
      const data = await response.json();
      // sort the data in chronological order
      let sortedCenturies = sortCents(data.records);
      setCenturies(sortedCenturies);
    } catch (error) {
      console.error(error);
    }
  };

  const sortCents = (cents) => {
    let sortArr = [...cents];
    sortArr.sort((a, b) => a.temporalorder - b.temporalorder);
    return sortArr;
  };

  useEffect(() => {
    fetchClassifications();
    fetchCenturies();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    // format options to include %20 instead of spaces
    let keywordString = keyword.replace(" ", "%20");

    let centID =
      centuryOption === "any"
        ? "any"
        : centuries.find((cent) => cent.name == centuryOption).id;

    let classID =
      classOption === "any"
        ? "any"
        : classifications.find((cl) => cl.name === classOption).id;

    setQueryParams(
      `century=${centID}\&classification=${classID}\&keyword=${keywordString}`
    );

    // uncomment below to clear form after submit
    /* setKeyword("");
    setClassOption("any");
    setCenturyOption("any"); */
  };

  const handleInput = (e) => {
    setKeyword(e.target.value);
  };

  const handleClassOption = (e) => {
    setClassOption(e.target.value);
  };

  const handleCenturyOption = (e) => {
    setCenturyOption(e.target.value);
    console.log(centuryOption);
  };

  return (
    <form className="search-bar" onSubmit={handleSubmit}>
      <div className="query">
        <label htmlFor="query">Query</label>
        <input
          type="text"
          placeholder="enter keywords..."
          value={keyword}
          onChange={handleInput}
        />
      </div>
      <div className="classification">
        <div className="count-div">
          <label htmlFor="classification">Classification</label>
          <span className="count">{`(${classifications.length})`}</span>
        </div>
        <select value={classOption} onChange={handleClassOption}>
          <option value="any">Any</option>
          {classifications.map((classification) => (
            <option key={classification.id}>{classification.name}</option>
          ))}
        </select>
      </div>
      <div className="century">
        <div className="count-div">
          <label htmlFor="century">Century</label>
          <span className="count">{`(${centuries.length})`}</span>
        </div>
        <select value={centuryOption} onChange={handleCenturyOption}>
          <option value="any">Any</option>
          {centuries.map((century) => (
            <option key={century.id}>{century.name}</option>
          ))}
        </select>
      </div>
      <button id="search-button" type="submit">
        SEARCH
      </button>
    </form>
  );
};

export default Search;
