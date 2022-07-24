import * as React from 'react';
import Grid from '@mui/material/Grid';
import MainCard from './components/MainCard';

function MainContent() {
    return (
        <Grid container
            direction={"row"}
            xs={12}
            sm={12}
            columnSpacing={5}
        >
            <Grid xs={12} md={6}>
                <MainCard title={"Why Monkemotion"} content={"Monkemotion is the start of collecting monkey emotion data"} />
            </Grid>

            <Grid xs={12} md={6}>
                <MainCard title={"We Monkemotion"} content={"Our project started in July 2022"} />
            </Grid>
        </Grid>
    );
}

export default MainContent;
