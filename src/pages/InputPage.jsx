import DocsLayout from "../components/layout/DocsLayout";

import InputPreview from "../components/ui/Input/InputPreview";
import { inputCode } from "../components/ui/Input/InputCode";

import PreviewCard from "../components/shared/PreviewCard";
import CodeBlock from "../components/shared/CodeBlock";
import PropsTable from "../components/shared/PropsTable";

const inputProps = [
  {
    name: "type",
    type: "string",
    default: '"text"',
  },
  {
    name: "placeholder",
    type: "string",
    default: '"Enter text..."',
  },
  {
    name: "disabled",
    type: "boolean",
    default: "false",
  },
];

const InputPage = () => {
  return (
    <DocsLayout
      title="Input"
      description="Accessible input field with clean styling and focus states."
    >
      <PreviewCard title="Live Preview">
        <InputPreview />
      </PreviewCard>

      <CodeBlock title="Input.jsx" code={inputCode} />

      <PropsTable props={inputProps} />
    </DocsLayout>
  );
};

export default InputPage;