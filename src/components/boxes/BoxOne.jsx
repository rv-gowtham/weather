import { useEffect, useRef, useState } from "react";
import SearchIcon from "../../assets/search.png";
import CoOrdinates from "../functions/CoOrdinates";
import Wind from "../functions/Wind";

const BoxOne = ({
  lat,
  long,
  wind,
  text,
  Search,
  HandleCity,
  HandleKeyDown,
  cityNotFound,
}) => {
  const inputref = useRef(null);

  useEffect(() => {
    inputref.current.focus();
  }, []);

  return (
    <>
      <div>
        <div className="">
          <div>
            <h1>Search Cities</h1>
          </div>
          <div className="w-100">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                Search();
              }}
              className="d-flex gap-2"
            >
              <input
                type="search"
                value={text}
                ref={inputref}
                onChange={HandleCity}
                onKeyDown={HandleKeyDown}
                className="form-control fs-4  text-light"
                style={{
                  backgroundColor: "#1a1a1a",
                  border: "1px solid #7a838b",
                }}
                name=""
                id=""
              />
              <div
                className="rounded-3 py-2 d-flex align-items-center justify-content-center"
                style={{ border: "1px solid #7a838b", width: "70px" }}
                onClick={() => Search()}
              >
                <img
                  className=""
                  src={SearchIcon}
                  style={{
                    height: "35px",
                    overflow: "hidden",
                  }}
                  alt="search"
                />
              </div>
            </form>
          </div>
        </div>
        {cityNotFound ? (
          <>
            <div></div>
          </>
        ) : (
          <>
            <div>
              <CoOrdinates lat={lat} long={long} />
              <Wind wind={wind} />
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default BoxOne;
