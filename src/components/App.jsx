import React from "react";
import SearchBar from "../containers/SearchBar";
import WeatherDisplay from "../containers/WeatherDisplay";
import "./App.css";
const App = () => (
  <div className="page">
    <SearchBar />
    <WeatherDisplay />
  </div>
);

export default App;
