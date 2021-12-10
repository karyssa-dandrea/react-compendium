import Button from '@mui/material/Button';

export default function Controls({
  query,
  setQuery,
  setLoading,
  types,
  selectedType,
  setSelectedType,
  order,
  setOrder,
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
      <select value={order} onChange={(e) => setOrder(e.target.value)}>
        <option value="asc">Ascending</option>
        <option value="desc">Descending</option>
      </select>
      <select value={selectedType} onChange={(e) => setSelectedType(e.target.value)}>
        <option value="all">All</option>
        {types.map((type) => (
          <option key={type} value={type}>
            {type}
          </option>
        ))}
      </select>
      <Button variant="contained" size="small" onClick={() => setLoading(true)}>
        Search
      </Button>
    </div>
  );
}
