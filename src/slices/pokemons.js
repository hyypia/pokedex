import { createSlice } from '@reduxjs/toolkit';

export const initialState = {
  loading: false,
  hasErrors: false,
  pokemons: [],
};

const pokemonsSlice = createSlice({
  name: 'pokemons',
  initialState,
  reducers: {
    getPokemons: (state) => {
      state.loading = true;
    },
    getPokemonsSuccess: (state, action) => {
      state.pokemons = action.payload;
      state.loading = false;
      state.hasErrors = false;
    },
    getPokemonsFailure: (state) => {
      state.loading = false;
      state.hasErrors = true;
    },
  },
});

export const {
  getPokemons,
  getPokemonsSuccess,
  getPokemonsFailure,
} = pokemonsSlice.actions;
export const pokemonsSelector = (state) => state.pokemons;
export default pokemonsSlice.reducer;
