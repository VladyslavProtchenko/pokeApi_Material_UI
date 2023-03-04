import { CircularProgress, Container, Grid, Pagination, Stack, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import { useGetPokemonQuery } from '../redux/pokemonApi';
import CardItem from './components/Card';
import { Box } from '@mui/system';
import { useSelector, useDispatch } from 'react-redux';
import { pokemonInfo } from '../redux/pokemonSlice';
import SideInfo from './components/SideInfo';
import Searching from './UI/Searching';


const Pokemons = () => {
    const [show, setShow] = useState(false);
    const [search, setSearch] = useState('');
    const [page, setPage] = useState(1);

    const {data, isLoading } = useGetPokemonQuery(page-1);
    
    const [pageCount, setPageCount] = useState(null);

    if(pageCount === null && data) setPageCount(Math.ceil(data.count/12))

    const dispatch = useDispatch()
    const pokemon = useSelector(state => state.pokemon)
    
    if(pokemon.name && !show) {setShow(true)}

    function closeInfo() {
        setShow(false)
        dispatch(pokemonInfo({}))
    }

    if(isLoading) return <div className='flex w-screen h-screen justify-center items-center'><CircularProgress color="secondary" /></div>
    return (
        <Box className={box}>
            <Grid container spacing={1} className={gridContainer} >
                <Grid container item spacing={1} className={header} >
                    <Typography variant='h2'  sx={{padding:'24px'}}>Pokemons</Typography>    
                </Grid>

                <Grid container item className={searchField} >
                    <Searching search={search} setSearch={setSearch}/>
                </Grid>
                
                <SideInfo pokemon={pokemon} show={show} closeInfo={closeInfo}/>

                <Grid container item spacing={1} className={grid} >
                    {data.results && 
                        data.results.filter(item=>item.name.includes(search)).map(item=> 
                            <Grid item xs={4} md={4} key={item.url}><CardItem item={item}/></Grid>
                    )}
                </Grid>

            </Grid>

            <Container className='mt-auto'>
                <Stack spacing={2}>
                    <Pagination sx={{margin:"10px auto"}} count={pageCount} color="secondary" page={page} onChange={(_,num)=>setPage(num)}/>
                </Stack>
            </Container>
        </Box>
    );
};

export default Pokemons;

//styles
const grid = 'max-w-5xl flex justify-center '
const box = 'w-screen min-h-screen bg-[#F0F1E6] flex flex-col justify-start'
const header ='max-w-5xl flex-col flex justify-center h-min'
const searchField ='max-w-5xl  h-min'
const gridContainer = 'py-6  bg-[#F0F1E6] flex  justify-center h-min'