import { createSlice } from "@reduxjs/toolkit";


const pokemonSlice = createSlice({
    name: 'pokemon',
    initialState: {
    },
    reducers: {
        pokemonInfo(state,action){
            
            if(action.payload.name) {
                state.photo = action.payload.sprites.front_default
                state.name = action.payload.name.capitalize()
                state.abilities = action.payload.abilities.map(item =>item.ability.name)
                state.types = action.payload.types.map(item =>item.type.name)
            } else {
                state.photo = null
                state.name = null
                state.abilities = null
                state.types = null
            }
        },
    }
})

export const { pokemonInfo } = pokemonSlice.actions;
export default pokemonSlice.reducer;