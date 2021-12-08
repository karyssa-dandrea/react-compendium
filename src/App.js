import { useState, useEffect } from 'react';
import './App.css';
import { getPokemon } from './services/pokemon';
import PokeList from './pokelist/Pokelist';

function App() {
  const [pokemon, setPokemon] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getPokemon();
      setPokemon(data.results);
    };
    fetchData();
  }, []);

  return (
    <div className="App">
      <h1>Pokedex</h1>
      <>
        <PokeList pokemon={pokemon} />
      </>
    </div>
  );
}

export default App;
