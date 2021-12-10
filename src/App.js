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
  const [order, setOrder] = useState('asc');

  useEffect(() => {
    const fetchData = async () => {
      const data = await getPokemon(query, selectedType, order);
      setPokemon(data.results);
      setLoading(false);
    };
    if (loading) {
      fetchData();
    }
  }, [loading, query, selectedType, order]);

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
      <Controls
        query={query}
        setQuery={setQuery}
        setLoading={setLoading}
        types={types}
        selectedType={selectedType}
        setSelectedType={setSelectedType}
        order={order}
        setOrder={setOrder}
      />
      {loading && <div className="loader">...Loading</div>}

      {!loading && <PokeList pokemon={pokemon} loading={loading} setLoading={setLoading} />}
    </div>
  );
}

export default App;
