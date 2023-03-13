import React from 'react'
import { render } from '@testing-library/react'
import { configureStore } from '@reduxjs/toolkit'
import { Provider } from 'react-redux'
// As a basic setup, import your same slice reducers
import weatherReducer from '../redux/reducer/WeatherSlice';
import forecastReducer from '../redux/reducer/ForecastSlice';

export const setupStore = preloadedState => {
  return configureStore({
    reducer: { weather: weatherReducer, forecast: forecastReducer },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    immutableCheck: { warnAfter: 300 },
    serializableCheck: {  warnAfter: 300},
  }),
    preloadedState
  })
}

export function renderWithProviders(
  ui,
  {
    preloadedState = {},
    // Automatically create a store instance if no store was passed in
    store = setupStore(preloadedState),
    ...renderOptions
  } = {}
) {
  function Wrapper({ children }) {
    return <Provider store={store}>{children}</Provider>
  }

  // Return an object with the store and all of RTL's query functions
  return { store, ...render(ui, { wrapper: Wrapper, ...renderOptions }) }
}