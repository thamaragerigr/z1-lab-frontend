import React from 'react'

interface Props {
  name: string;
  number: number;
  abilities: string[];
  image: string
}

const PokeCard:React.FC<Props> = (props) => {
    return(
     <div>
       PokeCard of {props.name} <br/>
       PokeCard of {props.number} <br/>
       PokeCard of {props.abilities} <br/>
       PokeCard of {props.image} <br/>
     </div>
    )
}

export default PokeCard