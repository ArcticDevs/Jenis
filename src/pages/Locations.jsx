import React,{useState} from "react";
import "../styles/Locations.css";
import {useNavigate} from 'react-router-dom'

const Locations = () => {
    const navigate = useNavigate()
    const [location,setLocation] = useState("")

    const handleSelect = (e) => {
        if(e.target.value !== "" && e.target.value !== "Locations"){
            // console.log(e.target.value)
            navigate(`/location/details/${e.target.value}`)
        }
    }

  return (
    <div>
      <div className="location_row1">
        <h2>SCOOP SHOPS</h2>
      </div>
      <div className="location_row2">
        <div className=" location_row2_selectContainer col-12 mx-auto mt-5 mb-4">
          <select className="location_row2_select" onChange={handleSelect}>
            <option>Locations</option>
            {[...Array(5)].map((elementInArray, index) => (
              <option key={index} value="atlanta-ga">
                ATLANTA, GA
              </option>
            ))}
          </select>
        </div>
      </div>
      <div className="location_row3">
        {[...Array(9)].map((elementInArray, index) => (
          <div className="location_row3_box" key={index}>
            <div onClick={() => navigate('/location/details/atlanta-ga')}>
              <h4>ATLANTA, GA</h4>
            </div>
            <span onClick={() => navigate('/location/details/atlanta-ga')}>Details</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Locations;
