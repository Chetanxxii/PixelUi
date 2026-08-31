import { Link } from "react-router";
import Navbar from "../components/layout/Navbar";
import Section from "../components/layout/Section";
import Container from "../components/layout/Container";
import Badge from "../components/ui/Badge";
import Footer from "../components/layout/Footer";

const Docs = () => {
  return (
    <>
      <Navbar />

      <Section>
        <Container>
          <div className="max-w-3xl">
            <Badge>Documentation</Badge>

            <h1 className="mt-6 text-5xl font-bold tracking-tight">
              Build beautiful React components without extra packages.
            </h1>

            <p className="mt-6 text-lg leading-8 text-zinc-600">
              PixelUI is a handcrafted React + Tailwind CSS component library
              where every component is built from scratch and designed to be
              copied directly into your project.
            </p>

            <div className="mt-10 flex gap-4">
              <Link
                to="/components"
                className="rounded-xl bg-zinc-900 px-6 py-3 text-white"
              >
                Browse Components
              </Link>

              <Link
                to="/"
                className="rounded-xl border border-zinc-300 px-6 py-3"
              >
                Back Home
              </Link>
            </div>
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <div className="grid gap-6 md:grid-cols-3">
            <div className="rounded-2xl border border-zinc-200 p-6">
              <h3 className="font-semibold">No npm package</h3>
              <p className="mt-3 text-sm text-zinc-600">
                Copy and paste components directly.
              </p>
            </div>

            <div className="rounded-2xl border border-zinc-200 p-6">
              <h3 className="font-semibold">React + Tailwind</h3>
              <p className="mt-3 text-sm text-zinc-600">
                Built with simple, understandable code.
              </p>
            </div>

            <div className="rounded-2xl border border-zinc-200 p-6">
              <h3 className="font-semibold">Reusable</h3>
              <p className="mt-3 text-sm text-zinc-600">
                Clean APIs designed for real projects.
              </p>
            </div>
          </div>
        </Container>
      </Section>
      <Section>
  <Container>
    <div className="max-w-3xl">
      <h2 className="text-3xl font-bold">
        The PixelUI Philosophy
      </h2>

      <div className="mt-8 space-y-6 text-zinc-600 leading-8">
        <p>
          PixelUI is not another component package.
        </p>

        <p>
          Every component is built with plain React and Tailwind CSS so
          developers can actually understand what they're copying.
        </p>

        <p>
          No hidden abstractions. No unnecessary dependencies. Just clean,
          readable code.
        </p>
      </div>
    </div>
  </Container>
</Section>
<Section>
  <Container>
    <h2 className="mb-8 text-3xl font-bold">
      Folder Structure
    </h2>

    <div className="overflow-hidden rounded-3xl border border-zinc-200">
      <div className="bg-zinc-900 px-6 py-4 text-white">
        Project Structure
      </div>

      <div className="bg-zinc-950 p-6 text-zinc-100">
        <pre className="text-sm leading-7 overflow-x-auto">
{`src/
├── components/
│   ├── layout/
│   ├── shared/
│   └── ui/
│       ├── Button/
│       ├── Input/
│       ├── Card/
│       ├── Badge/
│       └── Checkbox/
├── data/
└── pages/`}
        </pre>
      </div>
    </div>
  </Container>
</Section>
<Section>
  <Container>
    <h2 className="mb-8 text-3xl font-bold">
      Available Components
    </h2>

    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {[
        "Button",
        "Input",
        "Card",
        "Badge",
        "Checkbox",
      ].map((item) => (
        <Link
          key={item}
          to={`/components/${item.toLowerCase()}`}
          className="rounded-2xl border border-zinc-200 p-5 transition hover:-translate-y-1 hover:shadow-lg"
        >
          <h3 className="font-semibold">{item}</h3>

          <p className="mt-2 text-sm text-zinc-600">
            View documentation →
          </p>
        </Link>
      ))}
    </div>
  </Container>
</Section>
<Section>
  <Container>
    <div className="rounded-3xl border border-zinc-200 bg-zinc-50 p-8">
      <h2 className="text-3xl font-bold">
        What's Next?
      </h2>

      <div className="mt-8 grid gap-3 text-zinc-600 md:grid-cols-2">
        <div>□ Textarea</div>
        <div>□ Radio</div>
        <div>□ Select</div>
        <div>□ Avatar</div>
        <div>□ Modal</div>
        <div>□ Toast</div>
        <div>□ Tooltip</div>
        <div>□ Accordion</div>
      </div>
    </div>
  </Container>
</Section>
<Footer/>
    </>
  );
};

export default Docs;