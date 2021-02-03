import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from 'react-router-dom';

import './App.css';
import { Home } from './pages';
import Pokemons from './pages/Pokemons';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/pokemons" component={Pokemons} />
        <Redirect to="/" />
      </Switch>
    </Router>
  );
}

export default App;
