import { IWeather } from "../../utils/interfaces";
import "./Informations.scss";

type Props = {
  isWeatherFetched: boolean;
  weather: IWeather | undefined;
};

const Informations = ({ weather, isWeatherFetched }: Props) => {
  return (
    <div className="weather">
      {isWeatherFetched && (
        <div className="weather__container">
          <p className="weather__main">{weather?.weather[0].main}</p>
          <p className="weather__informations">
            {weather?.weather[0].description}
          </p>
          <img
            src={
              "http://openweathermap.org/img/wn/" +
              weather?.weather[0].icon +
              "@2x.png"
            }
            alt="weather-icon"
            className="weather__icon"
          />
          <br />
          <p className="weather__temperature">
            {weather?.main.temp && <>{Math.round(weather.main.temp)}°C</>}
          </p>
          <p className="weather__informations">
            {weather?.main.humidity && (
              <>
                <span>Humidity:</span> {weather.main.humidity} %
              </>
            )}
          </p>
          <p className="weather__informations">
            {weather?.wind.speed && (
              <>
                <span>Wind:</span> {weather.wind.speed} meter/sec
              </>
            )}
          </p>
        </div>
      )}
    </div>
  );
};

export default Informations;
