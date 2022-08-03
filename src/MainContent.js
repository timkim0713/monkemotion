import * as React from 'react';
import Grid from '@mui/material/Grid';
import MainCard from './components/MainCard';
import { Card, CardContent, Typography } from '@mui/material';
import Box from "@mui/material/Box"

function MainContent({ title, subtitle, content, img }) {
    return (
        <Box sx={{ width: "100%" }}>
            <Grid container
                direction={"row"}
                justifyContent={"space-between"} columnSpacing={10}
            >
                <Grid item xs={12} md={6}>
                    <Card sx={{ height: 400, width: "100%", }}>
                        <img src={img}></img>
                    </Card>
                </Grid>

                <MainCard title={title} content={content} subtitle={subtitle} />
            </Grid>
        </Box>
    );
}

export default MainContent;
