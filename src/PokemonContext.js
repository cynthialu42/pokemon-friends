import React, { useContext, useReducer } from "react";

export const PokemonContext = React.createContext();
export function usePokemon() {
  return useContext(PokemonContext);
}

export const ACTIONS = {
  GET_POKEMON: "get-pokemon",
  GET_POKEMON_SUCCESS: "get-pokemon-success",
  GET_POKEMON_ERROR: "get-pokemon-error",
};

const reducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.GET_POKEMON: {
      return { ...state, loading: true, pokemon: {} };
    }
    case ACTIONS.GET_POKEMON_SUCCESS: {
      return { ...state, loading: false, pokemon: action.data };
    }
    case ACTIONS.GET_POKEMON_ERROR: {
      return { ...state, loading: false, error: action.error, pokemon: {} };
    }
    default:
      return state;
  }
};

export default function PokemonProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, {
    pokemon: {},
    loading: true,
    error: null,
  });

  const providerObj = {
    pokemonState: state, 
    pokemonDispatch: dispatch,
  }
  return (
    <PokemonContext.Provider
      value={providerObj}
    >
      {children}
    </PokemonContext.Provider>
  );
}
