import Forecast from '../Forecasts';
import {render, screen} from '@testing-library/react';
import {mockForecastData} from '../../utils/testData'

describe('Forecasts', ()=>{
    const dailyforecastMocked = {
        forecast: {},
        loading: false,
    } 

    it('initial render', ()=>{
        render(<Forecast dailyforecast={dailyforecastMocked} />);
        expect(Object.keys(dailyforecastMocked.forecast).length).toBe(0);
    })

    it('forecast data present', ()=>{
        
        render(<Forecast dailyforecast={mockForecastData} />);
        expect(screen.queryAllByRole('article')).toHaveLength(6);
    })
    
})