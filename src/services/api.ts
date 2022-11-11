import axios from "axios";
import { api } from "../services/apiKey";

// Fetch weather API
export const fetchWeather = (query: string, setError: React.Dispatch<React.SetStateAction<string>>) => {
    return axios
      .get(`${api.url}weather?q=${query}&units=metric&appid=${api.key}`)
      .then((res) => {
        setError("");
        return res.data;
      }).catch(error => {
        setError(error);
    })
};