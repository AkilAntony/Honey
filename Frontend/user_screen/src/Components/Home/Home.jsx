import React from 'react';
import './Home.css'
import {Box,ThemeProvider} from '@mui/material';
 
const Home = () => {
  return (
     <ThemeProvider
      theme={{
        palette: {
          primary: {
            main: '#007FFF',
            dark: '#0066CC',
          },
        },
      }}
    >
        <Box className = 'homeContainer' >
 
        </Box >
    </ThemeProvider>
  )
}

export default Home
