import styled from 'styled-components';

const StyledPokemonList = styled.li`
  list-style: none;
`;

export const PokemonsList = (props) => {
  return <StyledPokemonList {...props} />;
};
