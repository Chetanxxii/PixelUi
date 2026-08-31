const CategoryFilter = ({
  categories,
  active,
  onChange,
}) => {
  return (
    <div className="mt-8 flex flex-wrap gap-3">
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => onChange(category)}
          className={`rounded-full px-4 py-2 text-sm transition ${
            active === category
              ? "bg-zinc-900 text-white"
              : "border border-zinc-300 hover:bg-zinc-100"
          }`}
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default CategoryFilter;