import styled from 'styled-components';

const StyledTitle = styled.h1`
  text-align: center;
  font-weight: 700;
  text-transform: uppercase;
  color: #0099ff;
`;

export const Title = ({ children }) => {
  return <StyledTitle>{children}</StyledTitle>;
};
