const geocities = process.env.REACT_APP_GEOCITIES_API_KEY;

//geodb-cities -fetch results for autocomplete search cities
 const locationOptions = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': geocities,
		'X-RapidAPI-Host': 'wft-geo-db.p.rapidapi.com'
	}
};

 const location_list_url = 'https://wft-geo-db.p.rapidapi.com/v1/geo';

export async function getCities(searchTerm) {  
        try {
            const response = await fetch(`${location_list_url}/cities?namePrefix=${searchTerm}` , locationOptions)
            const results =  await response.json();
            return {
                options: results.data.map((city) =>{
                    return {
                        value: `${city.latitude} ${city.longitude}`,
                        label: `${city.name} ${city.countryCode}`
                    }
                })
             }
        } catch(error) {
           return error;
        }  
}

export const iconUrl = 'https://openweathermap.org/img/wn';