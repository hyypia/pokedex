import { createSlice } from '@reduxjs/toolkit';

export const initialState = {
  loading: false,
  hasErrors: false,
  pokemons: [],
  limit: 10,
  total: 51,
  currentPage: 1,
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
      state.total = action.payload.count;
      state.loading = false;
      state.hasErrors = false;
    },
    getPokemonsFailure: (state) => {
      state.loading = false;
      state.hasErrors = true;
    },
    setCurrentPage: (state, action) => {
      state.pokemons = action.payload;
      state.currentPage = action.payload;
      state.loading = false;
      state.hasErrors = false;
    },
    setTotal: (state, action) => {
      state.pokemons = action.payload;
      state.currentPage = action.payload;
      state.total = action.payload;
      state.loading = false;
      state.hasErrors = false;
    },
  },
});

export const {
  getPokemons,
  getPokemonsSuccess,
  getPokemonsFailure,
  setCurrentPage,
  setTotal,
} = pokemonsSlice.actions;
export const pokemonsSelector = (state) => state.pokemons;
export default pokemonsSlice.reducer;
