import { useState, useRef, useEffect } from 'react';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Grid from "@mui/material/Grid"
import Box from "@mui/material/Box"


import {
    useRecoilState,
} from 'recoil';
import { currentLabelRecoil, currentXRecoil, currentYRecoil, currentImageRecoil, dataRecoil } from "../recoil/recoil"



function TagCard() {


    const imageRef = useRef()
    const [currentImage, setCurrentImage] = useRecoilState(currentImageRecoil)



    const [currentLabel, setCurrentLabel] = useRecoilState(currentLabelRecoil)
    const [currentX, setCurrentX] = useRecoilState(currentXRecoil)
    const [currentY, setCurrentY] = useRecoilState(currentYRecoil)


    const [data, setData] = useRecoilState(dataRecoil)
    const [isDataReady, setIsDataReady] = useState(false)



    useEffect(() => {
        for (let [key] of Object.entries(data)) {
            if (data[key].x == 0 && data[key].y == 0) {
                setIsDataReady(false)
                return
            }
        }
        setIsDataReady(true)
    }, [data])



    function generateNewImage() {
        const newImage = `https://picsum.photos/400/${Math.floor(Math.random() * 100 + 400)}`
        setCurrentImage(newImage)
    }


    const imageClick = (e) => {
        var offset = imageRef.current.getBoundingClientRect();
        var x = Math.floor((e.pageX - offset.left) / offset.width * 10000) / 100;
        var y = Math.floor((e.pageY - offset.top) / offset.height * 10000) / 100;
        console.log(currentLabel, x, y);

        setCurrentX(x)
        setCurrentY(y)

        const updatedCurrentLabel = { x: String(x), y: String(y) }
        console.log(data)

        setData({ ...data, [currentLabel]: updatedCurrentLabel })

    }

    return (

        <Grid item xs={12} md={7}>
            <Card sx={{ height: 425, width: "100%", }}>

                <CardContent sx={{ textAlign: "center" }}>
                    <Typography variant='body1' sx={{ m: 1 }}>Label</Typography>
                    <img alt="img" onClick={imageClick} ref={imageRef} src={currentImage} style={{ borderRadius: "10px", cursor: "pointer", maxHeight: 325 }}></img>
                </CardContent>

            </Card>
            <Box display={"flex"} justifyContent={"flex-end"} sx={{ mr: -1, mt: 1 }}>
                <CardActions>
                    <Button variant='outlined' size="small" onClick={() => { generateNewImage() }}>Generate New Image</Button>
                    <Button variant='outlined' size="small" disabled={!isDataReady} >Submit Data</Button>
                </CardActions>
            </Box>
        </Grid>

    );
}

export default TagCard;
