import React from 'react';
import {render, screen, fireEvent,act} from '@testing-library/react';
import SingleForecast from '../SingleForecast';
import {mockWeatherData} from '../../utils/testData'

describe('Single Forecast', ()=>{
  
    
    it('Toggles + / - on clicking button', async()=>{
        const { getByRole } =render(<SingleForecast forecast={mockWeatherData} />);
        const toggleBtn =  getByRole('button');
        act(() => {
            fireEvent.click(toggleBtn);
        });
        expect(toggleBtn).toHaveTextContent('-');
        
    })

    it('show more weather details', () => { 
        render(<SingleForecast forecast={mockWeatherData} />);
        const button = screen.getByRole('button');
        fireEvent.click(button);
        expect(screen.getByTestId('daily-description')).toBeInTheDocument();
    })


})
