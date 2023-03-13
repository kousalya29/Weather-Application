import React, {useState} from 'react';
import { AsyncPaginate } from "react-select-async-paginate";
import {  getCities } from '../utils/utils';

const Search = (props) =>{
    const { fetchWeather} = props;
    const [search, setSearch]= useState();

    const handleSearch = (searchData) =>{
        setSearch(searchData);
        fetchWeather(searchData)
    }
    return (
        <div className='searchcontainer'>
            <AsyncPaginate className='searchfield' 
                debounceTimeout={700} 
                value={search}
                placeholder='Enter city'
                onChange={handleSearch}
                loadOptions={getCities}            
            />
        </div>
    )
}

export default Search;