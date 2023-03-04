import React from 'react';
import AppBar from '@mui/material/AppBar';
import Stack from '@mui/material/Stack';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { ThemeProvider, createTheme } from '@mui/material/styles';

function appBarLabel(label) {
    return (
        <Toolbar sx={{padding:'20px'}}>
            <Typography variant="h4" noWrap component="div" sx={{ flexGrow: 1, textAlign:'center', height: '60px',}}>
                POKEMON
            </Typography>
        </Toolbar>
        );
    }

const Footer = () => {

    const darkTheme = createTheme({
        palette: {
        mode: 'dark',
        primary: {
            main: '#1976d2',
        },
        },
    });
    return (
        <Stack spacing={2} sx={{ flewGrow: 1 }}>
            <ThemeProvider theme={darkTheme}>
                <AppBar position="static" color="primary">
                {appBarLabel('default')}
                </AppBar>
            </ThemeProvider>
        </Stack>
    );
};

export default Footer;