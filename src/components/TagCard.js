import * as React from 'react';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Grid from "@mui/material/Grid"
import Box from "@mui/material/Box"
function TagCard() {
    return (

        <Grid item xs={12} md={8}>
            <Card sx={{ height: 425, width: "100%", }}>
                {/* <CardMedia
                    component="img"
                    height="140"
                    image="https://picsum.photos/seed/picsum/200/300"
                    alt="green iguana"
                /> */}
                <CardContent sx={{ textAlign: "center" }}>
                    <Typography variant='body1' sx={{ m: 1 }}>Label</Typography>
                    <img src="https://picsum.photos/seed/picsum/500/300" style={{ borderRadius: "10px" }}></img>
                </CardContent>

            </Card>
            <Box display={"flex"} justifyContent={"flex-end"} sx={{ mr: -1, mt: 1 }}>
                <CardActions>
                    <Button variant='outlined' size="small">Generate New Image</Button>
                    <Button variant='outlined' size="small">Submit Data</Button>
                </CardActions>
            </Box>
        </Grid>

    );
}

export default TagCard;
