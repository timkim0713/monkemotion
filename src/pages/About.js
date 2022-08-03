import * as React from 'react';
import Box from '@mui/material/Box';
import MainCard from '../components/MainCard';
import Grid from '@mui/material/Grid';
import { Card, CardContent, Typography } from '@mui/material';
import MainContent from '../MainContent';

import Heading from '../components/Heading';

function About() {
    return (

        <Box sx={{ width: "100%" }}>
            <Heading title={"About"} content={"Learn about what we do."} />
            <Box mt={10}>
                <MainContent img={"https://mui.com/static/images/grid/complex.jpg"} title={"Abc"} content={"content"} subtitle={"sub1"} />
            </Box>

            <Box mt={10}>
                <MainContent img={"https://mui.com/static/images/grid/complex.jpg"} title={"Abc"} content={"content"} subtitle={"sub2"} />
            </Box>

        </Box>
    );
}

export default About;
