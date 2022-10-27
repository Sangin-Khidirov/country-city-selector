const mainUrl = process.env.NEXT_PUBLIC_API_URL

export const apiHttpClient = {
    returnCountries: async () => {
        const returnCountriesResponse =await fetch(`${mainUrl}/api/active_country_json/`)

        if(returnCountriesResponse.status === 200){
            return await returnCountriesResponse.json()
        }else {
            return false
        }
    },

    returnCities: async (countryCode) => {
        const returnCities = await fetch(`${mainUrl}/api/${countryCode}_json/`)

        if(returnCities.status === 200){
            return await returnCities.json()
        }else {
            return false
        }
    },


}
