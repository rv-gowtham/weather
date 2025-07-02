import React, { useState } from "react";
import Timer from "./Time";
import Humidity from "../functions/Humidity";

const BoxThree = ({ humidity, cityNotFound }) => {
  return (
    <>
      <div>
        <div>
          <div>
            <Timer />
          </div>
          <div></div>
          <div>
            <Humidity humidity={humidity} cityNotFound={cityNotFound} />
          </div>
        </div>
      </div>
    </>
  );
};

export default BoxThree;
