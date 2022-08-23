import { useEffect, useState } from "react";

import "./Feature.css";

const Feature = ({ BASE_URL, KEY, featuredID }) => {
  const [featured, setFeatured] = useState(null);

  const fetchObject = async () => {
    try {
      if (featuredID) {
        console.log(`${BASE_URL}/object?apikey=${KEY}&id=${featuredID}`);
        const response = await fetch(
          `${BASE_URL}/object?apikey=${KEY}&objectnumber=${featuredID}`
        );
        const data = await response.json();
        setFeatured(data.records[0]);
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchObject();
  }, [featuredID]);

  console.log(featured);

  return (
    <div className="feature">
      {featured && (
        <>
          <div className="header">
            <h3>{featured.title}</h3>
            <h4>{featured.dated}</h4>
          </div>
          <div className="details">
            {featured.culture && (
              <div className="detail">
                <p className="detail-title">Culture</p>
                <p className="content">{featured.culture}</p>
              </div>
            )}

            {featured.technique && (
              <div className="detail">
                <p className="detail-title">Technique</p>
                <p className="content">{featured.technique}</p>
              </div>
            )}

            {featured.medium && (
              <div className="detail">
                <p className="detail-title">Medium</p>
                <p className="content">{featured.medium}</p>
              </div>
            )}

            {featured.dimensions && (
              <div className="detail">
                <p className="detail-title">Dimensions</p>
                <p className="content">{featured.dimensions}</p>
              </div>
            )}

            {featured.people &&
              featured.people.map((person) => (
                <div className="detail">
                  <p className="detail-title">Person</p>
                  <p className="content">{person.name}</p>
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
                <p className="content">{featured.contact}</p>
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
