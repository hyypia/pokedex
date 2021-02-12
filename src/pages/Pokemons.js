import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { setCurrentPage, pokemonsSelector } from '../slices/pokemons';
import { getAllPokemons } from '../services/apiService';
import PokemonItem from '../components/pokemon-item';
import Spinner from '../components/spinner';
import ErrorIndicator from '../components/error-indicator';
import { Title } from '../components/title/Title';
import { PokemonsList } from '../components/pokemons-list/PokemonsList';
import { PageCounter } from '../components/page-counter/PageCounter';
import { Flex } from '../components/flex/Flex';

const Pokemons = () => {
  const dispatch = useDispatch();
  const {
    pokemons,
    loading,
    hasErrors,
    limit,
    totalPokemonsCount,
    currentPage,
  } = useSelector(pokemonsSelector);
  const pagesCount = Math.ceil(totalPokemonsCount / limit);
  const pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }

  useEffect(() => {
    const pageIndex = currentPage - 1;
    dispatch(getAllPokemons(pageIndex));
  }, [dispatch, currentPage]);

  function renderPokemons() {
    if (loading) {
      return <Spinner />;
    }
    if (hasErrors) {
      return <ErrorIndicator />;
    }
    return (
      <div>
        <Flex justify="center" margin="10px">
          {pages.map((page, index) => {
            return (
              <PageCounter
                key={index}
                selected={currentPage === page && true}
                onClick={() => dispatch(setCurrentPage(page))}
              >
                {page}
              </PageCounter>
            );
          })}
        </Flex>
        <ul>
          {pokemons.map((pokemon) => (
            <PokemonsList key={pokemon.name}>
              <PokemonItem pokemon={pokemon} />
            </PokemonsList>
          ))}
        </ul>
      </div>
    );
  }

  return (
    <>
      <Title>Pokemons:</Title>
      {renderPokemons()}
    </>
  );
};

export default Pokemons;
