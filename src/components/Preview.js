import { useEffect, useState } from "react";

import "./Preview.css";

const Preview = ({ BASE_URL, KEY, queryParams, setFeaturedID }) => {
  const [objects, setObjects] = useState([]);
  const [next, setNext] = useState("");
  const [prev, setPrev] = useState("");

  const fetchObjects = async () => {
    try {
      if (queryParams) {
        const response = await fetch(
          `${BASE_URL}/object?apikey=${KEY}&${queryParams}`
        );
        const data = await response.json();
        setObjects(data.records);
        setNext(data.info.next);
        setPrev(data.info.prev);
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchObjects();
  }, [queryParams]);

  const handlePrevButton = async () => {
    try {
      if (prev) {
        const response = await fetch(prev);
        const data = await response.json();
        setObjects(data.records);
        setNext(data.info.next);
        setPrev(data.info.prev);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleNextButton = async () => {
    try {
      if (next) {
        const response = await fetch(next);
        const data = await response.json();
        setObjects(data.records);
        setNext(data.info.next);
        setPrev(data.info.prev);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="preview">
      <div className="preview-nav">
        <button
          disabled={!prev ? true : false}
          value="previous"
          onClick={handlePrevButton}
        >
          Previous
        </button>
        <button
          disabled={!next ? true : false}
          value="next"
          onClick={handleNextButton}
        >
          Next
        </button>
        <div className="search-results"></div>
      </div>
      <div className="results">
        {objects.map((object) => {
          return (
            <div
              key={object.id}
              className="preview-obj"
              onClick={() => setFeaturedID(object.objectnumber)}
            >
              <h4>{object.title}</h4>
              <img src={object.primaryimageurl} alt={object.description} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Preview;
