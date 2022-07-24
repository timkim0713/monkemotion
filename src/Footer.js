import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from "@mui/material/Typography"
import Grid from "@mui/material/Grid"
import { Button } from '@mui/material';

function Footer() {
    return (
        <Grid
        container
        direction="column"
        alignItems="center">
            <Grid>
                <Box sx={{ height: "50vh", backgroundColor: "lightGrey" }}>
                {/* <p>Footer</p> */}
                <Typography variant={"body1"}>Monkemotion Footer</Typography>
                </Box>
            </Grid>

            <Grid
            container
            direction="row"
            alignItems="center">
                <Grid>
                    <Button>HOME</Button>
                </Grid>

                <Grid>
                    <Button>CONTRIBUTE</Button>
                </Grid>

                <Grid>
                    <Button>RESEARCH</Button>
                </Grid>

                <Grid>
                    <Button>ABOUT</Button>
                </Grid>
            </Grid>
        </Grid>
    );
}

export default Footer;
