import { Card,CardContent, CardMedia, Container, Divider,  Typography } from '@mui/material';
import React from 'react';


//styles
const box ='flex grow justify-center py-12'
const card ='w-1/2 self-center m-auto'

const Pokemon = () => {
    const pokemon = JSON.parse(localStorage.getItem('pokemon')?? '')

    return (
        <Container className={box}>
            
            <Card className={card}>
                
                    <CardMedia className='h-[300px]' component="img" image={pokemon.photo} alt="pok" />

                    <CardContent>
                        
                        <Typography gutterBottom variant="h3" component="div">
                            {pokemon.name}
                        </Typography>

                        <Typography variant="body2" color="text.secondary">
                            Lizards are a widespread group of squamate reptiles, with over 6,000
                            species, ranging across all continents except Antarctica
                        </Typography>

                        <Divider light />

                        <Typography gutterBottom variant="h4" component="div" className='flex items-center pt-4 m-0'>
                            <div className='text-base text-black'>Abilities: </div>
                            {pokemon.abilities.map((item) => <div className='text-sm ml-2'>{item}</div>)}
                        </Typography>

                        <Divider light />

                        <Typography gutterBottom variant="h4" component="div" className='flex items-center pt-4 m-0'>
                            <div className='text-base text-black'>Types: </div>
                            {pokemon.types.map((item) => <div className='text-sm ml-2'>{item}</div>)}
                        </Typography>
                        
                    </CardContent>
                
                </Card>
            
        </Container>
    );
};

export default Pokemon;