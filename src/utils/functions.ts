import { IWeather } from "./interfaces";

// Get local time
export const getLocationTime = (
  weather: IWeather,
  setHour: React.Dispatch<React.SetStateAction<number>>,
  setCompleteHour: React.Dispatch<React.SetStateAction<string | number>>
) => {
  if (weather) {
    const newDate = new Date();
    const newUTCHour = newDate.getUTCHours(); // UTC+0 méridien heure
    let newUTCMinutes = newDate.getUTCMinutes();
    let hour = newUTCHour + weather.timezone / 3600;
    let minutes: number | string;
    const zero = "0";
    let totalHour: number | string;

    if (hour >= 24) {
      hour = hour - 24;
    } else if (hour < 0) {
      hour = 24 + hour;
    }

    if (newUTCMinutes >= 0 && newUTCMinutes <= 9) {
      minutes = zero + newUTCMinutes;
      totalHour = hour + "h" + minutes;
    } else {
      totalHour = hour + "h" + newUTCMinutes;
    }

    setHour(hour);
    setCompleteHour(totalHour);
  }
};

// Get local date
export const dateBuilder = (d: Date) => {
  let months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  let days = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];

  let day = days[d.getDay()];
  let date = d.getDate();
  let month = months[d.getMonth()];
  let year = d.getFullYear();

  return `${day} ${date} ${month} ${year}`;
};

// Switch app classname depending on the weather conditions
export const switchWeatherClassName = (weather: string, hour: number) => {
  const prefix = "weather-page";

  switch (weather) {
    case "Clouds":
    case "Squall":
      if (hour >= 5 && hour < 19) {
        return prefix + " cloudy";
      } else {
        return prefix + " cloudy-night";
      }
    case "Rain":
      if (hour >= 5 && hour < 19) {
        return prefix + " rainy";
      } else {
        return prefix + " rainy-night";
      }
    case "Snow":
      if (hour >= 5 && hour < 19) {
        return prefix + " snowy";
      } else {
        return prefix + " snowy-night";
      }
    case "Thunderstorm":
      if (hour >= 5 && hour < 19) {
        return prefix + " stormy";
      } else {
        return prefix + " stormy-night";
      }
    case "Drizzle":
      if (hour >= 5 && hour < 19) {
        return prefix + " drizzly";
      } else {
        return prefix + " drizzly-night";
      }
    case "Clear":
      if (hour >= 5 && hour < 19) {
        return prefix + " clear";
      } else {
        return prefix + " clear-night";
      }
    case "Mist":
    case "Smoke":
    case "Haze":
    case "Fog":
    case "Ash":
      if (hour >= 5 && hour < 19) {
        return prefix + " foggy";
      } else {
        return prefix + " foggy-night";
      }
    case "Dust":
      if (hour >= 5 && hour < 19) {
        return prefix + " dusty";
      } else {
        return prefix + " dusty-night";
      }
    case "Sand":
      if (hour >= 5 && hour < 19) {
        return prefix + " sandy";
      } else {
        return prefix + " sandy-night";
      }
    case "Tornado":
      if (hour >= 5 && hour < 19) {
        return prefix + " tornado";
      } else {
        return prefix + " tornado-night";
      }
  }
};
