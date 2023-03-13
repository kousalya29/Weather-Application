import React,{useState} from 'react'
import Wrapper from '../assets/Wrapper/ForecastWrapper';
import SingleForecast from './SingleForecast';

const Forecast = ({dailyforecast}) => {
  ///console.log(dailyforecast)
    if(!dailyforecast || !dailyforecast.list) return;
    if(Object.keys(dailyforecast).length <=0){
      return;
    }
  
  return (
    <Wrapper>
     <div className='forecastcontainer'>
          {dailyforecast.list.map((forecast,index)=>{
            return <SingleForecast key={index} forecast={forecast}/>
          })}
        </div>
    </Wrapper>
  )
}

export default Forecast;
