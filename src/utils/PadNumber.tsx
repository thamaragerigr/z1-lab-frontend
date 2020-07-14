export const padNumber = (num: number) => {
  let pokemonNumber = num.toString();
  while (pokemonNumber.length < 3) {
    pokemonNumber = `0${pokemonNumber}`;
  }
  return pokemonNumber;
};
