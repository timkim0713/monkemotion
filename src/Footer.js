import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from "@mui/material/Typography"
import Grid from "@mui/material/Grid"
import { Button } from '@mui/material';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { Link } from "react-router-dom";

function Footer() {

    const navItems = ['Home', 'Contribute', 'Research', 'About'];
    const navItemsPath = ['', 'contribute', 'research', 'about'];


    return (
        <Grid
            container
            direction="row"
            justifyContent="center"
            sx={{ height: "40vh", backgroundColor: "lightGrey", paddingTop: 10 }}
        >
            <Typography variant={"body1"}>Monkemotion Footer</Typography>
            <Grid container direction="row" justifyContent={"center"}>

                {navItems.map((item, idx) => (
                    <Link to={navItemsPath[idx]} style={{ textDecoration: 'none' }}>
                        <ListItemButton>{item}
                        </ListItemButton>
                    </Link>

                ))}
            </Grid>

        </Grid >
    );
}

export default Footer;
