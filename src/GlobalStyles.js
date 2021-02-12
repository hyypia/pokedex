import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Nunito Sans', sans-serif;
}
`;

export const Header = styled.div`
  position: relative;
  background: linear-gradient(
      to bottom,
      rgba(255, 255, 255, 0),
      rgba(255, 255, 255, 1)
    ),
    url('http://factsd.com/wp-content/uploads/2018/10/pokemon-feat-image.jpg');
  background-size: cover;
  background-position: top;
  background-repeat: no-repeat;
  width: 100%;
  min-height: 250px;
`;

export const Container = styled.div`
  margin: 0 60px;
`;
