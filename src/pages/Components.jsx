import { useMemo, useState } from "react";

import Navbar from "../components/layout/Navbar";
import Container from "../components/layout/Container";
import Section from "../components/layout/Section";

import SearchBar from "../components/shared/SearchBar";
import ComponentCard from "../components/shared/ComponentCard";

import { components } from "../data/components";

const Components = () => {
  const [search, setSearch] = useState("");

  const filtered = useMemo(() => {
    return components.filter((item) =>
      item.title.toLowerCase().includes(search.toLowerCase())
    );
  }, [search]);

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
          </div>

          <SearchBar value={search} onChange={setSearch} />

          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {filtered.map((component) => (
              <ComponentCard
                key={component.id}
                component={component}
              />
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="mt-20 text-center text-zinc-500">
              No components found.
            </div>
          )}
        </Container>
      </Section>
    </>
  );
};

export default Components;