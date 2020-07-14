import React from "react";
import styled from "styled-components";
import PokeballSvg from "../assets/PokeCard/pokeballCard.svg";
import { padNumber } from "../utils/PadNumber";
import { Props } from "../types/types";

const PokeCard: React.FC<Props> = (props) => {
  return (
    <div>
      <Card>
        <CardNumber>#{padNumber(props.number + 1)}</CardNumber>
        <CardTitle>{props.name}</CardTitle>
        <div>
          <PokeTypeWrapper>
            {props.types.map((index) => (
              <PokemonType key={index.type.name}>{index.type.name}</PokemonType>
            ))}
          </PokeTypeWrapper>
          <img src={props.image} alt={props.name} style={{ position: "absolute", right: "1rem" }} />
        </div>
      </Card>
    </div>
  );
};

const Card = styled.div`
  position: relative;
  margin: 0 0.5rem 1rem 0;
  padding: 1rem;
  width: 9.5rem;
  height: 7.5rem;
  border-radius: 1rem;
  font-weight: bolder;
  background-color: #f2f2f2;
  background-image: url(${PokeballSvg});
  background-repeat: no-repeat;
  background-position: right bottom;
`;

const CardTitle = styled.h2`
  color: #4f4f4f;
  font-size: 0.9rem;
  text-transform: capitalize;
`;

const CardNumber = styled.p`
  color: #828282;
  font-size: 0.9rem;
  position: absolute;
  margin: 0;
  top: 1rem;
  right: 1rem;
`;

const PokeTypeWrapper = styled.div`
  position: absolute;
  bottom: 1rem;
  display: flex;
  flex-direction: column-reverse;
  align-content: flex-start;
`;

const PokemonType = styled.p`
  color: #4f4f4f;
  font-size: 0.4rem;
  background: #e0e0e0;
  border-radius: 0.5rem;
  text-transform: uppercase;
  padding: 0.2rem 0.4rem;
  align-self: flex-end;
  align-self: flex-start;
`;

export default PokeCard;
