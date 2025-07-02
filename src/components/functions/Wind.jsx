import React from "react";
import AirFlow from "../../assets/wind.png";
import Humidity from "../../assets/humidity.png";

const Wind = ({ wind }) => {
  return (
    <>
      <div className="">
        <div className="w-100 d-flex flex-column justify-content-center align-items-center">
          <img className="h-25 w-25" src={AirFlow} alt="wind" />
          <div className="fs-5">{wind} Km/Hr</div>
          <h2>Wind Speed</h2>
        </div>
      </div>
    </>
  );
};

export default Wind;
