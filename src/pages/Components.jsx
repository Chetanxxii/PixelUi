import { useMemo, useState } from "react";

import Navbar from "../components/layout/Navbar";
import Container from "../components/layout/Container";
import Section from "../components/layout/Section";

import SearchBar from "../components/shared/SearchBar";
import ComponentCard from "../components/shared/ComponentCard";

import { components } from "../data/components";
import CategoryFilter from "../components/shared/CategoryFilter";
import Footer from "../components/layout/Footer";

const Components = () => {
  const [search, setSearch] = useState("");

  const [category, setCategory] = useState("All");

  const categories = [
  "All",
  ...new Set(components.map((item) => item.category)),
];

 const filtered = useMemo(() => {
  return components.filter((item) => {
    const matchesSearch = item.title
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesCategory =
      category === "All" || item.category === category;

    return matchesSearch && matchesCategory;
  });
}, [search, category]);

  return (
    <>
      <Navbar />

      <Section>
        <Container>
          <div className="max-w-3xl">
            <p className="text-sm uppercase tracking-widest text-zinc-500">
              PixelUI Library
            </p>

            <h1 className="mt-3 text-5xl font-bold tracking-tight">
              Browse Components
            </h1>

            <p className="mt-5 text-lg text-zinc-600">
              Search, preview and copy handcrafted React +
              Tailwind components.
            </p>

            <p className="mt-3 text-sm text-zinc-500">
  {filtered.length} component{filtered.length !== 1 ? "s" : ""} available
</p>
          </div>

          <SearchBar value={search} onChange={setSearch} />
          <CategoryFilter
  categories={categories}
  active={category}
  onChange={setCategory}
/>

          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {filtered.map((component) => (
              <ComponentCard
                key={component.id}
                component={component}
              />
            ))}
          </div>

          {filtered.length === 0 && (
  <div className="mt-20 text-center">
    <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-zinc-100 text-2xl">
      🔍
    </div>

    <h3 className="mt-5 text-xl font-semibold">
      No components found
    </h3>

    <p className="mt-2 text-zinc-500">
      Try another search or category.
    </p>
  </div>
)}
        </Container>
      </Section>
      <Footer/>
    </>
  );
};

export default Components;