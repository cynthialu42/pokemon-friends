import React, { useEffect, useState } from 'react'
import { usePokemon, ACTIONS } from '../PokemonContext';
import axios from 'axios';

export default function Home() {
  const [id, setId] = useState(1);
  const { pokemonDispatch, pokemonState } = usePokemon();

  

  useEffect(() => {
    console.log('before get pokemon');
    pokemonDispatch({ type: ACTIONS.GET_POKEMON });
    const fetchPokemon = async (id) => {
      const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
      if (response.status === 200) {
        console.log('before success')
        pokemonDispatch({ type: ACTIONS.GET_POKEMON_SUCCESS, data: response.data });
      } else {
        pokemonDispatch({ type: ACTIONS.GET_POKEMON_ERROR, error: "Error" });
      }
    };
    fetchPokemon(id);
  }, [id, pokemonDispatch]);

  console.log(pokemonState);
  return (
    <div>
      <input value={id} type="number" onChange={e => setId(e.target.value)} />
    </div>
  )
}
