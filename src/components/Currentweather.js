import React from 'react';
import Wrapper from '../assets/Wrapper/CurrentWeatherWrapper';
import { iconUrl } from '../utils/utils';

const Currentweather = ({data}) => {
  if(Object.keys(data).length <=0){
    return;
  }
 
  const{ name,sys,wind,main, weather} = data;
  const {humidity,feels_like, pressure} = main;
  const today = new Date(Date.now());

  return (
    <Wrapper>
      <div className='current'>
        <div className='top'>
          <div>
            <p>{today.toDateString()}</p>
            <h2 data-testid="city-name">{name}, {sys.country}</h2>
            
          </div>
            <img
            alt="weather"
            className="weather-icon"
             src={`${iconUrl}/${weather[0].icon}@2x.png`}
             width='80' height='80'
            />
        </div>
        <div className='weather'>
            <div className='temp'> {Math.round(main.temp)}°C</div>
            
            <div className='details'>
                <p>Wind: <span>{wind.speed}</span></p>
                <p ><span>Feels like</span> <span> {feels_like.toFixed(0)}°C</span></p>
                <p>Humidity: <span>{humidity}%</span></p>
                <p>Pressure:<span>{pressure} hPa</span></p>
            </div>
        </div>
      </div>
    </Wrapper>
  )
}

export default Currentweather
