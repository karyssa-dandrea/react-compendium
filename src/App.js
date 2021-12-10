import { useState, useEffect } from 'react';
import './App.css';
import { getPokemon, getTypes } from './services/pokemon';
import PokeList from './pokelist/Pokelist';
import pokemonbackground from './pokemonbackground.webp';
import Controls from './controls/Controls';

function App() {
  const [pokemon, setPokemon] = useState([]);
  const [query, setQuery] = useState('');
  const [loading, setLoading] = useState(true);
  const [types, setTypes] = useState([]);
  const [selectedType, setSelectedType] = useState('all');

  useEffect(() => {
    const fetchData = async () => {
      const data = await getPokemon(query, selectedType);
      setPokemon(data.results);
      setLoading(false);
    };
    if (loading) {
      fetchData();
    }
  }, [loading, query, selectedType]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getTypes();
      setTypes(data);
    };
    fetchData();
  }, []);

  return (
    <div className="App" style={{ backgroundImage: `url(${pokemonbackground})` }}>
      <h1>Pokedex</h1>
      {loading && <span className="loader"></span>}
      {!loading && (
        <>
          <PokeList pokemon={pokemon} />
          <Controls
            query={query}
            setQuery={setQuery}
            setLoading={setLoading}
            types={types}
            selectedType={selectedType}
            setSelectedType={setSelectedType}
          />
        </>
      )}
    </div>
  );
}

export default App;
