import { AppBar, Link, Toolbar, Typography } from '@mui/material';
import React from 'react';
import NavMenu from '../UI/NavMenu';




const Header = () => {

    return (
        <AppBar  position='static' >
            <Toolbar sx={{display:'flex', justifyContent:'space-between', alignItems: 'center', backgroundColor: '#0D231F', color: 'white',}} >
                <Link href='/' underline="none" >
                    <Typography variant='h6' component='span'  >
                        <img src={logoSrc} className={logo} alt='logo' loading="lazy"/>
                    </Typography>
                </Link>
                
                <NavMenu className={navMenu}/>

                <div></div>
            </Toolbar>
        </AppBar>
    );
};

export default Header;

const navMenu = 'w-min'
const logo = 'w-[100px] '
const logoSrc ="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/2560px-International_Pok%C3%A9mon_logo.svg.png"