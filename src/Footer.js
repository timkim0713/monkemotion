import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from "@mui/material/Typography"
function Footer() {
    return (
        <Box sx={{ height: "50vh", backgroundColor: "lightGrey" }}>
            {/* <p>Footer</p> */}
            <Typography variant={"body1"}>Monkemotion Footer</Typography>
        </Box>
    );
}

export default Footer;
