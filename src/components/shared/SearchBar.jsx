const SearchBar = ({ value, onChange }) => {
  return (
    <div className="mt-10">
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Search components..."
        className="w-full rounded-2xl border border-zinc-200 bg-white px-5 py-4 outline-none transition focus:border-zinc-900"
      />
    </div>
  );
};

export default SearchBar;