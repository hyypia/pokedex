import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { fetchPokemons } from '../actions';
import PokemonItem from '../components/pokemon-item';
import Spinner from '../components/spinner';
import ErrorIndicator from '../components/error-indicator';

const Pokemons = ({ dispatch, pokemons, loading, hasErrors }) => {
  useEffect(() => {
    dispatch(fetchPokemons());
  }, [dispatch]);

  const renderPokemons = () => {
    if (loading) {
      return <Spinner />;
    }
    if (hasErrors) {
      return <ErrorIndicator />;
    }
    return pokemons.map((pokemon) => (
      <PokemonItem key={pokemon.id} pokemon={pokemon} />
    ));
  };

  return (
    <>
      <h1>Pokemons:</h1>
      {renderPokemons}
    </>
  );
};

const mapStateToProps = (state) => ({
  pokemons: state.pokemons.pokemons,
  loading: state.pokemons.loading,
  hasErrors: state.pokemons.hasErrors,
});

export default connect(mapStateToProps)(Pokemons);
