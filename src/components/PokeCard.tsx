import React from 'react'
import styled from 'styled-components'

const Card = styled.div`
    margin-right: 1rem;
    margin-bottom: 1rem;
    padding: 1.9rem 1rem;
    border-radius: 1rem;
    background-color: #F2F2F2;
    width: 156px;
    height: 120px;
`;

const CardTitle = styled.h2`
    color: #4F4F4F;
    font-weight: bold;
    font-size: 1rem;
    text-transform: capitalize;
`;

interface Props {
  name: string;
  number: number;
  abilities: string[];
  image: string
}

const PokeCard:React.FC<Props> = (props) => {
    return(
     <div>
        <Card>
          <CardTitle>{props.name}</CardTitle>
          #00{props.number} <br/>
          PokeCard of {props.abilities} <br/>
          <img src={props.image} alt={props.name} /> <br/>
        </Card>
     </div>
    )
}

export default PokeCard