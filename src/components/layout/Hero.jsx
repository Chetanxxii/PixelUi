import Section from "./Section";
import { site } from "../../data/site";

const Hero = () => {
  return (
    <Section>
      <div className="max-w-3xl">
        <p className="mb-4 text-sm text-zinc-500">
          React + Tailwind CSS
        </p>

        <h1 className="text-5xl font-bold tracking-tight">
          {site.tagline}
        </h1>

        <p className="mt-6 text-lg text-zinc-600">
          {site.description}
        </p>

        <div className="mt-10 flex gap-4">
          <button className="rounded-xl bg-black px-6 py-3 text-white">
            Browse Components
          </button>

          <button className="rounded-xl border border-zinc-300 px-6 py-3">
            GitHub
          </button>
        </div>

        <div className="rounded-3xl border border-zinc-200 bg-zinc-50 p-6 shadow-sm">
  <div className="mb-6 rounded-xl bg-zinc-900 px-4 py-3 text-white">
    Button Component
  </div>

  <div className="space-y-3">
    <div className="h-3 w-24 rounded bg-zinc-300"></div>
    <div className="h-3 w-40 rounded bg-zinc-300"></div>
    <button className="rounded-lg bg-black px-4 py-2 text-white">
      Preview
    </button>
  </div>
</div>
      </div>
    </Section>
  );
};

export default Hero;