import axios from 'axios';

const API = process.env.EXPO_PUBLIC_WEATHER_API_URL;
const KEY = process.env.EXPO_PUBLIC_WEATHER_API_KEY;

export const getCurentWeather = async (query: string) => {
  const q = `&q=${query}`;
  const { data } = await axios.get(`${API}/current.json?key=${KEY}${q}`);
  return data;
};
