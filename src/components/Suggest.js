import "./Suggest.css";

const Suggest = ({ suggestions, setSuggestions, setFeatured, setKeyword }) => {
  return (
    <>
      {suggestions.length > 0 && (
        <div className="suggestions">
          <h4>Suggested Titles:</h4>
          <ul>
            {suggestions.map((suggestion, i) => (
              <li key={i}>
                <a
                  href="#"
                  onClick={() => {
                    setFeatured(suggestion);
                    setKeyword("");
                    setSuggestions([]);
                  }}
                >
                  {suggestion.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
};

export default Suggest;
