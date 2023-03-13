import React from 'react';
import CurrentWeather from '../Currentweather';
import {render, screen} from '@testing-library/react';
import {mockWeatherData} from '../../utils/testData'

describe('Current Weather', ()=>{

    it('weather data present', ()=>{
        
        render(<CurrentWeather data={mockWeatherData} />);

        const cityName = screen.getByTestId("city-name");
        expect(cityName).toBeVisible();
        expect(cityName).toHaveTextContent("Saacow, SO")
    })
    
   
    
})