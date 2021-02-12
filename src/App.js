import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { GlobalStyle, Header, Container } from './GlobalStyles';
import { Home } from './pages';
import Pokemons from './pages/Pokemons';

function App() {
  return (
    <>
      <GlobalStyle />
      <Header />

      <Router>
        <Switch>
          <Container>
            <Route exact path="/" component={Home} />
            <Route exact path="/pokemons" component={Pokemons} />
          </Container>
        </Switch>
      </Router>
    </>
  );
}

export default App;
