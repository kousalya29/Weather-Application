import axios from "axios";
import MockAdapter from "axios-mock-adapter";

const longitude = 42.6181;
const latitude = 1.5382;
const mockWeatherData = {"base": "stations", "clouds": {"all": 61}, "cod": 200, "coord": {"lat": 1.5382, "lon": 42.6181}, "dt": 1678672844, "id": 52381, "main": {"feels_like": 25.8, "grnd_level": 998, "humidity": 85, "pressure": 1008, "sea_level": 1008, "temp": 25.02, "temp_max": 25.02, "temp_min": 25.02}, "name": "Saacow", "sys": {"country": "SO", "sunrise": 1678677375, "sunset": 1678720934}, "timezone": 10800, "visibility": 10000, "weather": [{"description": "broken clouds", "icon": "04n", "id": 803, "main": "Clouds"}], "wind": {"deg": 109, "gust": 11, "speed": 4.84}};

const mockForecastData = {"city": {"coord": {"lat": 1.5382, "lon": 42.6181}, "country": "SO", "id": 52381, "name": "Saacow", "population": 7893, "sunrise": 1678677375, "sunset": 1678720934, "timezone": 10800}, "cnt": 5, "cod": "200", "list": [{"clouds": {"all": 62}, "dt": 1678676400, "dt_txt": "2023-03-13 03:00:00", "main": {"feels_like": 25.7, "grnd_level": 
998, "humidity": 87, "pressure": 1009, "sea_level": 1009, "temp": 24.88, "temp_kf": 0, "temp_max": 24.88, "temp_min": 24.88}, "pop": 0, "sys": {"pod": "n"}, "visibility": 10000, "weather": [{"description": "broken clouds", "icon": "04n", "id": 803, "main": "Clouds"}], "wind": {"deg": 102, "gust": 9.62, "speed": 3.93}}, {"clouds": {"all": 68}, "dt": 1678687200, "dt_txt": "2023-03-13 06:00:00", "main": {"feels_like": 26.15, "grnd_level": 1000, "humidity": 80, "pressure": 1010, "sea_level": 1010, "temp": 26.15, "temp_kf": -2.55, "temp_max": 28.7, "temp_min": 26.15}, "pop": 0.2, "rain": {"3h": 0.19}, "sys": {"pod": "d"}, "visibility": 10000, "weather": [{"description": "light rain", "icon": "10d", "id": 500, "main": "Rain"}], "wind": {"deg": 101, "gust": 7.41, "speed": 5.61}}, {"clouds": {"all": 87}, "dt": 1678698000, "dt_txt": "2023-03-13 09:00:00", "main": {"feels_like": 32.55, "grnd_level": 999, "humidity": 63, "pressure": 1009, "sea_level": 1009, "temp": 29.55, "temp_kf": -2.33, "temp_max": 31.88, "temp_min": 29.55}, "pop": 0.24, "rain": {"3h": 0.15}, "sys": {"pod": "d"}, "visibility": 10000, "weather": [{"description": "light rain", "icon": "10d", "id": 500, "main": "Rain"}], "wind": {"deg": 114, "gust": 5.43, "speed": 4.59}}, {"clouds": {"all": 72}, "dt": 1678708800, "dt_txt": "2023-03-13 12:00:00", "main": {"feels_like": 37.9, "grnd_level": 994, "humidity": 33, "pressure": 1005, "sea_level": 1005, "temp": 36.56, "temp_kf": 0, "temp_max": 36.56, "temp_min": 36.56}, "pop": 0, "sys": {"pod": "d"}, "visibility": 10000, "weather": [{"description": "broken clouds", "icon": "04d", "id": 
803, "main": "Clouds"}], "wind": {"deg": 135, "gust": 4.82, "speed": 4.23}}, {"clouds": {"all": 83}, "dt": 1678719600, "dt_txt": "2023-03-13 15:00:00", "main": {"feels_like": 35.18, "grnd_level": 995, "humidity": 39, "pressure": 1005, "sea_level": 1005, "temp": 34, "temp_kf": 0, 
"temp_max": 34, "temp_min": 34}, "pop": 0.34, "rain": {"3h": 0.13}, "sys": {"pod": "d"}, "visibility": 10000, "weather": [{"description": "light rain", "icon": "10d", "id": 500, "main": "Rain"}], "wind": {"deg": 110, "gust": 6.71, "speed": 5.61}}], "message": 0};
// Adding mock network response that is used in tests
export const axiosInstance = axios.create({
  baseURL: 'https://api.openweathermap.org/data/2.5/',
});
const mockNetWorkResponse = () => {
  const mock = new MockAdapter(axiosInstance);
  mock.onGet(`weather?lat=${latitude}&lon=${longitude}&units=metric`).reply(200, [mockWeatherData]);
};

const mockForecastResponse = () => {
  const mock = new MockAdapter(axiosInstance);
  mock.onGet(`forecast?lat=${latitude}&lon=${longitude}&units=metric`).reply(200, [mockForecastData]);
};

export {
  mockNetWorkResponse,
  mockForecastResponse,
  mockWeatherData,
  latitude,
  longitude,
  mockForecastData,
};