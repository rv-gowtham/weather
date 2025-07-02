import React, { useState } from "react";
import Sun from "../../assets/sun.png";

const WeatherDetails = ({ icon, temp, city, country, cityNotFound }) => {
  return (
    <>
      <div>
        <div className="d-flex flex-column align-items-center">
          {cityNotFound ? (
            <>
              <div>
                <div
                  className="display-2 fw-bold text-center"
                  style={{ color: "skyBlue" }}
                >
                  {city}
                </div>
              </div>
            </>
          ) : (
            <>
              <div className="w-50 h-25 my-5 d-flex justify-content-center">
                <img
                  className=""
                  src={icon}
                  alt=""
                  style={{ width: "150px" }}
                />
              </div>
              <div className="fw-semibold display-6">{temp}°C</div>
              <div
                className="display-2 fw-bold d-felx justify-content-center text-center"
                style={{ color: "skyBlue" }}
              >
                {city}
              </div>
              <div className="display-6 fw-semibold">{country}</div>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default WeatherDetails;
