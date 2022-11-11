import { useEffect, useState } from "react";
import { fetchWeather } from "../../services/api";
import { dateBuilder, getLocationTime } from "../../utils/functions";
import { IWeather } from "../../utils/interfaces";
import Search from "../../components/search/Search";
import Current from "../../components/current/Current";

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

  return (
    <div>
      <Search updateWeather={updateWeather} query={query} setQuery={setQuery} />
      <Current date={date} completeHour={completeHour} />
    </div>
  );
};

export default Weather;
