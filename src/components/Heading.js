import * as React from 'react';
import Typography from '@mui/material/Typography';
import Box from "@mui/material/Box"
function Heading({ title, content }) {
    return (

        <Box sx={{ mt: 15, mb: 10 }}>
            <Typography variant={"h3"}>
                {title}
            </Typography>
            <Typography variant={"subtitle1"}>
                {content}
            </Typography>
        </Box>

    );
}

export default Heading;
