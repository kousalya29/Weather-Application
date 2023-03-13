import React from 'react';
import {render, screen, fireEvent,act} from '@testing-library/react';
import SingleForecast from '../SingleForecast';

describe('Single Forecast', ()=>{

    const SingleForecastMock = {
        dt_txt: 1666048008,
        wind: {},
        main: {humidity:'94',feels_like:'6', pressure:'1006',temp_min:'7',temp_max:"8"},
        weather: [
        { icon: "icon", main:'clouds' }
        ]
    }
   
    
    it('Toggles + / - on clicking button', async()=>{
        const { getByRole } =render(<SingleForecast forecast={SingleForecastMock} />);
        const toggleBtn =  getByRole('button');
        act(() => {
            fireEvent.click(toggleBtn);
        });
        expect(toggleBtn).toHaveTextContent('-');
        
    })

    it('show more weather details', () => { 
        render(<SingleForecast forecast={SingleForecastMock} />);
        const button = screen.getByRole('button');
        fireEvent.click(button);
        expect(screen.getByTestId('daily-description')).toBeInTheDocument();
    })


})