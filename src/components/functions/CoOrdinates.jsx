import React from "react";

const CoOrdinates = ({ lat, long }) => {
  return (
    <>
      <div>
        <div className="d-flex justify-content-around gap-4 mt-3">
          <div className="d-flex flex-column justify-content-center align-items-center">
            <h3 className="lat mb-3">Latitude</h3>
            <span className="display-6 fw-bolder">{lat}</span>
          </div>
          <div className="d-flex flex-column justify-content-center align-items-center">
            <h3 className="lat mb-3">Longitude</h3>
            <span className="display-6 fw-bolder">{long}</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default CoOrdinates;
