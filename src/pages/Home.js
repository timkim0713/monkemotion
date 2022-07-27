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
                <Box mt={5} sx={{
                    backdropFilter: "blur(5px)", backgroundColor:
                        "rgba(255,255,255,0.8)",
                    backgroundColor: "blue", display: "flex", flexDirection: "row"
                }}>
                    <Box sx={{
                        backgroundColor: "red",
                        width: 100
                    }}></Box>
                    <Box width={"90%"}>
                        <MultiCarousel autoPlaySpeed={300} rtl={false} />
                    </Box>
                    <Box sx={{
                        backgroundColor: "red",
                        width: 100,
                    }}></Box>
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
