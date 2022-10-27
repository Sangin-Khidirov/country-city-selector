import { createTheme } from '@mui/material/styles';

let theme = createTheme()

theme = createTheme(theme, {
    breakpoints: {
        values: {
            xs: 0,
            sm: 600,
            md: 900,
            lg: 1200,
            xl: 1600,
        },
    },

    components:{
        MuiAutocomplete:{
            variants:[
                {
                    props: {classes: 'customAutoComplete'},
                    style:{
                        margin: 12
                    }
                }
            ]
        }
    }
})

export default theme;
