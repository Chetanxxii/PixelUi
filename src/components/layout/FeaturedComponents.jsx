import Section from "./Section";

const components = [
  {
    title: "Button",
    desc: "Reusable buttons with multiple variants."
  },
  {
    title: "Input",
    desc: "Clean and accessible input fields."
  },
  {
    title: "Card",
    desc: "Flexible content containers."
  }
];

const FeaturedComponents = () => {
  return (
    <Section>
      <div className="mb-12">
        <h2 className="text-3xl font-bold">Featured Components</h2>
        <p className="mt-3 text-zinc-600">
          Built with React and Tailwind. Copy, paste and customize.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {components.map((item) => (
          <div
            key={item.title}
            className="rounded-2xl border border-zinc-200 p-6 transition hover:-translate-y-1 hover:shadow-lg"
          >
            <div className="mb-5 h-10 w-10 rounded-lg bg-zinc-900 text-white flex items-center justify-center">
              P
            </div>

            <h3 className="font-semibold">{item.title}</h3>

            <p className="mt-2 text-sm text-zinc-600">
              {item.desc}
            </p>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default FeaturedComponents;