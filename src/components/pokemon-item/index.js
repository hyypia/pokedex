import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledPokemonItem = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 5px 0;
  border-bottom: 1px solid #0099ff;

  img {
    width: 30px;
    height: 30px;
    border-radius: 50%;
  }

  p {
    margin-right: 450px;
    font-weight: 100;
    color: #000;
  }

  button {
    margin: 0;
    padding: 5px 12px;
    height: 20px;
    width: 150px;
    cursor: pointer;
    text-transform: uppercase;
    background-color: transparent;
    border: none;
    color: #0099ff;
    font-weight: 100;

    &:focus {
      outline: none;
    }
  }
`;

const PokemonItem = ({ pokemon, id }) => {
  const { name, url } = pokemon;
  return (
    <StyledPokemonItem key={id}>
      <img src="" alt={`${name}_picture`} />
      <p>{name}</p>
      <button as={Link} to={`/Pokemons/${name}`}>
        Explore
      </button>
    </StyledPokemonItem>
  );
};

export default PokemonItem;
