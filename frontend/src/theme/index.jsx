import CssBaseline from '@mui/material/CssBaseline';
import React from 'react';
import { createTheme, ThemeProvider as MuiThemeProvider } from '@mui/material';

const ThemeProvider = props => {
    const baseTheme = createTheme({
        palette: {
            primary: { main: '#242f66' },
            secondary: { main: '#92780e' },
            text: {
                primary: '#1a1e31',
            },
            background: {
                sticker: '#faf6e8',
                sticker2: '#f0e4b6',
            },
        },
        breakpoints: {
            keys: ['xs', 'sm', 'md', 'xm', 'lg', 'xlg', 'xl', 'xxl'],
            values: {
                xs: 0,
                sm: 576,
                md: 768,
                xm: 1024,
                lg: 1146,
                xlg: 1380,
                xl: 1600,
                xxl: 1756,
            },
        },
        components: {
            MuiCssBaseline: {
                styleOverrides: theme => ({
                    body: {
                        '&::-webkit-scrollbar, & *::-webkit-scrollbar': {
                            backgroundColor: 'transparent',
                            width: '6px',
                        },
                        '&::-webkit-scrollbar-thumb, & *::-webkit-scrollbar-thumb': {
                            borderRadius: 8,
                            backgroundColor: theme.palette.divider,
                            // backgroundColor: 'red',
                        },
                        '&::-webkit-scrollbar-thumb:focus, & *::-webkit-scrollbar-thumb:focus': {
                            backgroundColor: '#747775',
                        },
                        '&::-webkit-scrollbar-thumb:active, & *::-webkit-scrollbar-thumb:active': {
                            backgroundColor: '#747775',
                        },
                        '&::-webkit-scrollbar-thumb:hover, & *::-webkit-scrollbar-thumb:hover': {
                            backgroundColor: '#747775',
                        },
                    },
                }),
            },

            MuiDivider: {
                styleOverrides: {
                    light: {
                        borderColor: '#424242',
                        width: '100%',
                    },
                },
            },

            MuiButton: {
                styleOverrides: {
                    root: {
                        textTransform: 'none',
                    },
                },
            },
            MuiTextField: {
                styleOverrides: {
                    root: {
                        marginBottom: '16px',
                        'input::-webkit-outer-spin-button,\ninput::-webkit-inner-spin-button': {
                            WebkitAppearance: 'none',
                            margin: '0',
                        },
                    },
                },
            },
        },
    });

    return (
        <MuiThemeProvider theme={baseTheme}>
            <CssBaseline />
            {props.children}
        </MuiThemeProvider>
    );
};

export default ThemeProvider;
