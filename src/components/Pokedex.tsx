import React, { useState } from "react";
import { useQuery } from "react-query";
import { ReactQueryDevtools } from "react-query-devtools";
import styled from "styled-components";
import PokeCard from "./PokeCard";
import PokeballSvg from "./pokeball.svg";

const POKEMON_API = "https://pokeapi.co/api/v2/pokemon/?limit=10";

const Wrapper = styled.div`
  font-family: Helvetica;
  padding: 1rem;
  margin: 0 auto;
  max-width: 23.5rem;
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
`;

const Pokeball = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  z-index: -1;
`;

const Pokedex: React.FC = () => {
  const [pokemons, setPokemons] = useState<any[]>([]);
  const [result, setResult] = useState<any[]>([]);
  const [load, setLoad] = useState(true);

  const arr: any[] = [];

  const { isLoading, error } = useQuery("pokemonData", () =>
    fetch(POKEMON_API)
      .then((response) => response.json())
      .then((data) =>
        setResult(
          data.results.map((item: { name: string; url: string }) => {
            fetch(item.url)
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
    }, 1000);
  }

  if (error) console.log(error);

  return (
    <Wrapper>
      <Title>Pokedex</Title>
      <Pokeball>
        <img src={PokeballSvg} alt="Pokeball" />
      </Pokeball>
      {load && "Loading..."}
      <CardWrapper>
        {pokemons.map((pokemon) => (
          <PokeCard key={pokemon.name} pokemonDetails={{ pokemon }} />
        ))}
      </CardWrapper>
    </Wrapper>
  );
};

export default Pokedex;
