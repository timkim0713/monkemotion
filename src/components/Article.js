import { Divider, Typography, Box } from '@mui/material';

export default function MainCarousel({ title, date, author, content }) {

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
                <Typography variant="body1" color="#404040" sx={{ lineHeight: 2 }}>
                    {content}
                </Typography>
            </Box>
        </>
    );
};


