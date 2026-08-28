import Section from "./Section";
import { site } from "../../data/site";

const Hero = () => {
  return (
    <Section>
      <div className="grid items-center gap-16 lg:grid-cols-2">
        {/* Left Side */}
        <div>
          <div className="inline-flex items-center rounded-full border border-zinc-200 px-4 py-2 text-sm text-zinc-600">
            React • Tailwind • Copy & Paste
          </div>

          <h1 className="mt-8 text-5xl font-bold tracking-tight lg:text-7xl">
            Build faster with beautiful UI components.
          </h1>

          <p className="mt-6 text-lg leading-8 text-zinc-600">
            PixelUI is a handcrafted React + Tailwind component library where
            every component is built from scratch and ready to copy into your
            project.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <button className="rounded-xl bg-zinc-900 px-6 py-3 text-white transition hover:-translate-y-0.5 hover:bg-zinc-800">
              Browse Components
            </button>

            <button className="rounded-xl border border-zinc-300 px-6 py-3 transition hover:bg-zinc-100">
              GitHub
            </button>
          </div>
        </div>

        {/* Right Side Preview */}
        <div className="relative">
          <div className="absolute -top-8 -right-8 h-40 w-40 rounded-full bg-blue-100 blur-3xl"></div>

          <div className="relative rounded-3xl border border-zinc-200 bg-white p-6 shadow-xl">
            <div className="mb-6 flex items-center justify-between">
              <div className="flex gap-2">
                <div className="h-3 w-3 rounded-full bg-red-400"></div>
                <div className="h-3 w-3 rounded-full bg-yellow-400"></div>
                <div className="h-3 w-3 rounded-full bg-green-400"></div>
              </div>

              <span className="text-sm text-zinc-500">Button.jsx</span>
            </div>

            <div className="rounded-xl bg-zinc-950 p-5 text-zinc-100">
              <code className="text-sm">
                {`<Button variant="primary">
  Get Started
</Button>`}
              </code>
            </div>

            <div className="mt-6 flex flex-wrap gap-3">
              <button className="rounded-lg bg-black px-4 py-2 text-white">
                Primary
              </button>

              <button className="rounded-lg border border-zinc-300 px-4 py-2">
                Outline
              </button>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Hero;