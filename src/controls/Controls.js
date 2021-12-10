import Button from '@mui/material/Button';

export default function Controls({
  query,
  setQuery,
  setLoading,
  types,
  setTypes,
  selectedType,
  setSelectedType,
}) {
  return (
    <div>
      <input
        type="text"
        placeholder="Search Pokemon"
        value={query}
        onChange={(e) => {
          setQuery(e.target.value);
        }}
      />
      <select value={selectedType} onChange={(e) => setSelectedType(e.target.value)}>
        <option value="All">All</option>
        <option value="electric">Electric</option>
        <option value="fire">Fire</option>
        <option value="ghost">Ghost</option>
        <option value="fairy">Fairy</option>
        <option value="grass">Grass</option>
        <option value="ground">Ground</option>
        <option value="flying">Flying</option>
        <option value="ice">Ice</option>
        <option value="fighting">Fighting</option>
        <option value="dragon">Dragon</option>
        <option value="poison">Poison</option>
        <option value="steel">Steel</option>
        <option value="dark">Dark</option>
        <option value="psychic">Pyschic</option>
        <option value="rock">Rock</option>
        <option value="water">Water</option>
        <option value="normal">Normal</option>
      </select>
      <Button variant="contained" size="small" onClick={() => setLoading(true)}>
        Search
      </Button>
    </div>
  );
}
