import * as actions from '../actions/actionTypes';

export const initialState = {
  pokemons: [],
  loading: false,
  hasErrors: false,
};

export default function pokemonReducer(state = initialState, action) {
  switch (action.type) {
    case actions.GET_POKEMONS:
      return {
        ...state,
        loading: true,
        hasErrors: false,
      };
    case actions.GET_POKEMONS_SUCCESS:
      return {
        pokemons: action.payload,
        loading: false,
        hasErrors: false,
      };
    case actions.GET_POKEMONS_FAILURE:
      return {
        ...state,
        loading: false,
        hasErrors: true,
      };
    default:
      return state;
  }
}
