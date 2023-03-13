import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import axios from "axios";
const openweather = process.env.REACT_APP_OPENWEATHER_API_KEY;
const geocities = process.env.REACT_APP_GEOCITIES_API_KEY;

export const initialState ={
    data:{},
    isLoading: false,
}
export const getWeather = createAsyncThunk('weather/getWeather', async({latitude,longitude}, thunkAPI)=>{
    let url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${openweather}&units=metric`
    try {
        const resp  = await axios.get(url);
        const result = await resp.data;
        return result;
    } catch(error) {
        return thunkAPI.rejectWithValue(error);
    }  
});

const WeatherSlice =  createSlice({
    name:'weather',
    initialState,
    reducers:{
        showLoading: (state) => {
            state.isLoading =true;
        }
        
    },
    extraReducers:(builder)=>{
        builder.addCase(getWeather.pending,(state)=>{
            state.isLoading = true;
        }).addCase(getWeather.fulfilled, (state,{payload})=>{
            state.isLoading = false;
            state.data = payload;            
        }).addCase(getWeather.rejected, (state,{payload})=>{
            state.isLoading=false;
        })
    },
   
});

export const {showLoading} = WeatherSlice.actions;
export default WeatherSlice.reducer;