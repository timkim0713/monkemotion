import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from "@mui/material/Typography"
import Grid from "@mui/material/Grid"
import { Button } from '@mui/material';

function Footer() {
    return (
        <Grid
            container
            direction="row"
            justifyContent="center"
            sx={{ height: "40vh", backgroundColor: "lightGrey", paddingTop: 10 }}
        >
            <Typography variant={"body1"}>Monkemotion Footer</Typography>
            <Grid container direction="row" justifyContent={"center"}>
                <Grid item>
                    <Button>HOME</Button>
                </Grid>

                <Grid item>
                    <Button>CONTRIBUTE</Button>
                </Grid>

                <Grid item>
                    <Button>RESEARCH</Button>
                </Grid>

                <Grid item>
                    <Button>ABOUT</Button>
                </Grid>
            </Grid>

        </Grid >
    );
}

export default Footer;
