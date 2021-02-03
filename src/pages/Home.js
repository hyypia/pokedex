import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <section>
      <h1>Hello! This is your Pokedex! Let's try catch Pokemon!</h1>
      <p>This is Home Page</p>

      <Link to="/pokemons" className="button">
        Catch!
      </Link>
    </section>
  );
};

export default Home;
