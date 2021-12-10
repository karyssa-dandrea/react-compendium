import Controls from './Controls';
import { render } from '@testing-library/react';

test('renders the controls component', () => {
  const pokeCards = render(
    <Controls query="clefairy" types={['fairy']} selectedType="fairy" order="asc" />
  );
  expect(pokeCards).toMatchSnapshot();
});
