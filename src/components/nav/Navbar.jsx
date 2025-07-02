import React from "react";
import Cloud from "../../assets/cloud.jpg";
import Glitch from "../../assets/glitch.png";

const Navbar = () => {
  return (
    <>
      <div className="navbar w-100 col-12 text-white p-0">
        <div className=" brand d-flex position-absolute align-items-center">
          <h1 className="display-1">CLEAR</h1>
          <img
            className=""
            src={Glitch}
            style={{ width: "50px", height: "50px" }}
            alt=""
          />
        </div>
      </div>
    </>
  );
};

export default Navbar;
