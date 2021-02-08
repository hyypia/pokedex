import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import './App.css';
import { Home } from './pages';
import Pokemons from './pages/Pokemons';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/pokemons" component={Pokemons} />
      </Switch>
    </Router>
  );
}

export default App;
