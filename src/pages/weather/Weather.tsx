import { useEffect, useState } from "react";
import { fetchWeather } from "../../services/api";
import {
  dateBuilder,
  getLocationTime,
  switchWeatherClassName,
} from "../../utils/functions";
import { IWeather } from "../../utils/interfaces";
import Search from "../../components/search/Search";
import Location from "../../components/location/Location";
import Current from "../../components/current/Current";
import Informations from "../../components/informations/Informations";
import "./Weather.scss";

const Weather = () => {
  const [query, setQuery] = useState<string>("");
  const [date, setDate] = useState<string>("");
  const [hour, setHour] = useState<number>(0);
  const [error, setError] = useState<string>("");
  const [completeHour, setCompleteHour] = useState<string | number>("");
  const [isWeatherFetched, setIsWeatherFetched] = useState<boolean>(false);
  const [weather, setWeather] = useState<IWeather | undefined>(undefined);

  const updateWeather = async (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      const weatherData: IWeather = await fetchWeather(query, setError);
      setWeather(weatherData);
      setIsWeatherFetched(true);
      setDate(dateBuilder(new Date()));
      setQuery("");
    }
  };

  useEffect(() => {
    if (weather) {
      getLocationTime(weather, setHour, setCompleteHour);
    }
  }, [weather]);

  useEffect(() => {
    const getInitialWeather = async (query: string) => {
      const initialWeatherData: IWeather = await fetchWeather(query, setError);
      setWeather(initialWeatherData);
      setIsWeatherFetched(true);
      setDate(dateBuilder(new Date()));
      setQuery("");
    };

    getInitialWeather("paris");
  }, []);

  return (
    <div
      className={
        weather
          ? switchWeatherClassName(weather.weather[0].main, hour)
          : "weather-page none"
      }
    >
      <Search updateWeather={updateWeather} query={query} setQuery={setQuery} />
      {error ? (
        <p className="text">City not found, please try again</p>
      ) : (
        <>
          <Location isWeatherFetched={isWeatherFetched} weather={weather} />
          <Current date={date} completeHour={completeHour} />
          <Informations isWeatherFetched={isWeatherFetched} weather={weather} />
        </>
      )}
    </div>
  );
};

export default Weather;
