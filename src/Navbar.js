import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

function Navbar() {
    return (
        <AppBar position="static">
            <Toolbar>
                <IconButton
                    size="large"
                    edge="start"
                    color="inherit"
                    aria-label="menu"
                    sx={{ mr: 2 }}
                >
                    <MenuIcon />
                </IconButton>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    Monkemotion
                </Typography>
                <Box display={"flex"} justifyContent={"space-around"} sx={{ width: "27%" }}>
                    <Button color="inherit">Home</Button>
                    <Button color="inherit">Contribute</Button>
                    <Button color="inherit">Research</Button>
                    <Button color="inherit">About</Button>
                </Box>
            </Toolbar>
        </AppBar>

    );
}

export default Navbar;
