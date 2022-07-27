import * as React from 'react';
import Grid from '@mui/material/Grid';
import MainCard from './components/MainCard';
import { Card, CardContent, Typography } from '@mui/material';

function MainContent() {
    return (
        <Grid container
            direction={"row"}
            xs={12}
            sm={12}
            columnSpacing={5}
        >
            <Grid xs={12} md={6}>
                <Card>
                    <img src="https://picsum.photos/id/237/300/300"></img>
                </Card>
            </Grid>

            <Grid xs={12} md={6}>
                <Card>
                    <CardContent>
                        <Typography variant='h4'>monkemotion</Typography>
                        <Typography variant='body1'>
                            Description about monkemotion. Learn more!
                        </Typography>

                    </CardContent>
                </Card>
            </Grid>
        </Grid>
    );
}

export default MainContent;
