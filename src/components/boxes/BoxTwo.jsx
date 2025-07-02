import React, { useState } from "react";
import WeatherDetails from "../functions/WeatherDetails";

const BoxTwo = ({ icon, temp, city, country, cityNotFound }) => {
  return (
    <>
      <div>
        <div>
          <WeatherDetails
            icon={icon}
            temp={temp}
            city={city}
            country={country}
            cityNotFound={cityNotFound}
          />
        </div>
      </div>
    </>
  );
};

export default BoxTwo;
