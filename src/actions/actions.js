import axios from "axios";

export const FETCH_WEATHER = "FETCH_WEATHER";
const API_KEY = "52b8d777c60a34fddcb63aa680326b19";
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;
//API REQUEST:http://api.openweathermap.org/data/2.5/forecast?appid=52b8d777c60a34fddcb63aa680326b19&q=coimbatore,in
export const fetchweather = (city, countryCode) => {
  //console.log(`city:${city},country-code:${countryCode}`);
  const url = `${ROOT_URL}&q=${city},${countryCode}`;
  const request = axios.get(url);
  console.log(request);
  return {
    type: FETCH_WEATHER,
    payload: request
  };
};
