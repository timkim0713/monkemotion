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
                        background: "linear-gradient(to left, rgba(255,255,255,0), #fff)",
                        height: 350,
                        width: 100,
                        position: "absolute",
                        zIndex: 9999

                    }} />
                    <Box width={"100%"}>
                        <MultiCarousel autoPlaySpeed={1200} rtl={false} />
                    </Box>

                    <Box>
                        <Box sx={{
                            background: "linear-gradient(to right, rgba(255,255,255,0), #fff)",
                            height: 350,
                            width: 100,
                            position: "absolute",
                            zIndex: 9999,
                            marginLeft: -12

                        }} />
                    </Box>

                </Box>
                <Box mt={5}>
                    <MultiCarousel autoPlaySpeed={1000} rtl={true} />
                </Box>
                <Box mt={5}>
                    <MultiCarousel autoPlaySpeed={1100} rtl={false} />
                </Box>
            </Box>

        </Box >
    );
}

export default Home;
