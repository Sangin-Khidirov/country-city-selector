import React, {useEffect, useState} from "react";
import TextField from '@mui/material/TextField';
import Autocomplete, { createFilterOptions } from '@mui/material/Autocomplete';
import {apiHttpClient} from "../api/endpoints";
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import Checkbox from '@mui/material/Checkbox'
import Container from "@mui/material/Container"
import Grid from "@mui/material/Grid"
import {Button, Typography} from "@mui/material";


const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;

const filterOptions = createFilterOptions({
    matchFrom: 'start',
    stringify: (option) => option,
});


function Home() {
    const [countries, setCountries] = useState([])
    const [country, setCountry] = useState({
        code: '',
        name: ''
    })
    const [savedCountry, setSavedCountry] = useState('')
    const [cities, setCities] = useState([])

    useEffect(() => {
        apiHttpClient.returnCountries().then(countries => {
            console.log('countries', countries.data)
            if(countries){
                setCountries(countries.data)
            }
        })
    }, [])

    useEffect(() => {
        if(country.code){
            apiHttpClient.returnCities(country.code).then(cities => {
                console.log('cities', cities)
                setCities(cities.country)
            })
        }
    }, [country.code])

    const handleChangeCountry = (event, value) => {
        if(value === 'Russia (RU)'){
            setCountry({...country, code: 'ru', name: value})
        }
        else if(value === 'United States (US)'){
            setCountry({...country, code: 'us', name: value})
        }
        else {
            setCountry({...country, code: 'fr', name: value})
        }
    }

    const handleSavedCountry = () => {
        setSavedCountry(country.name)
    }


    return (
        <Container disableGutters style={{alignItems: 'center'}} maxWidth={false} sx={'fullPageContent'}>
            <Container sx={'smallForm'}>
                <Grid container style={{textAlign: 'center'}} spacing={3}>
                    <Grid item xs={12}>
                        <Autocomplete
                            id="countries"
                            onChange={handleChangeCountry}
                            options={!countries ? [{label: "Loading...", id: 0}] : countries}
                            getOptionLabel={(option) => option}
                            filterOptions={filterOptions}
                            sx={{width: '100%'}}
                            renderInput={(params) =>
                                <TextField {...params} size={'small'} label="Countries"/>
                            }
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <Autocomplete
                            multiple
                            id="cities"
                            options={!cities ? [{label: "Loading...", id: 0}] : cities}
                            disableCloseOnSelect
                            getOptionLabel={(option) => option}
                            renderOption={(props, option, {selected}) => (
                                <li {...props}>
                                    <Checkbox
                                        icon={icon}
                                        checkedIcon={checkedIcon}
                                        style={{marginRight: 8}}
                                        checked={selected}
                                    />
                                    {option.title}
                                </li>
                            )}
                            sx={{width: '100%'}}
                            renderInput={(params) => (
                                <TextField {...params} size={'small'} label="Cities"/>
                            )}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <Button size={'small'} style={{width: '100%'}} variant={'inherit'}
                            onClick={handleSavedCountry}>
                            Save
                        </Button>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography variant={'h6'}>
                            Country: {savedCountry}
                        </Typography>
                    </Grid>
                </Grid>
            </Container>
        </Container>
    )
}

export default Home
