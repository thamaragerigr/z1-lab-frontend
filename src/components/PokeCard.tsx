import React from 'react'
import styled from 'styled-components'

const Card = styled.div`
    margin-right: .5rem;
    margin-bottom: 1rem;
    width: 9.5rem;
    height: 7.5rem;
    // padding: 1rem 0rem 0rem 1rem;
    border-radius: 1rem;
    background-color: #F2F2F2;
`;

const CardTitle = styled.h2`
    color: #4F4F4F;
    font-weight: bold;
    font-size: .9rem;
    text-transform: capitalize;
`;

interface Props {
  name: string;
  number?: number;
  abilities?: string[];
  image?: string
}

const PokeCard:React.FC<Props> = (props) => {
    return(
     <div>
        <Card>
          <CardTitle>{props.name}</CardTitle>
        </Card>
     </div>
    )
}

export default PokeCard