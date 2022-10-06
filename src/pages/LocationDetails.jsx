import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "../styles/Locations.css";

const LocationDetails = () => {
  const params = useParams();
  const [location, setLocation] = useState("");

  useEffect(() => {
    // console.log(params.location)
    if (params.location === "atlanta-ga") {
      setLocation("Atlanta, GA");
    }
  }, []);

  return (
    <div className="row">
      <div className="location_row1">
        <h2>{location && location}</h2>
      </div>
      <div className="my-5 container-fluid location_details">
        <div className="col-xxl-7 col-xl-7 col-lg-7 col-md-11 col-sm-10 col-11">
          <img
            src="https://cld.accentuate.io/556459163854/1649986019857/Jenis_Atlanta_WestsideProvisions.jpg?v=0&options="
            alt="location details"
            className="img-fluid"
          />
        </div>
        <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-11 col-sm-10 col-11">
          <h2 className="fw-bold">JENI'S WESTSIDE PROVISIONS</h2>
          <h5 className="mt-3">Atlanta, GA</h5>
          <p className="my-4 fw-bold">
            Address <br />
            <span className="text-danger">1198 Howell Mill</span> <br />{" "}
            <span className="text-danger">Road Atlanta, GA 30318</span>{" "}
          </p>
          <p className="my-4 fw-bold">
            Contact <br />
            <span className="text-danger">(404) 355-6050</span> <br />{" "}
          </p>
          <p className="my-4 fw-bold">
            Hours
            <br />
            Sunday - Thursday: Noon to midnight
            <br />
            Friday - Saturday: Noon - 1am
          </p>
          <button>local delivery</button>
        </div>
      </div>
    </div>
  );
};

export default LocationDetails;
