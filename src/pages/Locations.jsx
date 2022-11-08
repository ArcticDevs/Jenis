import React, { useState } from "react";
import "../styles/Locations.css";
import { useNavigate } from "react-router-dom";

const Locations = ({locationArr}) => {
  const navigate = useNavigate();
  const [location, setLocation] = useState("");

  const handleSelect = (e) => {
    if (e.target.value !== "" && e.target.value !== "Locations") {
      // console.log(e.target.value)
      setLocation(e.target.value);
      navigate(`/location/details/${e.target.value}`);
    }
  }

  return (
    <div>
      <div className="location_row1 mobile-section2">
        <h2>SCOOP SHOPS</h2>
      </div>
      <div className="location_row2">
        <div className=" location_row2_selectContainer mx-auto mt-5 mb-4">
          <select className="location_row2_select" onChange={handleSelect}>
            <option>Locations</option>
            {locationArr.map((curr, index) => (
              <option key={index} value={curr.value}>
                {curr.name}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div className="location_row3 mb-5">
        {locationArr.map((curr, index) => (
          <div className="location_row3_box" key={index}>
            <div onClick={() => navigate(`/location/details/${curr.value}`)}>
              <h4>{curr.name}</h4>
            </div>
            <span onClick={() => navigate(`/location/details/${curr.value}`)}>
              Details
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Locations;
