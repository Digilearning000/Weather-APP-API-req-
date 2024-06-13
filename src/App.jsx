import { useState } from "react";
import "./App.css";
import WeatherData from "./components/WeatherData.jsx";
import fetchWeather from "./utils/FetchWeather.js";

function App() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);

  const onSubmitHandler = async (e) => {
    e.preventDefault();

    try {
      const weatherData = await fetchWeather(city);
      setWeather(weatherData);
    } catch (error) {
      console.error(error);
      alert("City not found");
    }
  };

  return (
    <>
      <h1 className="text-4xl m-10 font-semibold">Weather App</h1>
      <form
        className="flex gap-5 justify-center mb-5"
        onSubmit={onSubmitHandler}
      >
        <input
          placeholder="Enter City"
          className="bg-slate-300"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        ></input>
        <button className="bg-slate-300">Search</button>
      </form>

      {/* <WeatherData weather={weather} /> */}
      {weather && (
        // <div>
        //   <h2>{weather.name}</h2>
        //   <p>{weather.main.temp}°C</p>
        //   <p>{weather.weather[0].description}</p>
        // </div>
        <WeatherData weather={weather} />
      )}
    </>
  );
}

export default App;
