import React from "react";

const WeatherData = ({ weather }) => {
  //   console.log(weather);
  return (
    <div>
      <h3>CityName: {weather.name}</h3>
      <h3>Temp: {weather.main.temp} C</h3>
      <h3>Feels Like: {weather.main.feels_like} C</h3>
    </div>
  );
};

export default WeatherData;
