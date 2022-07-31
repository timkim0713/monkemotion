import * as React from 'react';
import Grid from '@mui/material/Grid';
import MainCard from '../components/MainCard';
import { Card, CardContent, Typography } from '@mui/material';
import Box from "@mui/material/Box"
import TagCard from "../components/TagCard"
import InstructionCard from "../components/InstructionCard"

function CollaborateCard() {
    return (
        <>
       <TagCard />
       <InstructionCard />
       </>
    );
}

export default CollaborateCard;