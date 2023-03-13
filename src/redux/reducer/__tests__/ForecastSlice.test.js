import reducer, {initialState,getForecast} from "../ForecastSlice";
import { mockForecastResponse,mockForecastData,latitude,longitude } from '../../../utils/testData';
import {store} from '../../store';
 /**
   * Testing the initial state
   */
  
  test("Should return initial state", () => {
    expect(undefined).toEqual(initialState);
  });
    /**
   * Testing the getWeather by Lat and lon thunk
   */
  
  describe("CreateAsyncThunk get forecast", () => {

    beforeAll(() => {
      mockForecastResponse();
    });
  
    it("Should be able to fetch weather data", async () => {

      const result = await store.dispatch(getForecast({latitude,longitude}));

      const forecast = result.payload;
   
      expect(result.type).toBe("forecast/getForecast/fulfilled");
      //expect(forecast).toEqual(mockForecastData);
  
      const state = store.getState().forecast;
 
      expect(state.loading).toBe(false);
      expect(state.forecast).toEqual(forecast);
    });
  });