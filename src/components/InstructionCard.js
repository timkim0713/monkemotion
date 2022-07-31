import * as React from 'react';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Grid from "@mui/material/Grid"
function InstructionCard() {
    return (

        <Grid item xs={12} md={4}>
            <Card sx={{ height: 425, width: "100%", }}>
                <CardContent>
                    <Typography variant='h4'>Label</Typography>
                    <Typography variant='body1'>
                        Content
                    </Typography>

                </CardContent>
            </Card>
        </Grid>

    );
}

export default InstructionCard;
