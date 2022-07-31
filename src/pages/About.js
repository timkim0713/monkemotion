import * as React from 'react';
import Box from '@mui/material/Box';
import MainCard from '../components/MainCard';
import Grid from '@mui/material/Grid';
import { Card, CardContent, Typography } from '@mui/material';

function About() {
    return (
        <Box sx={{ width: "100%" }}>
        <Grid container
            direction={"row"}
            justifyContent={"space-between"} columnSpacing={10}
        >
            <Grid item xs={12} md={6}>
                <Card sx={{ height: 400, width: "100%", }}>
                </Card>
            </Grid>

            <Grid item xs={12} md={6}>
                <Card sx={{ height: 400, width: "100%", }}>
                    <CardContent>
                        <Typography variant='h4'>monkemotion</Typography>
                        <Typography variant='body1'>
                            Description about monkemotion. Learn more!
                        </Typography>

                    </CardContent>
                </Card>
            </Grid>
        </Grid>
        <Grid container
            direction={"row"}
            justifyContent={"space-between"} columnSpacing={10}
        >
            <Grid item xs={12} md={6}>
                <Card sx={{ height: 400, width: "100%", }}>
                </Card>
            </Grid>

            <Grid item xs={12} md={6}>
                <Card sx={{ height: 400, width: "100%", }}>
                    <CardContent>
                        <Typography variant='h4'>monkemotion</Typography>
                        <Typography variant='body1'>
                            Description about monkemotion. Learn more!
                        </Typography>

                    </CardContent>
                </Card>
            </Grid>
        </Grid>
    </Box>
    );
}

export default About;
