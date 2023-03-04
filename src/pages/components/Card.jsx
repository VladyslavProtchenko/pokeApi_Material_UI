import { LoadingButton } from '@mui/lab';
import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Typography } from '@mui/material';
import React from 'react';
import { useDispatch} from 'react-redux';
import { useGetOnePokemonQuery } from '../../redux/pokemonApi';
import { pokemonInfo } from '../../redux/pokemonSlice';

const CardItem = ({item}) => {

    const pokemonId = item.url.slice(34,-1)
    const {data, isLoading } = useGetOnePokemonQuery(pokemonId)
    const dispatch = useDispatch()

    function showInfo(data){ dispatch(pokemonInfo(data)) }

    if(isLoading) return ( <LoadingButton loading variant="outlined" disabled></LoadingButton> )

    return (
        <Card sx={{ maxWidth: 345 }} onClick={()=>showInfo(data)}>
            <CardActionArea>
                <CardMedia
                component="img"
                height="140"
                image={data.sprites.front_default}
                alt="green iguana"
                />

                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {data.name.capitalize()}
                    </Typography>
                </CardContent>
            </CardActionArea>

            <CardActions>
                <Button   variant="text" sx={{fontSize:'10px', color:'black'}}>
                click card
                </Button>
            </CardActions>
        </Card>
    );
};

export default CardItem;

Object.defineProperty(String.prototype, 'capitalize', {
    value: function() {
    return this.charAt(0).toUpperCase() + this.slice(1);
    },
    enumerable: false
});