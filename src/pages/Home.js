import * as React from 'react';
import Box from '@mui/material/Box';
import MainContent from '../MainContent';
import MainCarousel from "../components/MainCarousel"
import MultiCarousel from '../components/MultiCarousel';
function Home() {
    return (
        <Box>
            <MainCarousel />

            <Box mt={10}>
                <MainContent />
            </Box>

            <Box mt={10}>
                <MultiCarousel
                    arrows={false}
                    swipeable={false}
                    draggable={false}
                    showDots={false}
                    infinite={false}

                />
            </Box>

        </Box>
    );
}

export default Home;
