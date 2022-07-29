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
                    display: "flex", flexDirection: "row"
                }}>
                    <Box sx={{
                        background: "linear-gradient(to left, rgba(255,255,255,0), #a0f)",
                        height: 100,
                        position: "absolute",
                        zIndex: 9999

                    }}>
                        <p>aSDFAS</p>
                    </Box>
                    <Box width={"100%"}>
                        <MultiCarousel autoPlaySpeed={300} rtl={false} />
                    </Box>
                    {/* <Box sx={{
                        backdropFilter: "blur(15px)", background: "linear-gradient(to right, rgba(255,255,255,0), #afff)",
                        width: 100
                    }} /> */}
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
