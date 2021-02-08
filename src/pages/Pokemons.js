import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { pokemonsSelector } from '../slices/pokemons';
import { getAllPokemons } from '../services/apiService';
import PokemonItem from '../components/pokemon-item';
import Spinner from '../components/spinner';
import ErrorIndicator from '../components/error-indicator';

const Pokemons = () => {
  const dispatch = useDispatch();
  const { pokemons, loading, hasErrors } = useSelector(pokemonsSelector);

  useEffect(() => {
    dispatch(getAllPokemons());
  }, [dispatch]);

  function renderPokemons() {
    if (loading) {
      return <Spinner />;
    }
    if (hasErrors) {
      return <ErrorIndicator />;
    }
    return pokemons.map((pokemon) => (
      <ul>
        <li key={pokemon.id}>{pokemon.name}</li>
      </ul>
    ));
  }

  return (
    <>
      <h1>Pokemons:</h1>
      {renderPokemons()}
    </>
  );
};

export default Pokemons;
