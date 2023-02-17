import axios from "axios";
// weather?lat={lat}&lon={lon}&appid={API key}
const instance = axios.create({
  baseURL: "https://api.openweathermap.org/data/2.5/",
  params: {
    appid: "c0d2fa1aa8da5aaa1f03a56e5f10f5c4",
    lang: "kr",
    units: "metric",
    // =>섭씨
  },
});

export const getWeather = ({ queryKey }) => {
  const [_, lat, lon] = queryKey;
  return instance.get(`weather?lat=${lat}&lon=${lon}`).then((res) => res.data);
};
