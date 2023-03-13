import { configureStore } from "@reduxjs/toolkit";
import WeatherSlice from "./reducer/WeatherSlice"; 
import ForecastSlice from "./reducer/ForecastSlice";

export const store = configureStore({
    reducer:{
        weather: WeatherSlice,
        forecast: ForecastSlice,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    immutableCheck: { warnAfter: 200 },
    serializableCheck: {  warnAfter: 200},
  })
})

