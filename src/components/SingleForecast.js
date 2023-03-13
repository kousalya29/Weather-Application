import React,{useState} from 'react';
import { iconUrl } from '../utils/utils';

const SingleForecast = ({forecast}) => {
    const {dt_txt, weather, main,wind} = forecast;
    const {humidity,feels_like, pressure,temp_min,temp_max} = main;
    const [showData, setShowData] = useState(false);
    
    
  return (
    <article className='forecast' >
        <header>
            <p>{new Date(dt_txt).toDateString()} <br /><span className='timestamp'>{new Date(dt_txt).toLocaleTimeString('en-US')} </span></p>
            <img 
                alt="weather"
                className="weather-icon"
                src={`${iconUrl}/${weather[0].icon}@2x.png`}
                width='80' height='80'
            />
            <p>{Math.round(temp_min)}/{Math.round(temp_max)}°C</p>
            <p>{weather[0].main}</p>
            <button className='btn' onClick={()=>setShowData(!showData)}> {showData ? '-' :'+'}</button>
           
        </header>
         {showData && <div className='description' data-testid="daily-description">
                        <div className='details'><img
                            alt="weather"
                            className="weather-icon"
                            src={`${iconUrl}/${weather[0].icon}@2x.png`}
                            width='80' height='80'
                        /><span>The high will be {Math.round(temp_min)}°C, the low will be {Math.round(temp_max)}°C.</span></div>
                        <div className='detailsRow'>
                            <p>Wind: <span>{wind.speed}</span></p>
                            <p >Feels like: <span> {Math.round(feels_like)}°C</span></p>
                            <p>Humidity: <span>{humidity}%</span></p>
                            <p>Pressure:<span>{pressure} hPa</span></p>
                        </div>
                     </div>
            }
    </article>
  )
}

export default SingleForecast
