import {
  GET_POKEMONS,
  GET_POKEMONS_SUCCESS,
  GET_POKEMONS_FAILURE,
} from './actionTypes';

const getPokemons = () => ({
  type: GET_POKEMONS,
});

const getPokemonsSuccess = (pokemons) => ({
  type: GET_POKEMONS_SUCCESS,
  payload: pokemons,
});

const getPokemonsFailure = () => ({
  type: GET_POKEMONS_FAILURE,
});

function fetchPokemons() {
  return async (dispatch) => {
    dispatch(getPokemons());

    try {
      const res = await fetch('https://pokeapi.co/api/v2/pokemon?limit=151');
      const data = await res.json();

      console.log(data);
      dispatch(getPokemonsSuccess(data));
    } catch (err) {
      dispatch(getPokemonsFailure());
    }
  };
}

export { getPokemons, getPokemonsSuccess, getPokemonsFailure, fetchPokemons };
