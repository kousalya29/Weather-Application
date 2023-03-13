import React, {useEffect, useState} from 'react';
import Search from './components/Search';
import Wrapper from './assets/Wrapper/AppWrapper';
import Currentweather from './components/Currentweather';
import Forecast from './components/Forecasts';
import { useDispatch, useSelector } from 'react-redux';
import {getWeather} from './redux/reducer/WeatherSlice';
import { getForecast } from './redux/reducer/ForecastSlice';

function App() {
  const weatherData = useSelector((store)=> store.weather)
  const forecastData = useSelector((store)=> store.forecast);

 const dispatch = useDispatch();

 const fetchWeather=(city)=>{
  const [latitude, longitude] = city.value.split(" ");
    return (
        dispatch(getWeather({latitude,longitude})),
        dispatch(getForecast({latitude,longitude}))
    )
 }
 
 useEffect(()=>{
    fetchWeather({value: '11 76.966666666', label: 'Coimbatore IN'});
 },[])

  return (
    <Wrapper>
      <div className='container'>
        <h1 className='heading'>Weather App</h1>
       <Search fetchWeather={fetchWeather}/>
       {(weatherData.isLoading || forecastData.loading)? <h2 className='loader' data-testid='loader'></h2>:(
        <div data-testid='weatherdata'>
          <Currentweather data={weatherData.data}/>
          <Forecast dailyforecast = {forecastData.forecast} />
        </div>
        )}  
      </div>
    </Wrapper>
  );
}

export default App;
