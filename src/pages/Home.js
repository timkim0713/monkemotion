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
                <MainContent img={"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAATlBMVEXjHRn////hAAD0vLz87ezyrKv75+f3zczjFxLiEgzlPTvpYV/sgYDjGRXiDwn40dHlNTP1wsL99PTrdnTxpqXnUU/lOjfqaGbnS0npX12OVvhKAAABzElEQVR4nO3cy27iQBBAUfCQweYRXgkJ//+js7TLEaUMlBFC52ybTulm5U7azGYAAAAAAAAAAAAAAAAAAAAAvKImM83ILhv5Xj2tOfy57m2SxG6dzDxsqhObeeI4SWGzyWaW/1bTwoXC20YqLB6nsJ7C6nEK6ymsHqewnsLqcYu/Q8cHFL6f4syJC0fnw48HFM7e48zFxIVB8/aIwtFMhbXTFE4xU2HtNIVTzFRYO03hFDMV1k5TOLCNz89tWGzj4jab+ayF2/1uObD7HCa2n3FxnyQ+bWG7Ch+dr7vBYreOi6v26s9RWEzhgEKF/UyFpRQOKFTYz1RY6o7CS9P1mssLFI7PFqfLunc5vcDZYnw+3IWduxc4H453LsPO5X/sVFhKYbJT4fWdCkspTHYqvL5TYSmFyc7nLczvRCWvs9z+5J3eifqIiwWB2b22eVhbnIaJ23PYufg6r3rnr7h4Hibm99qOceb9iendxJHNcNzPE3DbS0/A+d3EkScq/P1fMRQqVKhQoUKFChUq/FmYvY8/elU+RGz3YefhO9z6+o6L4T8z6fv445kVx6ff68LG22/upd+pMHJ/IAAAAAAAAAAAAAAAAAAAAABP6B/BYC8m2V+4agAAAABJRU5ErkJggg=="} title={"We Love Monkeys"} content={"Monkeys can help us."} subtitle={"August 3rd 2022"} />
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
