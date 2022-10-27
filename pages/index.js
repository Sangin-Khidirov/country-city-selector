import React, {useEffect, useState} from "react";
import TextField from '@mui/material/TextField';
import Autocomplete, { createFilterOptions } from '@mui/material/Autocomplete';
import {apiHttpClient} from "../api/endpoints";


const filterOptions = createFilterOptions({
    matchFrom: 'start',
    stringify: (option) => option,
});

export default function Home() {
    const [countries, setCountries] = useState([])
    const [countryCode, setCountryCode] = useState('')

    useEffect(() => {
        apiHttpClient.returnCountries().then(countries => {
            console.log('countries', countries.data)
            if(countries){
                setCountries(countries.data)
            }
        })
    }, [])

    useEffect(() => {
        if(countryCode){
            apiHttpClient.returnCities(countryCode).then(cities => {
                console.log('cities', cities)
            })
        }
    }, [countryCode])

    const handleChangeCountry = (event, value) => {
        if(value === 'Russia (RU)'){
            setCountryCode('ru')
        }
        else if(value === 'United States (US)'){
            setCountryCode('us')
        }
        else {
            setCountryCode('fr')
        }
    }

    return (
        <div >
            <Autocomplete
                classes={'customAutoComplete'}
                id="filter-demo"
                onChange={handleChangeCountry}
                options={!countries ? [{label:"Loading...", id:0}] : countries }
                getOptionLabel={(option) => option}
                filterOptions={filterOptions}
                sx={{ width: 300 }}
                renderInput={(params) =>
                    <TextField {...params} size={'small'} label="Countries" />
            }
            />
        </div>
    )
}
