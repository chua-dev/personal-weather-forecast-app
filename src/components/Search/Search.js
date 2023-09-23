import React, { useState } from 'react';
import { AsyncPaginate } from 'react-select-async-paginate';
import { getCityList } from '../../api/OpenWeatherApiService';

const Search = () => {
    const [searchValue, setSearchValue] = useState(null);

    const searchOptions = async (inputValue) => {
        const cityList = await getCityList(inputValue);

        return {
            options: cityList.data.map((city) => {
                return {
                    value: `${city.latitude} ${city.longitude}`, // actual value assigned in search
                    label: `${city.name}, ${city.countryCode}`, // Label shown in suggestion options
                }
            })
        }

    }

    // onChange send MAPPED value to process usign parent function
    const searchHandler = (inputData) => {
        setSearchValue(inputData);
        console.log(inputData); // CALL function
    }

    return (
        <AsyncPaginate
            placeholder="Enter Your City Name"
            debounceTimeout={600}
            value={searchValue}
            onChange={searchHandler} // onchange mean change to values in option, not when typing
            loadOptions={searchOptions}
        />
    )
}

export default Search;