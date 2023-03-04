import { Button, Card, CardActionArea, CardContent, CardMedia, Divider, Drawer, ListItemText, Typography } from '@mui/material';
import React from 'react';
import { NavLink } from 'react-router-dom';

const SideInfo = ({pokemon,show,closeInfo }) => {
    localStorage.setItem('pokemon', JSON.stringify(pokemon))

    return (
        <Drawer anchor="right" open={show} onClose={closeInfo} >
            
            <Button 
                onClick={closeInfo}  
                variant="text" 
                sx={{fontSize:'10px', color:'black',margin:'20px', marginRight:'auto'}}
            > close 
            </Button>

            {pokemon.name &&
                <NavLink to='/pokemon'>
                    <Card sx={{ width: '400px', margin: '0 20px'}} >

                        <CardActionArea>
                            <CardMedia
                            component="img"
                            height="140"
                            image={pokemon.photo}
                            alt="green iguana"
                            />
                            <CardContent>

                            <Typography gutterBottom variant="h5" component="div">
                                {pokemon.name}
                            </Typography>

                            <Divider light />

                            <Typography gutterBottom variant="h4" component="div">
                                <ListItemText primary="Abilities:" sx={{textAlign: 'center'}}/>
                                {pokemon.abilities.map((item) => <ListItemText primary={item} size="small"/>)}
                            </Typography>

                            <Divider light />

                            <Typography gutterBottom variant="h4" component="div">
                                <ListItemText primary="Types:" sx={{textAlign: 'center'}}/>
                                {pokemon.types.map((item) => <ListItemText primary={item} size="small"/>)}
                            </Typography>

                            </CardContent>
                        </CardActionArea>
                    </Card>
                </NavLink>
            }
            </Drawer>
    );
};

export default SideInfo;