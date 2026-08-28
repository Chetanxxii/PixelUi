import Navbar from "../components/layout/Navbar";
import Section from "../components/layout/Section";
import ButtonPreview from "../components/ui/Button/ButtonPreview";
import CopyButton from "../components/shared/CopyButton";
import { buttonCode } from "../components/ui/Button/ButtonCode";

const ButtonPage = () => {
  return (
    <>
      <Navbar />

      <Section>
        <div className="max-w-3xl">
          <h1 className="text-4xl font-bold tracking-tight">
            Button
          </h1>

          <p className="mt-4 text-zinc-600">
            Reusable buttons with multiple variants and sizes.
          </p>
        </div>
      </Section>

      <Section>
        <div className="space-y-6">
          <ButtonPreview />

          <div className="rounded-2xl border border-zinc-200 bg-white p-6">
  <h2 className="mb-4 text-xl font-semibold">Usage</h2>

  <div className="rounded-2xl border border-zinc-200 bg-white p-6">
  <h2 className="mb-6 text-xl font-semibold">Props</h2>

  <div className="overflow-x-auto">
    <table className="w-full border-collapse">
      <thead>
        <tr className="border-b border-zinc-200 text-left">
          <th className="pb-3">Prop</th>
          <th className="pb-3">Type</th>
          <th className="pb-3">Default</th>
        </tr>
      </thead>

      <tbody className="text-zinc-600">
        <tr className="border-b border-zinc-100">
          <td className="py-3 font-medium">variant</td>
          <td>string</td>
          <td>"primary"</td>
        </tr>

        <tr className="border-b border-zinc-100">
          <td className="py-3 font-medium">size</td>
          <td>string</td>
          <td>"md"</td>
        </tr>

        <tr>
          <td className="py-3 font-medium">disabled</td>
          <td>boolean</td>
          <td>false</td>
        </tr>
      </tbody>
    </table>
  </div>
</div>

 <div className="overflow-hidden rounded-2xl border border-zinc-200">
  <div className="flex items-center justify-between border-b border-zinc-800 bg-zinc-900 px-6 py-4">
    <h2 className="font-semibold text-white">Button.jsx</h2>

    <CopyButton code={buttonCode} />
  </div>

  <div className="bg-zinc-950 p-6 text-zinc-100">
    <pre className="overflow-x-auto text-sm">
      <code>{buttonCode}</code>
    </pre>
  </div>
</div>
</div>

          <div className="rounded-2xl border border-zinc-200 bg-zinc-950 p-6 text-zinc-100">
            <div className="mb-4 flex items-center justify-between">
              <h2 className="font-semibold">Code</h2>

              <CopyButton code={buttonCode} />
            </div>

            <pre className="overflow-x-auto text-sm">
              <code>{buttonCode}</code>
            </pre>
          </div>
        </div>
      </Section>
    </>
  );
};

export default ButtonPage;