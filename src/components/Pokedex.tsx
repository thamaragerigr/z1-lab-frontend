import React, { useState } from 'react'
import { useQuery } from 'react-query'
import styled from 'styled-components'
import PokeCard from './PokeCard'

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  font-family: Helvetica;
`;

const Pokedex:React.FC = () => {
    const [pokemons, setPokemons] = useState<any[]>([])
    const [isLoading, setIsLoading] = useState(true)

    useQuery('repoData', () => 
      fetch('https://pokeapi.co/api/v2/pokemon/?limit=10')
      .then(res => res.json())
      .then(res => {
        setPokemons(res.results)
        setIsLoading(false)
      }).catch(error => console.log(error))
    )
    
    return(
        <div>
        <Title>
            Pokedex
        </Title>
        {isLoading && "Loading..."}
        {pokemons.map(pokemon => (
            <PokeCard 
            key={pokemon.name}
            name={pokemon.name} 
            number={2} 
            abilities={["namehere", "woah"]} 
            image={pokemon.url} 
          />
        ))}
    </div>
    )
}

export default Pokedex