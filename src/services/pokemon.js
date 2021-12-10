export async function getPokemon(query, selectedType, order) {
  const params = new URLSearchParams();
  params.set('pokemon', query);
  params.set('direction', order);
  params.set('sort', 'pokemon');

  if (selectedType !== 'all') {
    params.set('type', selectedType);
  }
  const resp = await fetch(
    `https://pokedex-alchemy.herokuapp.com/api/pokedex?${params.toString()}`
  );
  const data = await resp.json();
  return data;
}

export async function getTypes() {
  const resp = await fetch('https://pokedex-alchemy.herokuapp.com/api/pokedex/types');
  const data = await resp.json();
  return data.map((item) => item.type);
}
