import { Divider, Typography, Box } from '@mui/material';

export default function MainCarousel({ title, date, author, content, topImg, bottomImg }) {

    return (
        <>

            <Typography variant="h4">
                {title}
            </Typography>


            <Box display="flex" flexDirection="row" m={2} ml={0}>
                <Typography variant="subtitle1" color="#737373" mr={1}>
                    {author}
                </Typography>
                <Typography variant="subtitle1" color="#bdbdbd">
                    {date}
                </Typography>
            </Box>
            <Divider sx={{ m: 2, ml: 0 }} />
            <Box>
                <Box sx={{ textAlign: "center", m: 5 }}>
                    <img src={topImg} style={{ borderRadius: "10px" }} />
                </Box>
                <Typography variant="body1" color="#404040" sx={{ lineHeight: 2 }}>
                    {content}
                </Typography>
                <Box sx={{ textAlign: "center", m: 5 }}>
                    <img src={bottomImg} style={{ borderRadius: "10px" }} />
                </Box>
            </Box>
        </>
    );
};


