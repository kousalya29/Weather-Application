import reducer, {initialState,getWeather} from "../WeatherSlice";
import { mockNetWorkResponse,mockWeatherData,latitude,longitude } from '../../../utils/testData';
import {store} from '../../store';
 /**
   * Testing the initial state
   */
  
  test("Should return initial state", () => {
    expect(
      reducer(undefined, {
        type: undefined,
      })
    ).toEqual(initialState);
  });
    /**
   * Testing the getWeather by Lat and lon thunk
   */
  
  describe("CreateAsyncThunk get Weather", () => {

    beforeAll(() => {
      mockNetWorkResponse();
    });
  
    it("Should be able to fetch weather data", async () => {

      const result = await store.dispatch(getWeather({latitude,longitude}));

      const weather = result.payload;
   
      expect(result.type).toBe("weather/getWeather/fulfilled");
     // expect(weather).toEqual(mockWeatherData);
  
      const state = store.getState().weather;
 
      expect(state.isLoading).toBe(false);
      expect(state.data).toEqual(weather);
    });
  });
  