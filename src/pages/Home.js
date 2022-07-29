import * as React from 'react';
import Box from '@mui/material/Box';
import MainContent from '../MainContent';
import MainCarousel from "../components/MainCarousel"
import MiniGallery from '../components/MiniGallery';
import { Button, Typography } from '@mui/material';
import { Link } from "react-router-dom";

function Home() {
    return (
        <Box>
            <MainCarousel />

            <Box mt={10}>
                <MainContent />
            </Box>

            <Box mt={10}>

                <MiniGallery />

                <Box display={"flex"} justifyContent={"center"} flexDirection={"column"} mt={6}>
                    <Typography variant={"body2"} sx={{ textAlign: "center" }}>
                        Contribute Now    Contribute Now    Contribute Now    Contribute Now
                    </Typography>
                    <Box display={"flex"} justifyContent={"center"} width={"100%"} mt={3}>


                        <Link to={"/contribute"}>
                            <Button variant={"outlined"} onClick={() => { }}>
                                <Typography variant={"h6"}>
                                    Contribute Now
                                </Typography>
                            </Button>
                        </Link>


                    </Box>
                </Box>


            </Box>

        </Box >
    );
}

export default Home;
