import Section from "./Section";
import Button from "../ui/Button";
import Input from "../ui/input/Input";
import CopyButton from "../shared/CopyButton";
import { buttonCode } from "../ui/Button/ButtonCode";

const ComponentShowcase = () => {
  return (
    <Section>
      <div className="text-center">
        <p className="text-sm uppercase tracking-[0.25em] text-zinc-500">
          Built Components
        </p>

        <h2 className="mt-3 text-4xl font-bold tracking-tight">
          See the components before you copy them.
        </h2>

        <p className="mx-auto mt-4 max-w-2xl text-lg text-zinc-600">
          Every component in PixelUI includes a live preview, clean React code,
          and a one-click copy experience.
        </p>
      </div>

      <div className="mt-16 grid gap-8 lg:grid-cols-2">
        {/* Live Preview */}
        <div className="rounded-3xl border border-zinc-200 bg-white p-8 shadow-sm">
          <div className="mb-6 flex items-center justify-between">
            <h3 className="font-semibold">Live Preview</h3>
            <span className="text-sm text-zinc-500">Interactive</span>
          </div>

          <div className="space-y-6">
            <Button>Get Started</Button>

            <Input placeholder="Email address" />

            <div className="flex gap-3">
              <Button variant="outline">Outline</Button>
              <Button variant="ghost">Ghost</Button>
            </div>
          </div>
        </div>

        {/* Code Preview */}
        <div className="overflow-hidden rounded-3xl border border-zinc-200 shadow-sm">
          <div className="flex items-center justify-between border-b border-zinc-800 bg-zinc-900 px-6 py-4">
            <h3 className="font-semibold text-white">Button.jsx</h3>

            <CopyButton code={buttonCode} />
          </div>

          <div className="bg-zinc-950 p-6">
            <pre className="overflow-x-auto text-sm leading-7 text-zinc-100">
              <code>{buttonCode}</code>
            </pre>
          </div>
        </div>


              <div className="mt-16 flex flex-wrap items-center justify-center gap-8 border-t border-zinc-200 pt-8 text-sm text-zinc-500">
        <span>Copy & Paste</span>
        <span>React</span>
        <span>Tailwind CSS</span>
        <span>No npm package</span>
      </div>
      </div>
    </Section>
  );
};

export default ComponentShowcase;