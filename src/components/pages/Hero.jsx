import React, { useState } from "react";
import BoxOne from "../boxes/BoxOne";
import BoxTwo from "../boxes/BoxTwo";
import BoxThree from "../boxes/BoxThree";
import rain from "../../assets/rain.png";

const Hero = () => {
  const API_KEY = "a3ee2970e45effd74cba8247894b364e";

  const [lat, setLat] = useState(0);
  const [long, setLong] = useState(0);
  const [wind, setWind] = useState(0);
  const [icon, setIcon] = useState(rain);
  const [temp, setTemp] = useState(0);
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("IN");
  const [humidity, setHumidity] = useState(0);
  const [text, setText] = useState("");
  const [cityNotFound, setCityNotFound] = useState(false);
  const [loading, setLoading] = useState(false);

  const Search = async () => {
    setLoading(true);
    setCityNotFound(false);

    const URL = `https://api.openweathermap.org/data/2.5/weather?q=${text}&appid=${API_KEY}&units=metric`;

    try {
      const res = await fetch(URL);
      const data = await res.json();

      if (data.cod === "404") {
        console.error("City not found");
        setCityNotFound(true);
        setCity("City Not Found");
        setCountry("");
        setIcon("");
        setLat(0);
        setLong(0);
        setTemp(0);
        setWind(0);
        return;
      }

      setLat(data.coord.lat);
      setLong(data.coord.lon);
      setWind(data.wind.speed);
      setTemp(Math.floor(data.main.temp));
      setHumidity(data.main.humidity);
      setCity(data.name);
      setCountry(data.sys.country);

      const iconCode = data.weather[0].icon;
      setIcon(`https://openweathermap.org/img/wn/${iconCode}@2x.png`);
    } catch (err) {
      console.error("Fetch error:", err.message);
    } finally {
      setLoading(false);
    }
  };

  const HandleCity = (e) => setText(e.target.value);
  const HandleKeyDown = (e) => {
    if (e.key === "Enter") {
      Search();
      setText("");
    }
  };

  return (
    <div className="hero w-100 col-12 text-white py-2 py-md-5">
      <div className="col-12 col-md-4 d-flex flex-column flex-md-row">
        <div className="col-12 p-3 d-flex align-items-center justify-content-center">
          <BoxOne
            lat={lat}
            setLat={setLat}
            long={long}
            setLong={setLong}
            wind={wind}
            setwind={setWind}
            text={text}
            Search={Search}
            HandleCity={HandleCity}
            HandleKeyDown={HandleKeyDown}
            cityNotFound={cityNotFound}
          />
        </div>
        <div className="col-12 p-3 d-flex align-items-center justify-content-center">
          <BoxTwo
            icon={icon}
            setIcon={setIcon}
            temp={temp}
            setTemp={setTemp}
            city={city}
            setCity={setCity}
            country={country}
            setCountry={setCountry}
            cityNotFound={cityNotFound}
          />
        </div>
        <div className="col-12 p-3 d-flex align-items-center justify-content-center">
          <BoxThree
            humidity={humidity}
            setHumidity={setHumidity}
            cityNotFound={cityNotFound}
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
