import * as React from 'react';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';

function MainCard() {
    return (
        <Card >
            <CardMedia
                component="img"
                width="50"
                image="http://images5.fanpop.com/image/photos/31600000/Letter-S-pink-the-letter-s-31612055-203-250.jpg"
                alt="green iguana"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    Red S
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    AAAA
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small">Share</Button>
                <Button size="small">Learn More</Button>
            </CardActions>
        </Card>
    );
}

export default MainCard;
