import React, { useState } from "react";
import FormattedDate from "./FormattedDate";
import axios from "axios";

export default function Search() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState({});
  const [loaded, setLoaded] = useState(false);

  function handleResponse(response) {
    setWeather({
      temperature: response.data.main.temp,
      description: response.data.weather[0].description,
      humidity: response.data.main.humidity,
      date: new Date(response.data.dt * 1000),
      wind: response.data.wind.speed,
      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
    });
    setLoaded(true);
  }

  function handleSubmit(event) {
    event.preventDefault();
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=7e320e70b095384fdeef1e450eb06132&units=metric`;
    axios.get(url).then(handleResponse);
  }

  function searchCity(event) {
    event.preventDefault();
    setCity(event.target.value);
  }

  let form = (
    <form onSubmit={handleSubmit}>
      <input type="search" placeholder="Enter a city.." onChange={searchCity} />
      <input type="submit" />
    </form>
  );

  if (loaded) {
    return (
      <div className="Search">
        {form}
        <div className="WeatherData">
          <h1 className="text-capitalize">{city}</h1>
          <h5>
            <FormattedDate date={weather.date} />
          </h5>
          <h5 className="text-capitalize">{weather.description} </h5>
          <div className="container">
            <div className="row">
              <div className="col-6">
                <img src={weather.icon} alt="Weather Icon" />
                {Math.round(weather.temperature)}°C
              </div>
              <div className="col-6">
                <ul>
                  <li>Humidity: {weather.humidity}%</li>
                  <li>Wind: {weather.wind}km/h</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return <div className="Search">{form}</div>;
  }
}
