import React, { useState } from 'react'
import { useQuery } from 'react-query'
import styled from 'styled-components'
import PokeCard from './PokeCard'

const Wrapper = styled.div`
    padding: 1rem 1.6rem;
    font-family: Helvetica;
    margin: auto;
`;

const CardWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
`;

const Title = styled.h1`
    font-weight: normal;
    padding: 1.5rem 0rem;
    font-size: 30px;
`;

const Pokedex:React.FC = () => {
    const [pokemons, setPokemons] = useState<any[]>([])
    // const [isLoading, setIsLoading] = useState(true)

    const { isLoading, error } = useQuery('pokemonData', () => 
      fetch('https://pokeapi.co/api/v2/pokemon/?limit=10')
      .then(res => res.json())
      .then(data => {
        setPokemons(data.results)
        // setIsLoading(false)
      })
    )

    if (isLoading) return (
       <div> 
         'Loading...' 
       </div>
    )

    if (error) console.log(error)
    
    return(
        <Wrapper>
        <Title>
            Pokedex
        </Title>
        <CardWrapper>
            {pokemons.map(pokemon => (
                <PokeCard 
                key={pokemon.name}
                name={pokemon.name} 
                number={2} 
                abilities={["namehere", "woah"]} 
                image={pokemon.url} 
            />
            ))}
        </CardWrapper>
    </Wrapper>
    )
}

export default Pokedex

// useQuery('repoData', () => 
// fetch('https://pokeapi.co/api/v2/pokemon/?limit=10')
// .then(res => res.json())
// .then(data => {
//   setResult(
//       data.results.map((i: any) => {
//           fetch(i.url)
//           .then((res) => res.json())
//           .then((allpokemons) => arr.push(allpokemons))
//           setPokemons(arr)
//           console.log(pokemons)
//           setIsLoading(false)
//       })
//   )
//   setIsLoading(false)
// })
// )

// if (isLoading) return (
//  <div> 
//    'Loading...' 
//  </div>
// )