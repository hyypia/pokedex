import React from 'react';

const PokemonItem = ({ pokemon }) => {
  return (
    <div>
      <h2>{pokemon.pokemon.name}</h2>
    </div>
  );
};

export default PokemonItem;
