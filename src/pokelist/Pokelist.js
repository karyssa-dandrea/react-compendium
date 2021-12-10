export default function PokeList({ pokemon }) {
  return (
    <div className="pokedex">
      {pokemon.map((poke) => (
        <div key={poke.id} className="pokeCard">
          <p key={poke.id}>{poke.pokemon}</p>
          <img src={poke.url_image} style={{ height: '200px' }} />
          <p>HP: {poke.hp}</p>
          <p>Attack: {poke.attack}</p>
          <p>Defense: {poke.defense}</p>
          <p>Type: {poke.type_1}</p>
        </div>
      ))}
    </div>
  );
}
