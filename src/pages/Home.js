import * as React from 'react';
import Box from '@mui/material/Box';
import MainContent from '../MainContent';
import MainCarousel from "../components/MainCarousel"
import MiniGallery from '../components/MiniGallery';
function Home() {
    return (
        <Box>
            <MainCarousel />

            <Box mt={10}>
                <MainContent />
            </Box>

            <Box mt={10}>
                <MiniGallery />
            </Box>

        </Box >
    );
}

export default Home;
