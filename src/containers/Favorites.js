import React from 'react'
import { usePokemon } from '../PokemonContext'

export default function Favorites() {
  const { pokemonState } = usePokemon();
  console.log('Favorites', pokemonState);
  return (
    <div>
      Favorites
    </div>
  )
}
