import "./Feature.css";

const Feature = ({ featured, setQueryParams }) => {
  return (
    <div className="feature">
      {featured && (
        <>
          {featured.title && (
            <div className="header">
              <h3>{featured.title}</h3>
              <h4>{featured.dated}</h4>
            </div>
          )}
          <div className="details">
            {featured.culture && (
              <div className="detail">
                <p className="detail-title">Culture</p>
                <a
                  href="#"
                  className="content"
                  onClick={() => setQueryParams(`culture=${featured.culture}`)}
                >
                  {featured.culture}
                </a>
              </div>
            )}

            {featured.technique && (
              <div className="detail">
                <p className="detail-title">Technique</p>
                <a
                  href="#"
                  className="content"
                  onClick={() =>
                    setQueryParams(`technique=${featured.technique}`)
                  }
                >
                  {featured.technique}
                </a>
              </div>
            )}

            {featured.medium && (
              <div className="detail">
                <p className="detail-title">Medium</p>
                <a
                  href="#"
                  className="content"
                  onClick={() => setQueryParams(`keyword=${featured.medium}`)}
                >
                  {featured.medium}
                </a>
              </div>
            )}

            {featured.dimensions && (
              <div className="detail">
                <p className="detail-title">Dimensions</p>
                <p className="content">{featured.dimensions}</p>
              </div>
            )}

            {featured.people &&
              featured.people.map((person, i) => (
                <div className="detail" key={i}>
                  <p className="detail-title">Person</p>
                  <a
                    href="#"
                    className="content"
                    onClick={() =>
                      setQueryParams(`person=${person.displayname}`)
                    }
                  >
                    {person.name}
                  </a>
                </div>
              ))}

            {featured.department && (
              <div className="detail">
                <p className="detail-title">Department</p>
                <p className="content">{featured.department}</p>
              </div>
            )}

            {featured.division && (
              <div className="detail">
                <p className="detail-title">Division</p>
                <p className="content">{featured.division}</p>
              </div>
            )}

            {featured.contact && (
              <div className="detail">
                <p className="detail-title">Contact</p>
                <a href={`mailto:${featured.contact}`} className="content">
                  {featured.contact}
                </a>
              </div>
            )}

            {featured.creditline && (
              <div className="detail">
                <p className="detail-title">Credit</p>
                <p className="content">{featured.creditline}</p>
              </div>
            )}
          </div>
          <div className="feature-images">
            {featured.images &&
              featured.images.map((image) => (
                <img
                  key={image.idsid}
                  className="feature-img"
                  src={image.baseimageurl}
                  alt="image detail"
                />
              ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Feature;
