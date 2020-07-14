import React from "react";
import styled from "styled-components";
import PokeballSvg from "../assets/PokeCard/pokeballCard.svg";
import { padNumber } from '../utils/PadNumber';
import { Props } from "../types/types";

const PokeCard: React.FC<Props> = (props) => {
  return (
    <div>
      <Card>
        <CardNumber>#{padNumber( props.number + 1 )}</CardNumber>
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
  margin-right: 0.5rem;
  margin-bottom: 1rem;
  width: 9.5rem;
  height: 7.5rem;
  padding: 1rem;
  border-radius: 1rem;
  background-image: url(${PokeballSvg});
  background-repeat: no-repeat;
  background-position: right bottom;
  background-color: #f2f2f2;
  position: relative;
`;

const CardTitle = styled.h2`
  color: #4f4f4f;
  font-weight: bold;
  font-size: 0.9rem;
  text-transform: capitalize;
`;

const CardNumber = styled.p`
  color: #828282;
  font-weight: bold;
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
  font-weight: bolder;
  font-size: 6px;
  background: #e0e0e0;
  border-radius: 8px;
  text-transform: uppercase;
  padding: 0.2rem 0.4rem;
  align-self: flex-end;
  align-self: flex-start;
`;

export default PokeCard;
