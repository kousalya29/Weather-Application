import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
const openweather = process.env.REACT_APP_OPENWEATHER_API_KEY;

const initialState ={
    forecast:{},
    loading: false,
}
export const getForecast = createAsyncThunk('forecast/getForecast', async({latitude,longitude}, thunkAPI)=>{
    let url = `https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&cnt=5&appid=${openweather}&units=metric`;
    try {
        const resp  = await fetch(url);
        const result = await resp.json();
        return result;
    } catch(error) {
        return thunkAPI.rejectWithValue(error);
    }  
});

const ForecastSlice =  createSlice({
    name:'forecast',
    initialState,
    reducers:{
        showLoading: (state) => {
            state.loading =true;
        }
        
    },
    extraReducers:(builder)=>{
        builder.addCase(getForecast.pending,(state)=>{
            state.loading = true;
        }).addCase(getForecast.fulfilled, (state,{payload})=>{
            state.loading = false;
            state.forecast = payload;            
        }).addCase(getForecast.rejected, (state,{payload})=>{
            state.loading=false;
        })
    },
   
});

export const {showLoading} = ForecastSlice.actions;
export default ForecastSlice.reducer;