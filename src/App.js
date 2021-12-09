import { useState, useEffect } from 'react';
import './App.css';
import { getPokemon } from './services/pokemon';
import PokeList from './pokelist/Pokelist';
import pokemonbackground from './pokemonbackground.webp';
import Controls from './controls/Controls';

function App() {
  const [pokemon, setPokemon] = useState([]);
  const [query, setQuery] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getPokemon(query);
      setPokemon(data.results);
      setLoading(false);
    };
    if (loading) {
      fetchData();
    }
  }, [loading, query]);

  return (
    <div className="App" style={{ backgroundImage: `url(${pokemonbackground})` }}>
      <h1>Pokedex</h1>
      {loading && <span className="loader"></span>}
      {!loading && (
        <>
          <PokeList pokemon={pokemon} />
          <Controls query={query} setQuery={setQuery} />
        </>
      )}
    </div>
  );
}

export default App;
