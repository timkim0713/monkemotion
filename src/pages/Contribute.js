import * as React from 'react';
import Box from '@mui/material/Box';
import Heading from '../components/Heading';
import CollaborateCard from "../components/CollaborateCard"

function Contribute() {
    return (
        <Box>
            <Heading title={"Contribute"} content={"This is contribute page"} />
            <CollaborateCard />
        </Box>
    );
}

export default Contribute;
