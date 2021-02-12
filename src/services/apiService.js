import {
  getPokemons,
  getPokemonsSuccess,
  getPokemonsFailure,
  setTotal,
} from '../slices/pokemons';

const _apiBase = 'https://pokeapi.co/api/v2';

const fetchPokemons = (url) => {
  return async (dispatch) => {
    dispatch(getPokemons());

    try {
      const res = await fetch(`${_apiBase}${url}`);

      if (!res.ok) {
        throw Error(`Could not fetch ${url}, received ${res.status}`);
      }

      const data = await res.json();

      console.log(data);

      dispatch(setTotal(data.count));

      dispatch(getPokemonsSuccess(data.results));
    } catch (err) {
      dispatch(getPokemonsFailure());
    }
  };
};

export function getAllPokemons(index) {
  const limit = 10;
  return fetchPokemons(`/pokemon?limit=${limit}&offset=${index * limit}`);
}

export function getPokemon(id) {
  return fetchPokemons(`/pokemon/${id}`);
}
