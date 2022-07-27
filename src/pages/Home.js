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
                <Box mt={5}>
                    <MultiCarousel autoPlaySpeed={300} rtl={false} />
                </Box>
                <Box mt={5}>
                    <MultiCarousel autoPlaySpeed={200} rtl={true} />
                </Box>
                <Box mt={5}>
                    <MultiCarousel autoPlaySpeed={350} rtl={false} />
                </Box>
            </Box>

        </Box>
    );
}

export default Home;
