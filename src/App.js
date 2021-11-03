import React, { useEffect, useReducer } from 'react';
import { Route, Link, Switch, Redirect } from 'react-router-dom';
import Home from './containers/Home';
import Favorites from './containers/Favorites';
import Header from './components/Header';
import PokemonProvider from './PokemonContext';
import { usePokemon } from './PokemonContext';

function App() {
  // const [id, setId] = useState(1);
  // const { pokemonDispatch, setId } = usePokemon();
  useEffect(() => {

  }, [])
  return (
    <PokemonProvider>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/favorites" component={Favorites} />
        <Redirect to="/" />
      </Switch>
    </PokemonProvider>
  );
}

export default App;
