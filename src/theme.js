import { createTheme } from '@mui/material/styles';

let theme = createTheme()

theme = createTheme(theme, {
    components:{

        MuiContainer: {
            variants: [
                {
                    props: { sx: 'fullPageContent' },
                    style: {
                        display: 'flex',
                        justifyContent: 'center',
                        minHeight: '100vh',
                        padding: 0,
                    }
                },
                {
                    props: { sx: 'smallForm' },
                    style: {
                        justifyContent: 'center',
                        position: 'relative',
                        paddingTop: theme.spacing(4),
                        paddingBottom: theme.spacing(3),
                        alignItems: 'center',
                        boxShadow: '0px 0px 5px rgba(0, 0, 0, 0.5)',
                        borderRadius: "10px",
                        backgroundColor: '#FFFFFF',
                        margin: '16px',
                        maxWidth: '360px !important'
                    }
                },

            ]
        },
        MuiButton: {
            variants: [
                {
                    props: { variant: 'inherit' },
                    style: {
                        background: 'rgba(211,215,215,0.2)',
                        ":hover": {
                            background: '#b5bcbc',
                        },
                    },
                },
            ],
        },
    }
})

export default theme;
