import React, { useState } from "react";
import { useQuery } from "react-query";
import styled from "styled-components";
import PokeballSvg from "../assets/Pokedex/pokeball.svg";
import { PokemonInitialRequest } from "../types/types";
import PokeCard from "./PokeCard";

const POKEMON_API = "https://pokeapi.co/api/v2/pokemon/?limit=10";

const Pokedex: React.FC = () => {
  const [pokemons, setPokemons] = useState<any[]>([]);
  const [result, setResult] = useState<any[]>([]);
  const [load, setLoad] = useState(true);

  const arr: PokemonInitialRequest[] = [];

  const { isLoading, error } = useQuery("pokemonData", () =>
    fetch(POKEMON_API)
      .then((response) => response.json())
      .then((data) =>
        setResult(
          data.results.map((pokemon: PokemonInitialRequest) => {
            fetch(pokemon.url)
              .then((response) => response.json())
              .then((allPokemons) => arr.push(allPokemons));
            setPokemons(arr);
          })
        )
      )
  );

  if (isLoading) {
    setTimeout(() => {
      setLoad(false);
    }, 500);
  }

  if (error) console.log(error);

  return (
    <Wrapper>
      <Title>Pokedex</Title>
      <Pokeball>
        <img src={PokeballSvg} alt="Pokeball" />
      </Pokeball>
      {load && "Loading...🔮"}
      <CardWrapper>
        {pokemons.map((pokemon, index) => (
          <PokeCard
            key={pokemon.name}
            name={pokemon.name}
            number={index}
            types={pokemon.types}
            image={pokemon.sprites.front_default}
          />
        ))}
      </CardWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  font-family: Helvetica;
  padding: 1rem;
  margin: 0 auto;
  max-width: 24.5rem;
  position: relative;
`;

const CardWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const Title = styled.h1`
  font-weight: normal;
  padding: 1.5rem 0rem;
  font-size: 30px;
  color: #303943;
`;

const Pokeball = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  z-index: -1;
`;

export default Pokedex;
