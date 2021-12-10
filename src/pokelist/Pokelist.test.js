import PokeList from './Pokelist';

test('renders the pokemon names', () => {
  const pokeNames = render(<PokeList pokemon={['pikachu']} />);
  expect(pokeNames).toMatchSnapshot;
});
