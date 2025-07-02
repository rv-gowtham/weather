import React from "react";
import humidityicom from "../../assets/humidity.png";

const Humidity = ({ humidity, cityNotFound }) => {
  if (cityNotFound) return null;
  return (
    <>
      <div className="">
        <div className="w-100 d-flex flex-column align-items-center">
          <img className="w-25" src={humidityicom} alt="" />
          <div className="fs-3">{humidity} %</div>
          <h2>Humidity</h2>
        </div>
      </div>
    </>
  );
};

export default Humidity;
