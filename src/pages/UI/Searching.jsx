import { TextField } from '@mui/material';
import React from 'react';

const Searching = ({search, setSearch}) => {
    return (
        <TextField
            sx={{marginLeft: '12px'}}  
            type='text'
            label='search' 
            variant="standard"
            value={search}
            onChange={(e)=>setSearch(e.target.value)}
        />
    );
};

export default Searching;