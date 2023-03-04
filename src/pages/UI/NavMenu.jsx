import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';

const pages = ['home', 'pokemons', 'info'];

const NavMenu = () => {

    const [anchorElNav, setAnchorElNav] = useState(null);

    const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
    };
    
    const handleCloseNavMenu = () => {
    setAnchorElNav(null);
    };

    

    return (
    <>
        <Box sx={{  display: { xs: 'none', md: 'none' } }}>
        
            <IconButton
            size="large"
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleOpenNavMenu}
            color="inherit"
            >
            <MenuIcon />
            </IconButton>
            <Menu
            id="menu-appbar"
            anchorEl={anchorElNav}
            anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
            }}
            keepMounted
            transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
            }}
            open={Boolean(anchorElNav)}
            onClose={handleCloseNavMenu}
            sx={{
                display: { xs: 'block', md: 'none' },
            }}
            >
            {pages.map((page) => (
                <NavLink to={page==='home'?'/':page} underline="none">
                    <MenuItem key={page} onClick={handleCloseNavMenu}>
                        {page}
                    </MenuItem>
                </NavLink>
            ))}
            </Menu>
        </Box>
        
        <Box sx={{  display: { xs: 'flex', md: 'flex' } }}>
            {pages.map((page) => (
            <NavLink to={page==='home'?'/':page} underline="none">
                <Button
                    key={page}
                    onClick={handleCloseNavMenu}
                    sx={{ my: 2, color: 'white', display: 'block' }}
                >
                    {page}
                </Button>
            </NavLink>
            ))}
        </Box>
    </>
    );
};

export default NavMenu;