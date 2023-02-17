import axios from "axios";
// weather?lat={lat}&lon={lon}&appid={API key}
const instance = axios.create({
  baseURL: "https://api.openweathermap.org/data/2.5/weather?",
  params: {
    lat: "35",
    lon: "129",
    appid: "c0d2fa1aa8da5aaa1f03a56e5f10f5c4",
  },
});

export const getWeather = () => instance.get().then((res) => res.data);
