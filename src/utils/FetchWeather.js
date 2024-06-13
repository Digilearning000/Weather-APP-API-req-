const API_KEY = import.meta.env.VITE_API_KEY;
const BASE_URL = "https://api.openweathermap.org/data/2.5/weather";
import axios from "axios";

const fetchWeather = async (city) => {
  const response = await axios.get(
    `${BASE_URL}?q=${city}&appid=${API_KEY}&units=metric`
  );
  console.log(response);

  if (!response.data) {
    throw new Error("No Data Found");
  }
  const data = response.data;
  return data;
};

export default fetchWeather;
