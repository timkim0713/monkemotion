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
            <Heading title={"About"} content={"This is about page"} />
            <Box mt={10}>
                <MainContent />
            </Box>

            <Box mt={10}>
                <MainContent />
            </Box>

        </Box>
    );
}

export default About;
