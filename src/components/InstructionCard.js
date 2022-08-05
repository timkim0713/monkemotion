import { useState } from 'react';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Grid from "@mui/material/Grid"

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


function InstructionCard() {


    const [currentLabel, setCurrentLabel] = useState("")
    const [currentX, setCurrentX] = useState("")
    const [currentY, setCurrentY] = useState("")


    function createData(name, xposition, yposition,) {
        return { name, xposition, yposition };
    }

    const rows = [
        createData('Left Eye', 159, 6.0),
        createData('Right Eye', 237, 9.0),
        createData('Center Nose', 262, 16.0),
        createData('Mouth', 356, 16.0),
        createData('Left Ear', 305, 3.7),
        createData('Right Ear', 356, 16.0),

        createData('Middle Ear', 356, 16.0),

    ];

    return (

        <Grid item xs={12} md={5}>
            <Card sx={{
                height: 425, width: "100%", overflow: 'auto'
            }}>
                < CardContent >
                    <Typography variant='body1' sx={{ m: 1 }}>Data Values</Typography>

                    <TableContainer component={Paper}>
                        <Table stickyHeader aria-label="simple table"

                            size="small"
                        >
                            <TableHead>
                                <TableRow>
                                    <TableCell>Label</TableCell>
                                    <TableCell align="right">x-position</TableCell>
                                    <TableCell align="right">y-position</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {rows.map((row) => (
                                    <TableRow

                                        key={row.name}
                                        sx={{
                                            '&:last-child td, &:last-child th': { border: 0 },
                                            backgroundColor: currentLabel == row.name ? "#4b6587" : "white",
                                            height: currentLabel === row.name ? 70 : 50,
                                            transition: "200ms"

                                        }}

                                    >
                                        <TableCell component="th" scope="row">
                                            <Button variant={row.name === currentLabel ? 'contained' : 'outlined'} size="small" color={row.name === currentLabel ? 'secondary' : 'primary'} onClick={() => { setCurrentLabel(row.name) }}>
                                                <Typography variant='subtitle2' color='primary' >{row.name}</Typography>
                                            </Button>
                                        </TableCell>
                                        <TableCell align="right"><Typography color={row.name === currentLabel ? 'secondary' : 'primary'} sx={{ fontWeight: row.name === currentLabel ? 'bold' : '400' }}>{row.xposition}</Typography></TableCell>
                                        <TableCell align="right"><Typography color={row.name === currentLabel ? 'secondary' : 'primary'} sx={{ fontWeight: row.name === currentLabel ? 'bold' : '400' }}>{row.yposition}</Typography></TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>

                </CardContent>
            </Card >
        </Grid >

    );
}

export default InstructionCard;
