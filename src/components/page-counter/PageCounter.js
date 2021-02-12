import styled from 'styled-components';

const StyledPageCounter = styled.span`
  margin: 0 5px;
  padding: 0 6px;
  border: 1px solid;
  border-color: ${({ selected }) => (selected ? 'red' : '#0099ff')};
  border-radius: 50%;
  font-weight: ${({ selected }) => (selected ? '700' : '100')};
  cursor: pointer;
`;

export const PageCounter = (props) => {
  return <StyledPageCounter {...props} />;
};
