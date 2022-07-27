import * as React from 'react';
import Box from '@mui/material/Box';
import MainContent from '../MainContent';
import MainCarousel from "../components/MainCarousel"
function Home() {
    return (
        <Box>
            <MainCarousel />
            <MainContent></MainContent>
        </Box>
    );
}

export default Home;
