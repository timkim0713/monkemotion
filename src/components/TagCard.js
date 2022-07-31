import { useState } from 'react';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Grid from "@mui/material/Grid"
import Box from "@mui/material/Box"
function TagCard() {


    const [currentImage, setCurrentImage] = useState("https://picsum.photos/400/300")
    const [data, setData] = useState({})


    function generateNewImage() {
        const newImage = `https://picsum.photos/400/${Math.floor(Math.random() * 100 + 400)}`
        setCurrentImage(newImage)
    }

    return (

        <Grid item xs={12} md={7}>
            <Card sx={{ height: 425, width: "100%", }}>

                <CardContent sx={{ textAlign: "center" }}>
                    <Typography variant='body1' sx={{ m: 1 }}>Label</Typography>
                    <img src={currentImage} style={{ borderRadius: "10px" }}></img>
                </CardContent>

            </Card>
            <Box display={"flex"} justifyContent={"flex-end"} sx={{ mr: -1, mt: 1 }}>
                <CardActions>
                    <Button variant='outlined' size="small" onClick={() => { generateNewImage() }}>Generate New Image</Button>
                    <Button variant='outlined' size="small">Submit Data</Button>
                </CardActions>
            </Box>
        </Grid>

    );
}

export default TagCard;
