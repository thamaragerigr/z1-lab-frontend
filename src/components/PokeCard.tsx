import React from "react";
import styled from "styled-components";

interface Props {
  name: string;
  number?: number;
  types: any[];
  image: string;
}

const PokeCard: React.FC<Props> = (props) => {
  return (
    <div>
      <Card>
        <CardNumber>#00{props.number}</CardNumber>
        <CardTitle>{props.name}</CardTitle>
        <CardContent>
          <div>
            {props.types.map((i) => (
              <PokemonType key={i.type.name}>{i.type.name}</PokemonType>
            ))}
          </div>
          <img src={props.image} alt={props.name} />
        </CardContent>
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

const CardContent = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 0;
`;

const PokemonType = styled.p`
  color: #4f4f4f;
  font-weight: bolder;
  font-size: 6px;
  background: #e0e0e0;
  border-radius: 8px;
  text-transform: uppercase;
  padding: 0.2rem 0.4rem;
`;

export default PokeCard;
